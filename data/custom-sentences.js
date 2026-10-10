// 사용자 추가 문장
// 사용자가 직접 문장을 추가하고 수정할 수 있는 데이터 파일입니다.
// Antigravity를 통해 한글 문장을 요청하면 초보자용 일본어 표현을 제안받아 여기에 추가할 수 있습니다.
const RAW_CUSTOM_SENTENCES = [
  {
    "kana": "はじめまして",
    "kanaSpaced": "はじめまして",
    "meaning": "처음 뵙겠습니다",
    "type": "sentence",
    "category": "custom"
  },
  {
    "kana": "わかりました",
    "kanaSpaced": "わかりました",
    "meaning": "알겠습니다",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "wakaru"
  },
  {
    "kana": "わかりません",
    "kanaSpaced": "わかりません",
    "meaning": "모르겠습니다",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "wakaru"
  },
  {
    "kana": "わかった",
    "kanaSpaced": "わかった",
    "meaning": "알았어",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "wakaru"
  },
  {
    "kana": "わからない",
    "kanaSpaced": "わからない",
    "meaning": "몰라",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "wakaru"
  },
  {
    "kana": "あります",
    "kanaSpaced": "あります",
    "meaning": "있어요",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "aru"
  },
  {
    "kana": "ありません",
    "kanaSpaced": "ありません",
    "meaning": "없어요",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "aru"
  },
  {
    "kana": "ある",
    "kanaSpaced": "ある",
    "meaning": "있어",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "aru"
  },
  {
    "kana": "ない",
    "kanaSpaced": "ない",
    "meaning": "없어",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "aru"
  },
  {
    "kana": "できます",
    "kanaSpaced": "できます",
    "meaning": "할 수 있어요",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "dekiru"
  },
  {
    "kana": "できません",
    "kanaSpaced": "できません",
    "meaning": "못 해요",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "dekiru"
  },
  {
    "kana": "できる",
    "kanaSpaced": "できる",
    "meaning": "할 수 있어",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "dekiru"
  },
  {
    "kana": "できない",
    "kanaSpaced": "できない",
    "meaning": "못 해",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "dekiru"
  },
  {
    "kana": "いいです",
    "kanaSpaced": "いいです",
    "meaning": "좋아요",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "ii-dame"
  },
  {
    "kana": "だめです",
    "kanaSpaced": "だめです",
    "meaning": "안 돼요",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "ii-dame"
  },
  {
    "kana": "いいよ",
    "kanaSpaced": "いいよ",
    "meaning": "좋아",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "ii-dame"
  },
  {
    "kana": "だめ",
    "kanaSpaced": "だめ",
    "meaning": "안 돼",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "ii-dame"
  },
  {
    "kana": "おねがいします",
    "kanaSpaced": "おねがい します",
    "meaning": "부탁합니다",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "onegai"
  },
  {
    "kana": "おかいけいおねがいします",
    "kanaSpaced": "おかいけい おねがい します",
    "meaning": "계산 부탁합니다",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "kaikei"
  },
  {
    "kana": "ください",
    "kanaSpaced": "ください",
    "meaning": "주세요",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "kudasai"
  },
  {
    "kana": "いいえ",
    "kanaSpaced": "いいえ",
    "meaning": "아니요",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "hai-iie"
  },
  {
    "kana": "トイレはどこですか",
    "kanaSpaced": "トイレは どこですか",
    "meaning": "화장실은 어디인가요",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "doko"
  },
  {
    "kana": "どこですか",
    "kanaSpaced": "どこですか",
    "meaning": "어디인가요",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "doko"
  },
  {
    "kana": "これはどこにありますか",
    "kanaSpaced": "これは どこに ありますか",
    "meaning": "이거 어디에 있어요",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "doko"
  }
];
