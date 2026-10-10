// ─────────────────────────────────────────────────────────────
// 가나 단어 읽기 변환 & 정답 판정
// 단어를 읽기 단위(か, きゃ, っ, ん, ー …)로 쪼개고, 단위마다 허용 표기(로마자 / 한글 자모)를 둔다.
// 입력을 앞에서부터 단위별로 소비해 끝까지 정확히 소비되면 정답이다.
// 한글은 자모로 풀어서 비교하므로 っ·ん 이 앞 글자의 받침이 되는 경우(갓코, 텐푸라)도 자연스럽게 맞는다.
// ─────────────────────────────────────────────────────────────

// 기본 가나 표(HIRAGANA_TABLE)에 없는, 외래어 표기용 조합. 형식은 [히라가나, 로마자..., 한글...]
const EXTRA_KANA_READINGS = [
  ['ぁ','a','아'],['ぃ','i','이'],['ぅ','u','우'],['ぇ','e','에'],['ぉ','o','오'],
  ['ふぁ','fa','파','화'],['ふぃ','fi','피','휘'],['ふぇ','fe','페','훼'],['ふぉ','fo','포','훠'],['ふゅ','fyu','퓨','휴'],
  ['てぃ','ti','thi','티'],['でぃ','di','dhi','디'],['とぅ','tu','twu','투'],['どぅ','du','dwu','두'],
  ['てゅ','tyu','튜'],['でゅ','dyu','듀'],
  ['うぃ','wi','위'],['うぇ','we','웨'],['うぉ','wo','워'],
  ['しぇ','she','셰','세'],['ちぇ','che','체'],['じぇ','je','제'],['いぇ','ye','예'],
  ['つぁ','tsa','차','짜'],['くぁ','kwa','콰'],['ぐぁ','gwa','과'],
  ['ゔ','vu','bu','부'],['ゔぁ','va','ba','바'],['ゔぃ','vi','bi','비'],['ゔぇ','ve','be','베'],['ゔぉ','vo','bo','보'],
];

const KATAKANA_TO_HIRAGANA_OFFSET = 0x60;
const HANGUL_PATTERN = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;
// 장음으로 읽히는 모음 가나: 앞 모음이 키(key)일 때 생략해도 정답 처리 (예: こう → 코, せい → 세)
const LONG_VOWEL_KANA_BY_PREVIOUS_VOWEL = { a: ['あ'], i: ['い'], u: ['う'], e: ['い', 'え'], o: ['う', 'お'] };
const HANGUL_VOWEL_BY_ROMAJI_VOWEL = { a: 'ㅏ', i: 'ㅣ', u: 'ㅜ', e: 'ㅔ', o: 'ㅗ' };

const HANGUL_INITIALS = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';
const HANGUL_MEDIALS = ['ㅏ','ㅐ','ㅑ','ㅒ','ㅓ','ㅔ','ㅕ','ㅖ','ㅗ','ㅘ','ㅙ','ㅚ','ㅛ','ㅜ','ㅝ','ㅞ','ㅟ','ㅠ','ㅡ','ㅢ','ㅣ'];
const HANGUL_FINALS = ['','ㄱ','ㄲ','ㄳ','ㄴ','ㄵ','ㄶ','ㄷ','ㄹ','ㄺ','ㄻ','ㄼ','ㄽ','ㄾ','ㄿ','ㅀ','ㅁ','ㅂ','ㅄ','ㅅ','ㅆ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
const HANGUL_SYLLABLE_START = 0xAC00;
const HANGUL_SYLLABLE_COUNT = 11172;

function decomposeHangul(text) {
  return [...text].map(character => {
    const offset = character.charCodeAt(0) - HANGUL_SYLLABLE_START;
    if (offset < 0 || offset >= HANGUL_SYLLABLE_COUNT) return character;
    return HANGUL_INITIALS[Math.floor(offset / 588)] + HANGUL_MEDIALS[Math.floor((offset % 588) / 28)] + HANGUL_FINALS[offset % 28];
  }).join('');
}

// 마지막 음절에 받침을 붙인다. 붙일 수 없으면 자모를 그대로 덧붙인다.
function appendHangulFinal(syllables, finalJamo) {
  const lastSyllable = syllables[syllables.length - 1];
  if (lastSyllable) {
    const offset = lastSyllable.charCodeAt(0) - HANGUL_SYLLABLE_START;
    if (offset >= 0 && offset < HANGUL_SYLLABLE_COUNT && offset % 28 === 0) {
      syllables[syllables.length - 1] = String.fromCharCode(lastSyllable.charCodeAt(0) + HANGUL_FINALS.indexOf(finalJamo));
      return;
    }
  }
  syllables.push(finalJamo);
}

function convertKatakanaToHiragana(text) {
  return [...text].map(character => {
    const code = character.charCodeAt(0);
    return code >= 0x30A1 && code <= 0x30F6 ? String.fromCharCode(code - KATAKANA_TO_HIRAGANA_OFFSET) : character;
  }).join('');
}

// { 히라가나: { romaji: [...], hangul: [...] } }
function buildKanaReadingTable(hiraganaTable) {
  const readingTable = new Map();
  const allRows = [...Object.values(hiraganaTable).flat(), ...EXTRA_KANA_READINGS];
  for (const [hiragana, ...answers] of allRows) {
    readingTable.set(hiragana, {
      romaji: answers.filter(answer => !HANGUL_PATTERN.test(answer)),
      hangul: answers.filter(answer => HANGUL_PATTERN.test(answer)),
    });
  }
  return readingTable;
}

function getTrailingVowel(romaji) {
  const match = romaji.match(/[aeiou]$/);
  return match ? match[0] : '';
}

function unique(values) {
  return [...new Set(values)];
}

// 단어를 읽기 단위로 쪼갠다. 변환할 수 없는 글자가 있으면 즉시 Error 발생 (Fail-Fast).
function splitWordIntoUnits(word, readingTable) {
  const characters = [...word];
  const units = [];
  for (let index = 0; index < characters.length;) {
    const pairKana = characters.slice(index, index + 2).join('');
    const pairHiragana = convertKatakanaToHiragana(pairKana);
    if (pairKana.length === 2 && readingTable.has(pairHiragana)) {
      units.push({ kana: pairKana, type: 'kana', ...readingTable.get(pairHiragana) });
      index += 2;
      continue;
    }
    const kana = characters[index];
    const hiragana = convertKatakanaToHiragana(kana);
    if (hiragana === 'っ') units.push({ kana, type: 'sokuon' });
    else if (hiragana === 'ー') units.push({ kana, type: 'long' });
    else if (hiragana === 'ん') units.push({ kana, type: 'n' });
    else if (readingTable.has(hiragana)) units.push({ kana, type: 'kana', ...readingTable.get(hiragana) });
    else {
      const invalidCharacter = characters[index];
      const characterCode = invalidCharacter.charCodeAt(0).toString(16).toUpperCase();
      throw new Error(`[KanaTrainer] 발음 변환 실패: '${word}'에 유효하지 않은 문자 '${invalidCharacter}' (U+${characterCode})가 포함되어 있습니다. (위치: ${index + 1}번째 글자)`);
    }
    index += 1;
  }
  return units;
}

// 단위마다 허용 표기(romajiOptions / hangulOptions)와 대표 표기(romaji / hangul)를 채운다.
function fillUnitReadings(units) {
  units.forEach((unit, index) => {
    const previousUnit = units[index - 1];
    const nextUnit = units[index + 1];
    const previousVowel = previousUnit && previousUnit.type === 'kana' ? getTrailingVowel(previousUnit.romaji[0]) : '';

    if (unit.type === 'kana') {
      unit.romajiOptions = [...unit.romaji];
      unit.hangulOptions = unit.hangul.map(decomposeHangul);
      const longVowelKana = LONG_VOWEL_KANA_BY_PREVIOUS_VOWEL[previousVowel] || [];
      if (longVowelKana.includes(convertKatakanaToHiragana(unit.kana))) {
        unit.romajiOptions.push('');
        unit.hangulOptions.push('');
      }
      unit.displayRomaji = unit.romaji[0];
      unit.displayHangul = unit.hangul[0];
    } else if (unit.type === 'sokuon') {
      const nextConsonants = nextUnit && nextUnit.type === 'kana' ? nextUnit.romaji.map(romaji => romaji[0]) : [];
      unit.romajiOptions = unique([...nextConsonants, 't']);
      unit.hangulOptions = ['ㅅ', 'ㄱ', 'ㅂ', 'ㄷ'];
      unit.displayRomaji = nextConsonants[0] || 't';
      unit.displayHangul = 'ㅅ';
    } else if (unit.type === 'n') {
      unit.romajiOptions = ['n', 'nn', 'm'];
      unit.hangulOptions = ['ㄴ', 'ㅇ', 'ㅁ'];
      unit.displayRomaji = 'n';
      unit.displayHangul = 'ㄴ';
    } else {
      unit.romajiOptions = unique(['', previousVowel]);
      unit.hangulOptions = previousVowel ? ['', 'ㅇ' + HANGUL_VOWEL_BY_ROMAJI_VOWEL[previousVowel]] : [''];
      unit.displayRomaji = previousVowel;
      unit.displayHangul = '-';
    }
  });
}

function buildDisplayHangul(units) {
  const syllables = [];
  for (const unit of units) {
    if (unit.type === 'sokuon' || unit.type === 'n') appendHangulFinal(syllables, unit.displayHangul);
    else syllables.push(unit.displayHangul);
  }
  return syllables.join('');
}

// 단어 → { units, romaji, hangul }. 유효하지 않은 입력이면 즉시 Error 발생 (Fail-Fast).
function buildWordReading(word, readingTable) {
  if (typeof word !== 'string' || word.length === 0) {
    throw new Error(`[KanaTrainer] 발음 변환 실패: 유효하지 않은 입력입니다: ${JSON.stringify(word)}`);
  }
  const units = splitWordIntoUnits(word, readingTable);
  fillUnitReadings(units);
  return {
    units,
    romaji: units.map(unit => unit.displayRomaji).join(''),
    hangul: buildDisplayHangul(units),
  };
}

// 문장 → { units, romaji, hangul, romajiSpaced, hangulSpaced }. 조사 は('와/wa') 자동 보정 및 수동 오버라이드 지원.
function buildSentenceReading(sentenceItem, readingTable) {
  if (!sentenceItem || typeof sentenceItem !== 'object') {
    throw new Error(`[KanaTrainer] 문장 발음 변환 실패: 유효하지 않은 문장 아이템입니다: ${JSON.stringify(sentenceItem)}`);
  }

  // 1. 객체 단위 완전 오버라이드가 제공된 경우
  if (sentenceItem.reading && typeof sentenceItem.reading === 'object' && sentenceItem.reading.units) {
    return sentenceItem.reading;
  }

  const rawKanaText = sentenceItem.kana || '';
  if (!rawKanaText) {
    throw new Error(`[KanaTrainer] 문장 발음 변환 실패: kana 속성이 비어 있습니다: ${JSON.stringify(sentenceItem)}`);
  }
  if (/\s/.test(rawKanaText)) {
    throw new Error(`[KanaTrainer] 문장 데이터 규격 위반: kana 속성에 공백이 포함되어 있습니다. kana는 공백 없이 작성하고, 띄어쓰기는 kanaSpaced에 작성해야 합니다: '${rawKanaText}'`);
  }
  const spacedKanaText = sentenceItem.kanaSpaced || sentenceItem.kana || '';
  const tokens = spacedKanaText.trim().split(/[\s　]+/).filter(Boolean);

  const tokenReadings = [];
  for (const token of tokens) {
    const units = splitWordIntoUnits(token, readingTable);
    fillUnitReadings(units);

    // 어절 끝에 위치한 조사 は 및 인사말(こんにちは, こんばんは) 발음 보정:
    // - は母(はは)와 같은 예외 단어가 아닌 경우, 어절 맨 끝의 'は'는 조사이므로 '와 / wa'로 처리
    const hiraganaToken = convertKatakanaToHiragana(token);
    const lastCharacter = hiraganaToken[hiraganaToken.length - 1];
    if (lastCharacter === 'は' && hiraganaToken !== 'はは' && units.length > 0) {
      const lastUnit = units[units.length - 1];
      if (convertKatakanaToHiragana(lastUnit.kana) === 'は') {
        lastUnit.displayRomaji = 'wa';
        lastUnit.displayHangul = '와';
      }
    }

    tokenReadings.push({
      units,
      romaji: units.map(unit => unit.displayRomaji).join(''),
      hangul: buildDisplayHangul(units),
    });
  }

  if (tokenReadings.length === 0) {
    return buildWordReading(rawKanaText, readingTable);
  }

  const allUnits = tokenReadings.flatMap(reading => reading.units);
  const joinedRomaji = tokenReadings.map(reading => reading.romaji).join('');
  const joinedHangul = tokenReadings.map(reading => reading.hangul).join('');
  const spacedRomaji = tokenReadings.map(reading => reading.romaji).join(' ');
  const spacedHangul = tokenReadings.map(reading => reading.hangul).join(' ');

  // 2. 수동 오버라이드 필드 반영 (readingHangul / readingRomaji / readingHangulSpaced / readingRomajiSpaced)
  const finalHangul = sentenceItem.readingHangul || joinedHangul;
  const finalRomaji = sentenceItem.readingRomaji || joinedRomaji;
  const finalHangulSpaced = sentenceItem.readingHangulSpaced || (sentenceItem.readingHangul ? sentenceItem.readingHangul : spacedHangul);
  const finalRomajiSpaced = sentenceItem.readingRomajiSpaced || (sentenceItem.readingRomaji ? sentenceItem.readingRomaji : spacedRomaji);

  return {
    units: allUnits,
    romaji: finalRomaji,
    hangul: finalHangul,
    romajiSpaced: finalRomajiSpaced,
    hangulSpaced: finalHangulSpaced,
  };
}

function matchesAllUnits(input, optionLists) {
  let positions = new Set([0]);
  for (const options of optionLists) {
    const nextPositions = new Set();
    for (const position of positions) {
      for (const option of options) {
        if (input.startsWith(option, position)) nextPositions.add(position + option.length);
      }
    }
    if (nextPositions.size === 0) return false;
    positions = nextPositions;
  }
  return positions.has(input.length);
}

// typedAnswer 는 이미 소문자·공백 제거된 값. 장음 기호(-, ー, ~)와 아포스트로피는 무시한다.
function isWordReadingCorrect(reading, typedAnswer) {
  if (!reading || !Array.isArray(reading.units)) {
    throw new Error('[KanaTrainer] isWordReadingCorrect 호출 계약 위반: reading 객체 또는 reading.units가 유효하지 않습니다.');
  }
  const cleanedAnswer = typedAnswer.replace(/[-ー~'’]/g, '');
  if (!cleanedAnswer) return false;
  if (HANGUL_PATTERN.test(cleanedAnswer)) {
    return matchesAllUnits(decomposeHangul(cleanedAnswer), reading.units.map(unit => unit.hangulOptions));
  }
  return matchesAllUnits(cleanedAnswer, reading.units.map(unit => unit.romajiOptions));
}
