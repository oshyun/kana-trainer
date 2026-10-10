// 여행에서 사용할 수 있는 일상대화 문장들
const RAW_SENTENCES = [
  {
    "kana": "すみません",
    "kanaSpaced": "すみません",
    "meaning": "죄송합니다 / 저기요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "ありがとうございます",
    "kanaSpaced": "ありがとう　ございます",
    "meaning": "감사합니다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "はい",
    "kanaSpaced": "はい",
    "meaning": "네",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "いいえ",
    "kanaSpaced": "いいえ",
    "meaning": "아니요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "おねがいします",
    "kanaSpaced": "おねがい　します",
    "meaning": "부탁합니다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "おはようございます",
    "kanaSpaced": "おはよう　ございます",
    "meaning": "안녕하세요 (아침)",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "こんにちは",
    "kanaSpaced": "こんにちは",
    "meaning": "안녕하세요 (낮)",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "こんばんは",
    "kanaSpaced": "こんばんは",
    "meaning": "안녕하세요 (저녁)",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "さようなら",
    "kanaSpaced": "さようなら",
    "meaning": "안녕히 가세요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "はじめまして",
    "kanaSpaced": "はじめまして",
    "meaning": "처음 뵙겠습니다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "かんこくごはなせますか",
    "kanaSpaced": "かんこくご　はなせますか",
    "meaning": "한국어를 할 수 있나요?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "わかりません",
    "kanaSpaced": "わかりません",
    "meaning": "모르겠습니다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "もういちどおねがいします",
    "kanaSpaced": "もう　いちど　おねがい　します",
    "meaning": "다시 한번 부탁드립니다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "ゆっくりはなしてください",
    "kanaSpaced": "ゆっくり　はなして　ください",
    "meaning": "천천히 말해주세요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "ちょっとまってください",
    "kanaSpaced": "ちょっと　まって　ください",
    "meaning": "조금 기다려주세요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "たすけてください",
    "kanaSpaced": "たすけて　ください",
    "meaning": "도와주세요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "これなんですか",
    "kanaSpaced": "これ　なんですか",
    "meaning": "이것은 무엇입니까?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "いくらですか",
    "kanaSpaced": "いくら　ですか",
    "meaning": "얼마입니까?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "これください",
    "kanaSpaced": "これ　ください",
    "meaning": "이것으로 주세요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "クレジットカードつかえますか",
    "kanaSpaced": "クレジットカード　つかえますか",
    "meaning": "신용카드 사용할 수 있나요?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "メニューください",
    "kanaSpaced": "メニュー　ください",
    "meaning": "메뉴판 주세요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "おすすめなんですか",
    "kanaSpaced": "おすすめ　なんですか",
    "meaning": "추천 메뉴는 무엇인가요?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "おみずください",
    "kanaSpaced": "おみず　ください",
    "meaning": "물 좀 주세요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "おかいけいおねがいします",
    "kanaSpaced": "おかいけい　おねがい　します",
    "meaning": "계산 부탁드립니다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "おいしいです",
    "kanaSpaced": "おいしい　です",
    "meaning": "맛있습니다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "ごちそうさまでした",
    "kanaSpaced": "ごちそうさまでした",
    "meaning": "잘 먹었습니다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "トイレどこですか",
    "kanaSpaced": "トイレ　どこですか",
    "meaning": "화장실은 어디인가요?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "えきどこですか",
    "kanaSpaced": "えき　どこですか",
    "meaning": "역은 어디인가요?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "まっすぐいってください",
    "kanaSpaced": "まっすぐ　いって　ください",
    "meaning": "쭉 가주세요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "みぎにまがってください",
    "kanaSpaced": "みぎに　まがって　ください",
    "meaning": "오른쪽으로 돌아주세요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "ひだりにまがってください",
    "kanaSpaced": "ひだりに　まがって　ください",
    "meaning": "왼쪽으로 돌아주세요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "ちずかいてください",
    "kanaSpaced": "ちず　かいて　ください",
    "meaning": "지도를 그려주세요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "ここどこですか",
    "kanaSpaced": "ここ　どこですか",
    "meaning": "여기는 어디인가요?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "きっぷうりばどこですか",
    "kanaSpaced": "きっぷうりば　どこですか",
    "meaning": "매표소는 어디인가요?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "このでんしゃどこにいきますか",
    "kanaSpaced": "この　でんしゃ　どこに　いきますか",
    "meaning": "이 전철은 어디로 가나요?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "つぎのえきどこですか",
    "kanaSpaced": "つぎの　えき　どこですか",
    "meaning": "다음 역은 어디인가요?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "おりるえきおしえてください",
    "kanaSpaced": "おりる　えき　おしえて　ください",
    "meaning": "내릴 역을 알려주세요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "タクシーよんでください",
    "kanaSpaced": "タクシー　よんで　ください",
    "meaning": "택시를 불러주세요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "ホテルまでおねがいします",
    "kanaSpaced": "ホテルまで　おねがい　します",
    "meaning": "호텔까지 부탁드립니다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "チェックインおねがいします",
    "kanaSpaced": "チェックイン　おねがい　します",
    "meaning": "체크인 부탁드립니다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "チェックアウトおねがいします",
    "kanaSpaced": "チェックアウト　おねがい　します",
    "meaning": "체크아웃 부탁드립니다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "よやくしています",
    "kanaSpaced": "よやく　しています",
    "meaning": "예약했습니다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "にもつあずかってください",
    "kanaSpaced": "にもつ　あずかって　ください",
    "meaning": "짐을 맡아주세요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "ワイファイのパスワードなんですか",
    "kanaSpaced": "ワイファイの　パスワード　なんですか",
    "meaning": "와이파이 비밀번호가 어떻게 되나요?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "あさごはんなんじからですか",
    "kanaSpaced": "あさごはん　なんじ　からですか",
    "meaning": "아침 식사는 몇 시부터인가요?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "へやそうじしてください",
    "kanaSpaced": "へや　そうじ　して　ください",
    "meaning": "방을 청소해주세요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "タオルかえてください",
    "kanaSpaced": "タオル　かえて　ください",
    "meaning": "수건을 교체해주세요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "おゆでません",
    "kanaSpaced": "おゆ　でません",
    "meaning": "따뜻한 물이 안 나와요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "エアコンこわれています",
    "kanaSpaced": "エアコン　こわれています",
    "meaning": "에어컨이 고장났어요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "あいていますか",
    "kanaSpaced": "あいて　いますか",
    "meaning": "열려 있나요? / 비어 있나요?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "しまっています",
    "kanaSpaced": "しまって　います",
    "meaning": "닫혀 있습니다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "しゃしんとってもいいですか",
    "kanaSpaced": "しゃしん　とっても　いいですか",
    "meaning": "사진을 찍어도 될까요?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "しゃしんとってください",
    "kanaSpaced": "しゃしん　とって　ください",
    "meaning": "사진 좀 찍어주세요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "これおねがいします",
    "kanaSpaced": "これ　おねがい　します",
    "meaning": "이것으로 부탁드립니다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "サイズあいません",
    "kanaSpaced": "サイズ　あいません",
    "meaning": "사이즈가 맞지 않아요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "ほかのいろありますか",
    "kanaSpaced": "ほかの　いろ　ありますか",
    "meaning": "다른 색상은 있나요?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "しちゃくしてもいいですか",
    "kanaSpaced": "しちゃく　しても　いいですか",
    "meaning": "입어봐도 될까요?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "みているだけです",
    "kanaSpaced": "みて　いる　だけです",
    "meaning": "그냥 보고 있어요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "すこしたかいです",
    "kanaSpaced": "すこし　たかい　です",
    "meaning": "조금 비싸네요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "やすくしてくれませんか",
    "kanaSpaced": "やすく　して　くれませんか",
    "meaning": "조금 깎아주시겠어요?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "ふくろいりません",
    "kanaSpaced": "ふくろ　いりません",
    "meaning": "봉투는 필요 없어요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "べつべつにはらえますか",
    "kanaSpaced": "べつべつに　はらえますか",
    "meaning": "따로따로 계산할 수 있나요?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "りょうしゅうしょください",
    "kanaSpaced": "りょうしゅうしょ　ください",
    "meaning": "영수증 주세요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "アレルギーあります",
    "kanaSpaced": "アレルギー　あります",
    "meaning": "알레르기가 있습니다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "にくぬいてください",
    "kanaSpaced": "にく　ぬいて　ください",
    "meaning": "고기는 빼주세요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "からくしないでください",
    "kanaSpaced": "からく　しないで　ください",
    "meaning": "맵지 않게 해주세요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "おもちかえりできますか",
    "kanaSpaced": "おもちかえり　できますか",
    "meaning": "포장 가능한가요?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "もちかえりです",
    "kanaSpaced": "もちかえり　です",
    "meaning": "포장입니다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "でんしゃにのります",
    "kanaSpaced": "でんしゃに　のります",
    "meaning": "전철을 탑니다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "バスにのります",
    "kanaSpaced": "バスに　のります",
    "meaning": "버스를 탑니다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "きっぷかいます",
    "kanaSpaced": "きっぷ　かいます",
    "meaning": "표를 삽니다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "すわってもいいですか",
    "kanaSpaced": "すわっても　いいですか",
    "meaning": "앉아도 될까요?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "ここあいていますか",
    "kanaSpaced": "ここ　あいて　いますか",
    "meaning": "여기 자리 있나요?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "えきにちかいですか",
    "kanaSpaced": "えきに　ちかい　ですか",
    "meaning": "역에서 가깝나요?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "とおいですか",
    "kanaSpaced": "とおい　ですか",
    "meaning": "먼가요?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "あるいていけますか",
    "kanaSpaced": "あるいて　いけますか",
    "meaning": "걸어서 갈 수 있나요?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "どれくらいかかりますか",
    "kanaSpaced": "どれくらい　かかりますか",
    "meaning": "얼마나 걸리나요?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "じかんありますか",
    "kanaSpaced": "じかん　ありますか",
    "meaning": "시간 있으신가요?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "まいごになりました",
    "kanaSpaced": "まいごに　なりました",
    "meaning": "길을 잃었어요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "けいさつよんでください",
    "kanaSpaced": "けいさつ　よんで　ください",
    "meaning": "경찰을 불러주세요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "きゅうきゅうしゃよんでください",
    "kanaSpaced": "きゅうきゅうしゃ　よんで　ください",
    "meaning": "구급차를 불러주세요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "びょういんどこですか",
    "kanaSpaced": "びょういん　どこですか",
    "meaning": "병원은 어디인가요?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "かばんなくしました",
    "kanaSpaced": "かばん　なくしました",
    "meaning": "가방을 잃어버렸어요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "パスポートなくしました",
    "kanaSpaced": "パスポート　なくしました",
    "meaning": "여권을 잃어버렸어요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "さいふなくしました",
    "kanaSpaced": "さいふ　なくしました",
    "meaning": "지갑을 잃어버렸어요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "きぶんわるいです",
    "kanaSpaced": "きぶん　わるい　です",
    "meaning": "속이 안 좋아요 / 아파요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "おなかいたいです",
    "kanaSpaced": "おなか　いたい　です",
    "meaning": "배가 아파요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "あたまいたいです",
    "kanaSpaced": "あたま　いたい　です",
    "meaning": "머리가 아파요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "くすりください",
    "kanaSpaced": "くすり　ください",
    "meaning": "약을 주세요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "かぜひきました",
    "kanaSpaced": "かぜ　ひきました",
    "meaning": "감기에 걸렸어요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "どういたしまして",
    "kanaSpaced": "どういたしまして",
    "meaning": "천만에요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "いってきます",
    "kanaSpaced": "いって　きます",
    "meaning": "다녀오겠습니다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "いってらっしゃい",
    "kanaSpaced": "いってらっしゃい",
    "meaning": "다녀오세요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "ただいま",
    "kanaSpaced": "ただいま",
    "meaning": "다녀왔습니다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "ありがとう",
    "kanaSpaced": "ありがとう",
    "meaning": "감사합니다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "どうぞ",
    "kanaSpaced": "どうぞ",
    "meaning": "제발, 여기요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "ごめんなさい",
    "kanaSpaced": "ごめんなさい",
    "meaning": "미안합니다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "おかえりなさい",
    "kanaSpaced": "おかえりなさい",
    "meaning": "어서 오세요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "おやすみなさい",
    "kanaSpaced": "おやすみなさい",
    "meaning": "안녕히 주무세요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "おつかれさまです",
    "kanaSpaced": "おつかれさまです",
    "meaning": "수고하셨습니다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "しつれいします",
    "kanaSpaced": "しつれい　します",
    "meaning": "실례합니다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "おめでとうございます",
    "kanaSpaced": "おめでとう　ございます",
    "meaning": "축하합니다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "すごいですね",
    "kanaSpaced": "すごい　ですね",
    "meaning": "대단하네요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "だいじょうぶですか",
    "kanaSpaced": "だいじょうぶ　ですか",
    "meaning": "괜찮으세요?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "よろしくおねがいします",
    "kanaSpaced": "よろしく　おねがい　します",
    "meaning": "잘 부탁드립니다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "ごめんください",
    "kanaSpaced": "ごめんください",
    "meaning": "계십니까 / 들어와주세요?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "いただきます",
    "kanaSpaced": "いただきます",
    "meaning": "잘 먹겠습니다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "えいごはなせますか",
    "kanaSpaced": "えいご　はなせますか",
    "meaning": "영어를 하실 수 있나요?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "にほんごはなせますか",
    "kanaSpaced": "にほんご　はなせますか",
    "meaning": "일본어를 하실 수 있나요?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "でぐちどこですか",
    "kanaSpaced": "でぐち　どこですか",
    "meaning": "출구는 어디에 있나요?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "これいくらですか",
    "kanaSpaced": "これ　いくら　ですか",
    "meaning": "이것은 얼마인가요?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "どこでかえますか",
    "kanaSpaced": "どこで　かえますか",
    "meaning": "어디서 살 수 있나요?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "チケットください",
    "kanaSpaced": "チケット　ください",
    "meaning": "티켓 주세요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "もういちどいってください",
    "kanaSpaced": "もう　いちど　いって　ください",
    "meaning": "한번 더 말씀해주세요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "パスポートおねがいします",
    "kanaSpaced": "パスポート　おねがい　します",
    "meaning": "여권을 주세요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "よいたびを",
    "kanaSpaced": "よい　たびを",
    "meaning": "즐거운 여행 되세요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "おやすみ",
    "kanaSpaced": "おやすみ",
    "meaning": "잘 자",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "おつかれさまでした",
    "kanaSpaced": "おつかれさまでした",
    "meaning": "수고하셨습니다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "すごい",
    "kanaSpaced": "すごい",
    "meaning": "멋지다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "かわいい",
    "kanaSpaced": "かわいい",
    "meaning": "귀엽다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "だいじょうぶ",
    "kanaSpaced": "だいじょうぶ",
    "meaning": "괜찮다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "まちがっています",
    "kanaSpaced": "まちがっています",
    "meaning": "잘못됐습니다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "もうしわけありません",
    "kanaSpaced": "もうしわけ　ありません",
    "meaning": "죄송합니다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "わかりました",
    "kanaSpaced": "わかりました",
    "meaning": "알겠습니다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "ありがとうございました",
    "kanaSpaced": "ありがとう　ございました",
    "meaning": "감사했습니다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "たのしんでください",
    "kanaSpaced": "たのしんで　ください",
    "meaning": "즐겁게 보내세요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "いたいです",
    "kanaSpaced": "いたい　です",
    "meaning": "아픕니다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "たいちょうわるいです",
    "kanaSpaced": "たいちょう　わるい　です",
    "meaning": "몸이 안 좋아요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "おだいじに",
    "kanaSpaced": "おだいじに",
    "meaning": "몸조리 잘하세요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "ごちゅういください",
    "kanaSpaced": "ごちゅうい　ください",
    "meaning": "주의해주세요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "えいごでおねがいします",
    "kanaSpaced": "えいごで　おねがい　します",
    "meaning": "영어로 해주세요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "にほんごでおねがいします",
    "kanaSpaced": "にほんごで　おねがい　します",
    "meaning": "일본어로 해주세요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "どこですか",
    "kanaSpaced": "どこですか",
    "meaning": "어디에 있나요?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "ここです",
    "kanaSpaced": "ここです",
    "meaning": "여기에 있어요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "そこです",
    "kanaSpaced": "そこです",
    "meaning": "거기에 있어요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "あそこです",
    "kanaSpaced": "あそこです",
    "meaning": "저기에 있어요",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "いまなんじですか",
    "kanaSpaced": "いま　なんじ　ですか",
    "meaning": "지금 몇 시에요?",
    "type": "sentence",
    "category": "travel"
  },
  {
    "kana": "もうすぐつきます",
    "kanaSpaced": "もう　すぐ　つきます",
    "meaning": "곧 도착합니다",
    "type": "sentence",
    "category": "travel"
  },
  {
    "type": "sentence",
    "kana": "てんないでおめしあがりですか",
    "kanaSpaced": "てんないで　おめしあがり　ですか",
    "reading": {
      "romaji": "tennaideomeshiagaridesuka",
      "hangul": "텐나이데오메시아가리데스카"
    },
    "meaning": "드시고 가시나요?"
  },
  {
    "type": "sentence",
    "kana": "いらっしゃいませ",
    "kanaSpaced": "いらっしゃいませ",
    "reading": {
      "romaji": "irasshaimase",
      "hangul": "이랏샤이마세"
    },
    "meaning": "어서오세요"
  },
  {
    "type": "sentence",
    "kana": "おなまえなんですか",
    "kanaSpaced": "おなまえ　なんですか",
    "meaning": "성함이 어떻게 되시나요?"
  },
  {
    "type": "sentence",
    "kana": "おじゃまします",
    "kanaSpaced": "おじゃま　します",
    "reading": {
      "romaji": "ojamashimasu",
      "hangul": "오쟈마시마스"
    },
    "meaning": "실례하겠습니다"
  }
];
