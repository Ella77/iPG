// Questions
var q = [
'다른 사람들이 이해하지 못하는 것이 무엇인지 이해하나요?',
'왜 성공할 것 같은가요?',
'기회가 얼마나 큰가요?',
'어떤 문제/장애가 예상되나요?',
'누가 당신의 제품을 사용하나요?',
'고객 확보 비용은 얼마인가요?',
'어떻게 돈을 벌 건가요?',
'1년에 얼마를 벌 수 있나요?',
'사용자가 몇 명입니까?',
'사용자 증가율은 얼마인가요?',
'결제하는 사용자는 몇 명인가요?',
'고객을 어떻게 만나고 있나요?',
'고객의 요구를 어떻게 이해하고 있나요?',
'어떻게 사용자를 확보할 건가요?',
'누구를 고용할 건가요? 어떻게 팀에 합류시킬 건가요?',
'무슨 일을 하고 있나요?',
'데모가 있나요?',
'시장에서 경쟁사와 차별화 할 수 있는 기술적 또는 방법론적 혁신은 무엇입니까? 그들이 가지고 있지 않은 것은 무엇입니까?',
'제품이 어떻게 작동하는지 자세히 알려주세요',
'당신의 제품은 어떻게 다른가요?',
'다음에 무엇을 할 건가요?',
'당신이 만드는 것에 대해 새로운 점은 무엇입니까?',
'기존의 대안들과 확실히 다른 점은 무엇인가요?',
'당신이 만드는 것을 누가 필요로 하나요?',
'고객이 당신이 만드는 제품이 필요하다는 것을 어떻게 알 수 있나요?',
'왜 이미 이 일을 하고 있지 않을까요?',
'직면하게 될 장애물은 무엇이고 이를 어떻게 극복 할 것인가요?',
'고객 및 사용자가 당신에 대해 어떻게 알 수 있나요?',
'고객이 당신의 제품을 시도하는데 장애물은 무엇이며, 어떻게 극복 할 것인가요?',
'외부인이 이해하지 못하는 그 분야의 핵심은 무엇입니까?',
'프로젝트의 어떤 부분을 먼저 구축 할 건가요?',
'첫 번째 유료 고객은 누구입니까?',
'창업이 성공하면 어떤 영역으로 추가적으로 확장 할 수 있을까요?',
'왜 이 아이디어를 선택 했나요?',
'지금까지 제품 작업을 통해 무엇을 배웠습니까?',
'6 개월 후, 가장 큰 문제는 무엇일까요?',
'새로운 사용자는 어디에서 왔습니까?',
'당신의 성장은 어떻습니까?',
'전환율은 얼마입니까?',
'새로운 사용자가 제품을 시도하는 이유는 무엇입니까?',
'사용자가 주저한다면, 무엇이 주저하게 만들까요?',
'사용자가 원하는 가장 중요한 것은 무엇입니까?',
'사용자 행동에 대해 무엇이 놀랐습니까?',
'당신이 했던 인상적인 일은 무엇이 있나요?',
'사용자에 대해 무엇을 이해하고 있나요?',
'왜 이 아이디어를 선택 했나요?',
'어떤 분야 전문 지식이 있습니까?',
'경쟁자는 누구입니까?',
'누가 경쟁자가 될 수 있나요?',
'누군가가 바로 전에 이런 아이디어를 보여 줬어요. 마음에 들지 않는데, 또 뭐가 있나요?',
'가장 두려워하는 경쟁은 무엇입니까?',
'유통 전략은 무엇입니까?',
'팀은 어떻게 만났나요?',
'왜 팀이 모였나요?',
'팀에서 누가 무엇을 하나요?',
'"사장님"은 누군가요?',
'우리가 자금을 지원하지 않으면 어떻게 하실 건가요?',
'팀이 함께 뭉칠 것이라는 것을 어떻게 알 수 있나요?',
'팀과 함께 만든 게 있다면 뭔가요?',
'아이디어를 바꿀 수 있나요?',
'어떤 시스템을 해킹 했나요?',
'해결했던 어려운 문제에 대해 말씀해주세요.',
'당신은 어떤 면에서 수완이 있나요?(똑똑한 가요?)',
'당신의 팀은 이 제품에 충실 할 건가요?',
'당신이 했던 무언가 놀라운 일을 말해주세요.',
'당신에게 일어났던 가장 재밌는 일은 무엇인가요?',
'당신에게 일어났던 최악의 일은 무엇인가요?',
'당신이 저지른 가장 큰 실수는 무엇입니까?',
'burn rate(월 현금소진 비율)은 얼마입니까?',
'펀딩까지 얼마나 걸리나요?',
'제품 진화의 다음 단계는 무엇입니까?',
'자금을 모으셨나요?',
'다음 고용자는 누구입니까?',
'사람들이 이걸 원하는지 어떻게 아나요?',
'다른 사람들이 모르는 이 제품에 대해 무엇을 알고 있습니까?'
];

// Tips
var tips = [
	'빠르고 간결하게 답변 해보세요.',
'2 ~ 3개의 문장으로 답해보세요.',
'대화에서 하듯이 대답하세요. 발표가 아닙니다.',
'이야기 할 때는 실질적인 자세를 취하고 요점을 말하세요.',
'빙빙 돌려말하지 마세요. 얼버무리지 마세요. 음,어 말고 요점만 말하세요',
'정확하고 간결한 언어를 사용하십시오. 당신의 "비밀 비법"이 무엇인지 물어볼 VC에게 피칭하는 것이 아닙니다. ',
'파트너는 말하는 속도가 빠릅니다. 그들과 대화하듯이 그들의 템포를 맞추도록 노력하십시오.'];