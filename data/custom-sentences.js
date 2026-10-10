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
    "meaning": "화장실은 어디인가요 (は: ~은/는)",
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
    "meaning": "이거 어디에 있어요 (は: ~은/는 / に: ~에)",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "doko"
  },
  {
    "kana": "こんにちは",
    "kanaSpaced": "こんにちは",
    "meaning": "안녕하세요 (は: '오늘은~' 유래 조사·발음 '와')",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "aisatsu"
  },
  {
    "kana": "これとこれください",
    "kanaSpaced": "これと これ ください",
    "meaning": "이거랑 이거 주세요 (と: ~와/과·and)",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "kore-kudasai"
  },
  {
    "kana": "これとこれおねがいします",
    "kanaSpaced": "これと これ おねがい します",
    "meaning": "이거랑 이거 부탁합니다 (と: ~와/과·and)",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "kore-kudasai"
  },
  {
    "kana": "これとこれをください",
    "kanaSpaced": "これと これを ください",
    "meaning": "이것과 이것을 주세요 (と: ~와/과·and / を: ~을/를)",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "kore-kudasai"
  },
  {
    "kana": "これとこれでおねがいします",
    "kanaSpaced": "これと これで おねがい します",
    "meaning": "이것과 이것으로 부탁합니다 (と: ~와/과·and / で: ~(으)로)",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "kore-kudasai"
  },
  {
    "kana": "これとこれです",
    "kanaSpaced": "これと これです",
    "meaning": "이거랑 이거예요 (と: ~와/과·and / です: ~입니다·예요)",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "kore-kudasai"
  },
  {
    "kana": "いじょうです",
    "kanaSpaced": "いじょうです",
    "meaning": "이상입니다",
    "type": "sentence",
    "category": "custom"
  },
  {
    "kana": "なんですか",
    "kanaSpaced": "なんですか",
    "meaning": "무엇인가요 / 뭔가요",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "nan"
  },
  {
    "kana": "これはなんですか",
    "kanaSpaced": "これは なんですか",
    "meaning": "이것은 무엇인가요 (は: ~은/는)",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "nan"
  },
  {
    "kana": "それはなんですか",
    "kanaSpaced": "それは なんですか",
    "meaning": "그것은 무엇인가요 (は: ~은/는)",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "nan"
  },
  {
    "kana": "あれはなんですか",
    "kanaSpaced": "あれは なんですか",
    "meaning": "저것은 무엇인가요 (は: ~은/는)",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "nan"
  },
  {
    "kana": "いち",
    "kanaSpaced": "いち",
    "meaning": "일·1",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "kazu"
  },
  {
    "kana": "に",
    "kanaSpaced": "に",
    "meaning": "이·2",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "kazu"
  },
  {
    "kana": "さん",
    "kanaSpaced": "さん",
    "meaning": "삼·3",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "kazu"
  },
  {
    "kana": "ひとつ",
    "kanaSpaced": "ひとつ",
    "meaning": "하나 (물건 1개)",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "kazu"
  },
  {
    "kana": "ふたつ",
    "kanaSpaced": "ふたつ",
    "meaning": "둘 (물건 2개)",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "kazu"
  },
  {
    "kana": "みっつ",
    "kanaSpaced": "みっつ",
    "meaning": "셋 (물건 3개)",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "kazu"
  },
  {
    "kana": "ひとつください",
    "kanaSpaced": "ひとつ ください",
    "meaning": "하나 주세요",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "kazu"
  },
  {
    "kana": "ふたつください",
    "kanaSpaced": "ふたつ ください",
    "meaning": "두 개 주세요",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "kazu"
  },
  {
    "kana": "いっかい",
    "kanaSpaced": "いっかい",
    "meaning": "1층 (촉음 발음 주의)",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "kai"
  },
  {
    "kana": "にかい",
    "kanaSpaced": "にかい",
    "meaning": "2층",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "kai"
  },
  {
    "kana": "さんがい",
    "kanaSpaced": "さんがい",
    "meaning": "3층 (탁음 'がい' 발음)",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "kai"
  },
  {
    "kana": "よんかい",
    "kanaSpaced": "よんかい",
    "meaning": "4층",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "kai"
  },
  {
    "kana": "ごかい",
    "kanaSpaced": "ごかい",
    "meaning": "5층",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "kai"
  },
  {
    "kana": "ろっかい",
    "kanaSpaced": "ろっかい",
    "meaning": "6층 (촉음 발음 주의)",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "kai"
  },
  {
    "kana": "ななかい",
    "kanaSpaced": "ななかい",
    "meaning": "7층",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "kai"
  },
  {
    "kana": "はっかい",
    "kanaSpaced": "はっかい",
    "meaning": "8층 (촉음 발음 주의)",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "kai"
  },
  {
    "kana": "きゅうかい",
    "kanaSpaced": "きゅうかい",
    "meaning": "9층",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "kai"
  },
  {
    "kana": "じゅっかい",
    "kanaSpaced": "じゅっかい",
    "meaning": "10층 (촉음 발음 주의)",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "kai"
  },
  {
    "kana": "なんかいですか",
    "kanaSpaced": "なんかいですか",
    "meaning": "몇 층인가요",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "kai"
  },
  {
    "kana": "なに",
    "kanaSpaced": "なに",
    "meaning": "뭐야 / 응?",
    "type": "sentence",
    "category": "custom",
    "relatedGroup": "nan"
  }
];
