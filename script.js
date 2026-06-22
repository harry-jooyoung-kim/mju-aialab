/* ── Language State ─────────────────────────────────────── */
let lang = localStorage.getItem('aialab-lang') || 'en';

/* ── Translations ───────────────────────────────────────── */
const TR = {
  en: {
    labName: 'AI & Applications Lab',
    nav: { research:'Research', projects:'Projects', people:'People', publications:'Publications', gallery:'Gallery', contact:'Contact' },
    subNav: { gameAI:'Game AI', olfactoryAI:'Olfactory AI', appliedAI:'Applied AI', join:'Join' },
    search: { label:'Search the lab site', placeholder:'Search projects, papers, people...' },
    home: {
      eyebrow:'Myongji University · Department of Convergence Software',
      h1:'AI systems for real-world applications.',
      lead:'We build and evaluate applied AI across interactive media, olfactory interfaces, biometric sensing, and trustworthy language-model evaluation.',
      cta1:'Explore projects', cta2:'Prospective students'
    },
    research: { h1:'Research areas', lead:'Three connected pillars. Each is an applied AI domain united by evaluation-centered multimodal methods.' },
    projects: { h1:'Projects', lead:'Click into each project for goals, outputs, and related lab activities.' },
    people: {
      h1:'People',
      lead:'Graduate researchers, undergraduate interns, and collaborators work as project teams across the lab pillars.',
      alumni:'Alumni', alumniLead:'Former members who have graduated or moved on from the lab.'
    },
    publications: {
      h1:'Publications',
      lead:'Selected papers, manuscripts, and ongoing research outputs.',
      tabs: { all:'All', 'intl-journal':'International Journal', 'intl-conference':'International Conference', 'domestic-journal':'Domestic Journal', 'domestic-conference':'Domestic Conference' },
      authors: 'Authors'
    },
    gallery: { h1:'Gallery', lead:'Research seminars, prototypes, experiments, and student activities.' },
    contact: {
      h1:'Contact',
      lead:'We welcome motivated students and collaborators interested in applied AI systems.',
      labTitle:'AI & Applications Lab',
      address:'Department of Convergence Software, Myongji University, Seoul, Republic of Korea.',
      emailLabel:'Email',
      collabAreas:'Collaboration areas',
      collabText:'Game AI, Olfactory AI, Biometric Intelligence, multimodal evaluation, LLM safety, and applied generative AI services.',
      collaborators:'Collaborators',
      collabSubtext:'Institutions and groups we work with.',
      prospective:'Prospective Students',
      prospectiveVal:'See Join page',
      primaryLang:'Primary Language',
      primaryLangVal:'Korean / English',
      location:'Location',
      locationVal:'Seoul, Korea'
    },
    join: {
      eyebrow:'Prospective Students',
      h1:'Build applied AI systems that people can use, sense, and evaluate.',
      lead:'We are looking for students who want to connect research ideas with working systems, data, experiments, and real-world applications.',
      cta1:'Contact PI', cta2:'Browse projects'
    },
    footer: {
      labDesc:'Department of Convergence Software, Myongji University. We develop and evaluate AI systems for real-world applications.',
      research:'Research', resources:'Resources', contact:'Contact', address:'Myongji University, Seoul, Republic of Korea',
      links: { gameAI:'Game & Interactive AI', olfactoryAI:'Olfactory AI', appliedAI:'Applied AI', publications:'Publications', gallery:'Gallery', join:'Prospective Students', contact:'Contact' }
    },
    cards: { viewProject:'View project', exploreArea:'Explore area', profile:'Profile', details:'Details', backPub:'Back to publications', backGallery:'Back to gallery', contactUs:'Contact us', viewGallery:'View gallery', overview:'Overview', projectsInArea:'Projects in this area', researchGoals:'Research goals', expectedOutputs:'Expected outputs', activityNote:'Activity note', activityNoteText:'This gallery page is a lab activity log. Replace placeholder images with real photos and add date, participants, location, and notes.', focus:'Focus', bio:'Bio', role:'Role', contactVia:'Contact via PI', related:'Related', area:'Area', type:'Type', status:'Status', summary:'Summary', researchContext:'Research context', researchContextText:'This item is part of the lab\'s applied AI portfolio. Details can be expanded with abstract, links, code, dataset, and publication status.', researchArea:'Research Area', allProjects:'All projects', collaborate:'Collaborate', notFound:'Page not found', notFoundLead:'The page you requested does not exist.', goHome:'Go home' }
  },
  ko: {
    labName: 'AI & 응용연구실',
    nav: { research:'연구', projects:'프로젝트', people:'구성원', publications:'논문', gallery:'갤러리', contact:'연락처' },
    subNav: { gameAI:'게임 AI', olfactoryAI:'후각 AI', appliedAI:'응용 AI', join:'합류하기' },
    search: { label:'연구실 사이트 검색', placeholder:'프로젝트, 논문, 구성원 검색...' },
    home: {
      eyebrow:'명지대학교 · 융합소프트웨어학부',
      h1:'실세계 응용을 위한 AI 시스템.',
      lead:'인터랙티브 미디어, 후각 인터페이스, 생체인식, 언어모델 평가 분야의 응용 AI를 연구하고 평가합니다.',
      cta1:'프로젝트 탐색', cta2:'지원 안내'
    },
    research: { h1:'연구 분야', lead:'세 가지 연구 기둥. 각각 독립적인 응용 분야이지만 평가 중심의 멀티모달 AI라는 공통 방법론을 공유합니다.' },
    projects: { h1:'프로젝트', lead:'각 프로젝트의 목표, 산출물, 관련 활동을 확인하세요.' },
    people: {
      h1:'구성원',
      lead:'대학원생, 학부 인턴, 협력 연구자들이 프로젝트 팀을 구성합니다.',
      alumni:'졸업생', alumniLead:'졸업하거나 이직한 전 구성원들입니다.'
    },
    publications: {
      h1:'논문',
      lead:'선별된 논문 및 진행 중인 연구 결과물.',
      tabs: { all:'전체', 'intl-journal':'국제 저널', 'intl-conference':'국제 학술대회', 'domestic-journal':'국내 저널', 'domestic-conference':'국내 학술대회' },
      authors: '저자'
    },
    gallery: { h1:'갤러리', lead:'연구 세미나, 프로토타입, 실험, 학생 활동.' },
    contact: {
      h1:'연락처',
      lead:'응용 AI 시스템에 관심 있는 학생 및 협력 연구자를 환영합니다.',
      labTitle:'AI & 응용연구실',
      address:'명지대학교 융합소프트웨어학부, 서울, 대한민국.',
      emailLabel:'이메일',
      collabAreas:'협력 분야',
      collabText:'게임 AI, 후각 AI, 생체인식, 멀티모달 평가, LLM 안전성, 응용 생성형 AI 서비스.',
      collaborators:'협력 기관',
      collabSubtext:'함께 연구하는 기관 및 그룹.',
      prospective:'지원 안내',
      prospectiveVal:'합류하기 페이지 참조',
      primaryLang:'주요 언어',
      primaryLangVal:'한국어 / 영어',
      location:'위치',
      locationVal:'서울, 대한민국'
    },
    join: {
      eyebrow:'지원 안내',
      h1:'사람들이 사용하고, 느끼고, 평가할 수 있는 AI 시스템을 만듭니다.',
      lead:'아이디어를 실제 시스템, 데이터, 실험으로 연결하고자 하는 학생을 모집합니다.',
      cta1:'PI에게 연락', cta2:'프로젝트 보기'
    },
    footer: {
      labDesc:'명지대학교 융합소프트웨어학부. 실세계 응용 AI 시스템을 연구하고 평가합니다.',
      research:'연구', resources:'자료', contact:'연락처', address:'명지대학교, 서울, 대한민국',
      links: { gameAI:'게임 & 인터랙티브 AI', olfactoryAI:'후각 AI', appliedAI:'응용 AI', publications:'논문', gallery:'갤러리', join:'지원 안내', contact:'연락처' }
    },
    cards: { viewProject:'프로젝트 보기', exploreArea:'분야 탐색', profile:'프로필', details:'자세히 보기', backPub:'논문 목록으로', backGallery:'갤러리로', contactUs:'연락하기', viewGallery:'갤러리 보기', overview:'개요', projectsInArea:'이 분야의 프로젝트', researchGoals:'연구 목표', expectedOutputs:'예상 산출물', activityNote:'활동 노트', activityNoteText:'이 갤러리 페이지는 연구실 활동 로그입니다. 실제 사진으로 교체하고 날짜, 참여자, 장소, 노트를 추가하세요.', focus:'연구 관심사', bio:'소개', role:'역할', contactVia:'PI를 통해 연락', related:'관련', area:'분야', type:'유형', status:'상태', summary:'요약', researchContext:'연구 맥락', researchContextText:'이 항목은 연구실 응용 AI 포트폴리오의 일부입니다. 초록, 링크, 코드, 데이터셋, 게재 상태 등을 추가할 수 있습니다.', researchArea:'연구 분야', allProjects:'전체 프로젝트', collaborate:'협력하기', notFound:'페이지를 찾을 수 없습니다', notFoundLead:'요청하신 페이지가 존재하지 않습니다.', goHome:'홈으로' }
  }
};

function t(key) {
  return key.split('.').reduce((o, k) => o?.[k], TR[lang]) ?? key;
}

/* ── Bilingual helper ────────────────────────────────────── */
function L(obj) {
  if (!obj || typeof obj === 'string') return obj;
  return obj[lang] || obj.en || '';
}

/* ── Data ───────────────────────────────────────────────── */
const data = {
  research: [
    {
      slug: 'game-ai',
      title: { en: 'Game & Interactive AI', ko: '게임 & 인터랙티브 AI' },
      short: { en: 'Agents that play, inspect, and evaluate interactive content.', ko: '인터랙티브 콘텐츠를 플레이하고 검사하고 평가하는 AI 에이전트.' },
      image: 'assets/placeholder.jpg',
      theme: 'dark',
      tags: ['agent', 'game rating', 'multimodal'],
      status: { en: 'Large-scale funded project', ko: '대형 연구과제' },
      body: {
        en: ['We develop AI agents and multimodal pipelines for automatic gameplay, behavior logging, and game rating classification. The goal is to turn complex interactive media into measurable evidence for safer, more scalable content review.', 'This research combines gameplay agents, visual-language understanding, LLM evaluators, and structured logs so that decisions are explainable rather than only predictive.'],
        ko: ['자동 게임플레이, 행동 로깅, 게임 등급 분류를 위한 AI 에이전트와 멀티모달 파이프라인을 개발합니다. 복잡한 인터랙티브 미디어를 측정 가능한 증거로 변환하여 더 안전하고 확장 가능한 콘텐츠 심의를 목표로 합니다.', '이 연구는 게임플레이 에이전트, 비전-언어 이해, LLM 평가기, 구조화 로그를 결합하여 예측뿐 아니라 설명 가능한 결정을 만듭니다.']
      }
    },
    {
      slug: 'olfactory-ai',
      title: { en: 'Olfactory AI', ko: '후각 AI' },
      short: { en: 'AI systems that generate, evaluate, and physically render scents.', ko: '향기를 생성하고 평가하고 물리적으로 렌더링하는 AI 시스템.' },
      image: 'assets/placeholder.jpg',
      theme: 'light',
      tags: ['text-to-scent', 'perception', 'scent speaker'],
      status: { en: 'Core lab identity project', ko: '핵심 연구실 프로젝트' },
      body: {
        en: ['Olfactory AI studies how language, media, context, and human states can be translated into manufacturable scent recipes and physical olfactory experiences.', 'Our current work spans text-to-scent generation, scent perception studies, structured-output safety, and scent rendering devices.'],
        ko: ['언어, 미디어, 맥락, 인간 상태가 어떻게 제조 가능한 향기 레시피와 물리적 후각 경험으로 변환될 수 있는지 연구합니다.', '현재 연구는 텍스트-향기 생성, 향기 지각 연구, 구조화 출력 안전성, 향기 렌더링 디바이스를 포괄합니다.']
      }
    },
    {
      slug: 'applied-ai',
      title: { en: 'Applied AI', ko: '응용 AI' },
      short: { en: 'Biometric intelligence, LLM evaluation, and emerging applied AI research.', ko: '생체인식, LLM 평가, 그리고 다양한 응용 AI 연구.' },
      image: 'assets/placeholder.jpg',
      theme: 'dark',
      tags: ['biometrics', 'LLM evaluation', 'safety', 'on-device', 'XAI'],
      status: { en: 'Applied sensing & evaluation program', ko: '응용 감지 및 평가 프로그램' },
      body: {
        en: ['We build compact and explainable models for face, vein, ECG, and other biometric signals, emphasizing deployability and robustness. We also study when LLMs behave safely or fairly while still encoding problematic patterns in structured outputs.', 'This pillar is the broadest: it includes applied generative AI demonstrations, student-led applied projects, and any emerging domain where AI evaluation and sensing converge.'],
        ko: ['얼굴, 정맥, 심전도 등 생체 신호를 위한 경량 설명 가능 모델을 개발합니다. 또한 LLM이 안전하거나 공정하게 보이면서도 구조화 출력에서 문제 패턴을 인코딩하는 상황을 연구합니다.', '이 분야는 응용 생성형 AI 데모, 학생 주도 응용 프로젝트, AI 평가와 감지가 교차하는 새로운 도메인을 포괄하는 가장 넓은 기둥입니다.']
      }
    }
  ],

  projects: [
    {
      slug: 'game-rating-agent',
      title: { en: 'Automatic Gameplay and Rating AI', ko: '자동 게임플레이 및 등급 분류 AI' },
      area: 'game-ai',
      type: { en: 'Funded Project', ko: '연구과제' },
      stage: { en: 'Active', ko: '진행 중' },
      desc: { en: 'Large-scale development of agents and multimodal evaluators for game rating classification.', ko: '게임 등급 분류를 위한 에이전트 및 멀티모달 평가기 대규모 개발.' },
      image: 'assets/placeholder.jpg',
      goals: {
        en: ['Build agents that navigate game environments', 'Extract multimodal evidence from gameplay', 'Classify content and explain rating decisions'],
        ko: ['게임 환경을 탐색하는 에이전트 개발', '게임플레이에서 멀티모달 증거 추출', '콘텐츠 분류 및 등급 결정 설명']
      },
      outputs: {
        en: ['Agent baseline', 'Gameplay log schema', 'Rating-classification pipeline'],
        ko: ['에이전트 기준 모델', '게임플레이 로그 스키마', '등급 분류 파이프라인']
      }
    },
    {
      slug: 'text-to-scent',
      title: { en: 'Text-to-Scent Generation and Evaluation', ko: '텍스트-향기 생성 및 평가' },
      area: 'olfactory-ai',
      type: { en: 'Core Research', ko: '핵심 연구' },
      stage: { en: 'Active', ko: '진행 중' },
      desc: { en: 'Manufacturable scent recipe generation from natural language, followed by human perceptual evaluation.', ko: '자연어에서 제조 가능한 향기 레시피 생성 및 인간 지각 평가.' },
      image: 'assets/placeholder.jpg',
      goals: {
        en: ['Generate valid scent recipes from text', 'Measure semantic alignment in human perception', 'Build reusable text-to-scent evaluation protocols'],
        ko: ['텍스트에서 유효한 향기 레시피 생성', '인간 지각에서 의미 정렬 측정', '재사용 가능한 텍스트-향기 평가 프로토콜 구축']
      },
      outputs: {
        en: ['100 manufactured perfumes', '1,000 perceptual evaluations', 'CHI perception manuscript'],
        ko: ['100개 제조 향수', '1,000개 지각 평가', 'CHI 지각 논문']
      }
    },
    {
      slug: 'scent-speaker',
      title: { en: 'AI Olfactory Renderer / Scent Speaker', ko: 'AI 후각 렌더러 / 향기 스피커' },
      area: 'olfactory-ai',
      type: { en: 'Device Research', ko: '디바이스 연구' },
      stage: { en: 'Prototype', ko: '프로토타입' },
      desc: { en: 'A physical output device that renders generated scent recipes as real-time olfactory media.', ko: '생성된 향기 레시피를 실시간 후각 미디어로 렌더링하는 물리적 출력 디바이스.' },
      image: 'assets/placeholder.jpg',
      goals: {
        en: ['Represent recipes with cartridge basis blends', 'Control emission and evaporation balance', 'Evaluate physical rendering consistency'],
        ko: ['카트리지 베이스 블렌드로 레시피 표현', '방출 및 증발 균형 제어', '물리적 렌더링 일관성 평가']
      },
      outputs: {
        en: ['Renderer architecture', 'Calibration protocol', 'Interactive demo'],
        ko: ['렌더러 아키텍처', '교정 프로토콜', '인터랙티브 데모']
      }
    },
    {
      slug: 'scentbias',
      title: { en: 'SCENTBIAS: Structured-output Safety', ko: 'SCENTBIAS: 구조화 출력 안전성' },
      area: 'applied-ai',
      type: { en: 'Benchmark', ko: '벤치마크' },
      stage: { en: 'Submitted', ko: '제출됨' },
      desc: { en: 'Evaluation suite for demographic differentiation and stereotype-related failures in text-to-scent generation.', ko: '텍스트-향기 생성에서 인구통계학적 차별화 및 고정관념 관련 실패를 위한 평가 모음.' },
      image: 'assets/placeholder.jpg',
      goals: {
        en: ['Detect demographic conditioning in structured recipes', 'Measure safety bypass between direct text and structured output', 'Separate distributional differentiation from stronger harmful evidence'],
        ko: ['구조화 레시피의 인구통계학적 조건화 감지', '직접 텍스트와 구조화 출력 간 안전성 우회 측정', '분포적 차별화와 유해 증거 분리']
      },
      outputs: {
        en: ['Five-protocol suite', 'Trap-word diagnostic', 'Mitigation analysis'],
        ko: ['5개 프로토콜 모음', '함정 단어 진단', '완화 분석']
      }
    },
    {
      slug: 'biometric-ondevice',
      title: { en: 'Efficient Biometric Recognition', ko: '효율적 생체인식' },
      area: 'applied-ai',
      type: { en: 'Applied AI', ko: '응용 AI' },
      stage: { en: 'Active', ko: '진행 중' },
      desc: { en: 'Compression, quantization, and explainability for biometric models under deployment constraints.', ko: '배포 제약 조건에서 생체인식 모델의 압축, 양자화, 설명 가능성.' },
      image: 'assets/placeholder.jpg',
      goals: {
        en: ['Reduce model size without performance loss', 'Evaluate INT8 and FP16 deployment', 'Explain decisions with region-wise attribution'],
        ko: ['성능 손실 없이 모델 크기 감소', 'INT8 및 FP16 배포 평가', '영역별 귀속으로 결정 설명']
      },
      outputs: {
        en: ['On-device baseline', 'Quantization report', 'Journal manuscript'],
        ko: ['온디바이스 기준 모델', '양자화 보고서', '저널 논문']
      }
    },
    {
      slug: 'student-scent-apps',
      title: { en: 'Multimodal Scent Applications', ko: '멀티모달 향기 응용' },
      area: 'olfactory-ai',
      type: { en: 'Student Projects', ko: '학생 프로젝트' },
      stage: { en: 'Exploratory', ko: '탐색 중' },
      desc: { en: 'Undergraduate research projects connecting scent with fashion, music, diary, and ambient media.', ko: '향기를 패션, 음악, 일기, 주변 미디어와 연결하는 학부 연구 프로젝트.' },
      image: 'assets/placeholder.jpg',
      goals: {
        en: ['Build lightweight demos', 'Collect reusable prompt and mapping data', 'Feed promising ideas into graduate projects'],
        ko: ['경량 데모 개발', '재사용 가능한 프롬프트 및 매핑 데이터 수집', '유망한 아이디어를 대학원 프로젝트로 연결']
      },
      outputs: {
        en: ['Fashion-to-scent demo', 'Music-to-scent mapping', 'Gallery-ready prototypes'],
        ko: ['패션-향기 데모', '음악-향기 매핑', '갤러리 전시 프로토타입']
      }
    }
  ],

  people: [
    {
      slug: 'professor',
      name: { en: 'Jooyoung Kim', ko: '김주영' },
      role: { en: 'Principal Investigator', ko: '연구책임자 (PI)' },
      focus: { en: 'Applied AI, multimodal generation, olfactory AI, game AI, biometric recognition', ko: '응용 AI, 멀티모달 생성, 후각 AI, 게임 AI, 생체인식' },
      bio: { en: 'Assistant Professor in the Department of Convergence Software at Myongji University. Leads AI & Applications Lab.', ko: '명지대학교 융합소프트웨어학부 조교수. AI & 응용연구실을 이끌고 있습니다.' },
      image: 'assets/profile.jpg'
    },
    {
      slug: 'grad-game-agent',
      name: { en: 'Graduate Researcher', ko: '대학원 연구원' },
      role: { en: 'M.S./Ph.D. Integrated Student', ko: '석박사 통합과정' },
      focus: { en: 'Game AI and interactive agents', ko: '게임 AI 및 인터랙티브 에이전트' },
      bio: { en: 'Works on automatic gameplay, behavior logging, and game rating AI.', ko: '자동 게임플레이, 행동 로깅, 게임 등급 AI 연구.' },
      image: 'assets/profile.jpg'
    },
    {
      slug: 'grad-game-eval',
      name: { en: 'Graduate Researcher', ko: '대학원 연구원' },
      role: { en: 'M.S./Ph.D. Integrated Student', ko: '석박사 통합과정' },
      focus: { en: 'Game content evaluation and multimodal safety', ko: '게임 콘텐츠 평가 및 멀티모달 안전성' },
      bio: { en: 'Develops multimodal evaluators and data pipelines for game rating classification.', ko: '게임 등급 분류를 위한 멀티모달 평가기 및 데이터 파이프라인 개발.' },
      image: 'assets/profile.jpg'
    },
    {
      slug: 'grad-scent',
      name: { en: 'Graduate Researcher', ko: '대학원 연구원' },
      role: { en: 'M.S./Ph.D. Integrated Student', ko: '석박사 통합과정' },
      focus: { en: 'Olfactory AI and human perception', ko: '후각 AI 및 인간 지각' },
      bio: { en: 'Studies text-to-scent generation, scent perception, and olfactory interface evaluation.', ko: '텍스트-향기 생성, 향기 지각, 후각 인터페이스 평가 연구.' },
      image: 'assets/profile.jpg'
    },
    {
      slug: 'grad-sensing',
      name: { en: 'Graduate Researcher', ko: '대학원 연구원' },
      role: { en: 'M.S./Ph.D. Integrated Student', ko: '석박사 통합과정' },
      focus: { en: 'Biometric AI and LLM evaluation', ko: '생체인식 AI 및 LLM 평가' },
      bio: { en: 'Works on efficient sensing models, explainability, and trustworthy evaluation.', ko: '효율적 감지 모델, 설명 가능성, 신뢰할 수 있는 평가 연구.' },
      image: 'assets/profile.jpg'
    },
    {
      slug: 'undergrads',
      name: { en: 'Undergraduate Researchers', ko: '학부 연구원' },
      role: { en: 'Research Interns', ko: '연구 인턴' },
      focus: { en: 'Fashion-to-scent, music-to-scent, applied generative AI demos', ko: '패션-향기, 음악-향기, 응용 생성형 AI 데모' },
      bio: { en: 'Build exploratory prototypes and datasets that expand the lab\'s applied AI portfolio.', ko: '연구실 응용 AI 포트폴리오를 확장하는 탐색적 프로토타입 및 데이터셋 개발.' },
      image: 'assets/profile.jpg'
    }
  ],

  alumni: [
    {
      name: { en: 'Alumni Researcher', ko: '졸업생 연구원' },
      role: { en: 'M.S. 2024', ko: '석사 졸업 2024' },
      focus: { en: 'Olfactory AI', ko: '후각 AI' },
      affiliation: { en: 'Industry / Research Institute', ko: '산업계 / 연구기관' },
      image: 'assets/profile.jpg'
    },
    {
      name: { en: 'Alumni Researcher', ko: '졸업생 연구원' },
      role: { en: 'M.S. 2023', ko: '석사 졸업 2023' },
      focus: { en: 'Biometric AI', ko: '생체인식 AI' },
      affiliation: { en: 'Industry / Research Institute', ko: '산업계 / 연구기관' },
      image: 'assets/profile.jpg'
    },
    {
      name: { en: 'Alumni Researcher', ko: '졸업생 연구원' },
      role: { en: 'B.S. 2024', ko: '학부 졸업 2024' },
      focus: { en: 'Applied AI', ko: '응용 AI' },
      affiliation: { en: 'Graduate School', ko: '대학원 진학' },
      image: 'assets/profile.jpg'
    }
  ],

  publications: [
    {
      slug: 'chi-perception',
      cat: 'intl-conference',
      title: 'Can You Smell the Story? Which Textual Meanings Are Perceptible Through Computationally Generated Scent',
      authors: 'J. Kim, [Co-authors TBD]',
      venue: 'Manuscript in preparation for CHI',
      year: '2027',
      summary: 'A human perceptual study of 100 manufactured scents and 1,000 evaluations examining which textual meanings transfer through computationally generated olfactory stimuli.'
    },
    {
      slug: 'scentbias-paper',
      cat: 'intl-conference',
      title: 'Smells Like Bias: Evaluating Demographic Differentiation and Stereotype-Related Failures in LLM-Based Text-to-Scent Generation',
      authors: 'J. Kim, [Co-authors TBD]',
      venue: 'NeurIPS E&D Workshop',
      year: '2026',
      summary: 'A structured-output safety benchmark and five-protocol evaluation suite for detecting demographic differentiation in text-to-scent generation.'
    },
    {
      slug: 'bbq-paper',
      cat: 'intl-conference',
      title: 'When Bias Scores Reflect Abstention Failure: Disentangling Stereotype Direction from Refusal to Abstain in BBQ',
      authors: 'J. Kim, [Co-authors TBD]',
      venue: 'ACL Rolling Review',
      year: '2026',
      summary: 'A decomposition of ambiguous-context bias scores into abstention failure and conditional stereotype direction, revealing that high bias scores can arise from failure to abstain rather than directional stereotyping.'
    },
    {
      slug: 'face-sketch-xai',
      cat: 'intl-journal',
      title: 'Explainable Cross-Modal Face Photo-Sketch Similarity with Region-Wise Attribution and Multi-Extractor Fusion',
      authors: 'J. Kim, [Co-authors TBD]',
      venue: 'Journal (under revision)',
      year: '2026',
      summary: 'Region-wise attribution and multi-extractor fusion for explainable cross-modal biometric similarity between face photos and sketches.'
    },
    {
      slug: 'game-rating-ai',
      cat: 'domestic-conference',
      title: 'AI 기반 게임 콘텐츠 이해 및 등급 분류 연구',
      authors: '김주영, [공동저자 추가 예정]',
      venue: '한국정보과학회',
      year: '2025',
      summary: 'Multimodal game content understanding and automatic rating-classification using gameplay agents and visual-language models.'
    }
  ],

  gallery: [
    { slug: 'seminar', cat: 'lab', title: { en: 'Research Seminar', ko: '연구 세미나' }, image: 'assets/placeholder.jpg', text: { en: 'Weekly research discussion, paper reading, and project milestones.', ko: '주간 연구 토론, 논문 읽기, 프로젝트 마일스톤.' } },
    { slug: 'olfactory-experiment', cat: 'scent', title: { en: 'Olfactory AI Experiments', ko: '후각 AI 실험' }, image: 'assets/placeholder.jpg', text: { en: 'Physical scent stimuli, recipe validation, and perception-study preparation.', ko: '물리적 향기 자극, 레시피 검증, 지각 연구 준비.' } },
    { slug: 'game-session', cat: 'game', title: { en: 'Game AI Development', ko: '게임 AI 개발' }, image: 'assets/placeholder.jpg', text: { en: 'Automatic gameplay, agent testing, and multimodal log inspection.', ko: '자동 게임플레이, 에이전트 테스트, 멀티모달 로그 검사.' } },
    { slug: 'student-research', cat: 'students', title: { en: 'Student Research', ko: '학생 연구' }, image: 'assets/placeholder.jpg', text: { en: 'Graduate and undergraduate research sessions.', ko: '대학원생 및 학부생 연구 세션.' } },
    { slug: 'prototype-demo', cat: 'demo', title: { en: 'Prototype Demo', ko: '프로토타입 데모' }, image: 'assets/placeholder.jpg', text: { en: 'Applied AI prototypes, demos, and early-stage systems.', ko: '응용 AI 프로토타입, 데모, 초기 시스템.' } },
    { slug: 'workshop', cat: 'lab', title: { en: 'AI Workshop', ko: 'AI 워크숍' }, image: 'assets/placeholder.jpg', text: { en: 'Teaching, industry training, and generative AI workshops.', ko: '교육, 산업 훈련, 생성형 AI 워크숍.' } }
  ]
};

/* ── Utilities ───────────────────────────────────────────── */
const $ = s => document.querySelector(s);
const app = document.querySelector('#app');
function link(path, text, cls = '') { return `<a class="${cls}" href="#/${path}">${text}</a>`; }
function cta(path, text) { return link(path, text, 'button-primary'); }
function ghost(path, text) { return link(path, text, 'button-secondary'); }

/* ── Components ──────────────────────────────────────────── */
function researchCard(r) {
  return `<a class="card ${r.theme === 'dark' ? 'dark' : ''}" href="#/projects/${r.slug}">
    <img src="${r.image}" alt="">
    <span class="meta">${L(r.status)}</span>
    <h3>${L(r.title)}</h3>
    <p>${L(r.short)}</p>
    <span class="text-link">${t('cards.exploreArea')}</span>
  </a>`;
}

function projectCard(p) {
  return `<a class="card" href="#/project/${p.slug}">
    <img src="${p.image}" alt="">
    <span class="meta">${L(p.type)} · ${L(p.stage)}</span>
    <h3>${L(p.title)}</h3>
    <p>${L(p.desc)}</p>
    <span class="text-link">${t('cards.viewProject')}</span>
  </a>`;
}

function personCard(p) {
  const avatar = p.image
    ? `<img src="${p.image}" alt="${L(p.name)}">`
    : `<span>${(L(p.name) || 'G').charAt(0)}</span>`;
  return `<a class="card" href="#/people/${p.slug}">
    <div class="person-avatar">${avatar}</div>
    <span class="meta">${L(p.role)}</span>
    <h3>${L(p.name)}</h3>
    <p>${L(p.focus)}</p>
    <span class="text-link">${t('cards.profile')}</span>
  </a>`;
}

function alumniCard(a) {
  const avatar = a.image ? `<img src="${a.image}" alt="${L(a.name)}">` : '';
  return `<div class="card alumni-card">
    <div class="person-avatar" style="width:56px;height:56px">${avatar}</div>
    <span class="meta">${L(a.role)}</span>
    <h3 style="font-size:18px">${L(a.name)}</h3>
    <p style="font-size:13px">${L(a.focus)}</p>
    <p style="font-size:12px;color:var(--muted)">${L(a.affiliation)}</p>
  </div>`;
}

function pubRow(p) {
  const catLabel = t(`publications.tabs.${p.cat}`) || p.cat;
  return `<article class="paper">
    <div>
      <p style="font-size:12px;color:var(--muted);text-transform:uppercase;letter-spacing:.04em;margin-bottom:6px">${catLabel} · ${p.year}</p>
      <h3>${p.title}</h3>
      ${p.authors ? `<p style="font-size:14px;color:var(--muted);margin:6px 0 4px"><strong style="color:var(--ink);font-weight:600">${t('publications.authors')}</strong> ${p.authors}</p>` : ''}
      <p style="font-size:14px;color:var(--muted)">${p.venue}</p>
    </div>
    <a href="#/publication/${p.slug}" class="button-secondary">${t('cards.details')}</a>
  </article>`;
}

function galleryCard(g) {
  return `<a class="gallery-card" href="#/gallery/${g.slug}">
    <img src="${g.image}" alt="">
    <h3>${L(g.title)}</h3>
    <p>${L(g.text)}</p>
  </a>`;
}

function collabLogoStrip() {
  const logo = `<img src="assets/embl.png" alt="EMBL" class="collab-logo">`;
  // 12 per set: 12 × (80px + 56px) = 1632px — wider than any viewport
  const logos = logo.repeat(12);
  return `<div class="collab-logos-strip">
    <div class="collab-marquee">${logos}${logos}</div>
  </div>`;
}

/* ── Pages ───────────────────────────────────────────────── */
function home() {
  return `
    <section class="hero parchment">
      <div class="hero-inner">
        <p class="eyebrow">${t('home.eyebrow')}</p>
        <h1>${t('home.h1')}</h1>
        <p class="lead">${t('home.lead')}</p>
        <div class="cta-row">${cta('projects', t('home.cta1'))}${ghost('join', t('home.cta2'))}</div>
        <img class="hero-art" src="assets/placeholder.jpg" alt="AI & Applications Lab">
      </div>
    </section>
    <section class="tile dark">
      <h2>${L(data.research[0].title)}</h2>
      <p class="tile-lead">${L(data.research[0].short)}</p>
      <div class="cta-row">${cta('projects/game-ai', t('subNav.gameAI'))}${ghost('project/game-rating-agent', t('cards.viewProject'))}</div>
      <img class="tile-media" src="assets/placeholder.jpg" alt="">
    </section>
    <section class="tile light">
      <h2>${L(data.research[1].title)}</h2>
      <p class="tile-lead">${L(data.research[1].short)}</p>
      <div class="cta-row">${cta('projects/olfactory-ai', t('subNav.olfactoryAI'))}${ghost('project/text-to-scent', t('cards.viewProject'))}</div>
      <img class="tile-media" src="assets/placeholder.jpg" alt="">
    </section>
    <section class="tile dark2">
      <h2>${L(data.research[2].title)}</h2>
      <p class="tile-lead">${L(data.research[2].short)}</p>
      <div class="cta-row">${cta('projects/applied-ai', t('subNav.appliedAI'))}${ghost('publications', t('nav.publications'))}</div>
      <img class="tile-media" src="assets/placeholder.jpg" alt="">
    </section>
    ${collabLogoStrip()}`;
}

function research() {
  return `
    <section class="section-header">
      <h1>${t('research.h1')}</h1>
      <p>${t('research.lead')}</p>
    </section>
    <section class="content">
      <div class="grid">${data.research.map(researchCard).join('')}</div>
    </section>`;
}

function projects(filter) {
  const items = filter ? data.projects.filter(p => p.area === filter) : data.projects;
  const chips = ['all', ...data.research.map(r => r.slug)];
  return `
    <section class="section-header parchment">
      <h1>${t('projects.h1')}</h1>
      <p>${t('projects.lead')}</p>
    </section>
    <section class="content">
      <div class="chip-row">
        ${chips.map(c => {
          const label = c === 'all' ? t('publications.tabs.all') : L(data.research.find(r => r.slug === c)?.title);
          const active = (!filter && c === 'all') || filter === c;
          return `<button class="chip ${active ? 'is-active' : ''}" data-filter="${c}">${label}</button>`;
        }).join('')}
      </div>
      <div class="grid">${items.map(projectCard).join('')}</div>
    </section>`;
}

function projectDetail(slug) {
  const p = data.projects.find(x => x.slug === slug);
  if (!p) return notFound();
  const area = data.research.find(r => r.slug === p.area);
  return `
    <section class="detail-hero">
      <div class="wrap">
        <div class="breadcrumb"><a href="#/projects">${t('nav.projects')}</a> / <a href="#/projects/${p.area}">${L(area?.title) || ''}</a></div>
        <h1>${L(p.title)}</h1>
        <p>${L(p.desc)}</p>
      </div>
    </section>
    <section class="content split">
      <article class="prose">
        <img src="${p.image}" alt="" style="border-radius:18px;margin-bottom:28px;aspect-ratio:16/9;object-fit:cover">
        <h2>${t('cards.researchGoals')}</h2>
        ${L(p.goals).map(g => `<p>${g}</p>`).join('')}
        <h2>${t('cards.expectedOutputs')}</h2>
        ${L(p.outputs).map(o => `<p>${o}</p>`).join('')}
        <div class="cta-row" style="justify-content:flex-start">${cta('contact', t('cards.contactUs'))}${ghost('gallery', t('cards.viewGallery'))}</div>
      </article>
      <aside class="side-panel">
        <div class="spec-list">
          <div class="spec"><strong>${t('cards.area')}</strong><span>${L(area?.title) || p.area}</span></div>
          <div class="spec"><strong>${t('cards.type')}</strong><span>${L(p.type)}</span></div>
          <div class="spec"><strong>${t('cards.status')}</strong><span>${L(p.stage)}</span></div>
          <div class="spec"><strong>${t('cards.related')}</strong><span>${area?.tags?.join(', ') || ''}</span></div>
        </div>
      </aside>
    </section>`;
}

function areaDetail(slug) {
  const r = data.research.find(x => x.slug === slug);
  if (!r) return notFound();
  const ps = data.projects.filter(p => p.area === slug);
  return `
    <section class="hero ${r.theme === 'dark' ? 'dark' : 'white'}">
      <div class="hero-inner">
        <p class="eyebrow">${t('cards.researchArea')}</p>
        <h1>${L(r.title)}</h1>
        <p class="lead">${L(r.short)}</p>
        <div class="cta-row">${cta('projects', t('cards.allProjects'))}${ghost('contact', t('cards.collaborate'))}</div>
        <img class="hero-art" src="${r.image}" alt="">
      </div>
    </section>
    <section class="content narrow prose">
      <h2>${t('cards.overview')}</h2>
      ${L(r.body).map(x => `<p>${x}</p>`).join('')}
      <h2>${t('cards.projectsInArea')}</h2>
    </section>
    <section class="content">
      <div class="grid">${ps.map(projectCard).join('')}</div>
    </section>`;
}

function people() {
  return `
    <section class="section-header">
      <h1>${t('people.h1')}</h1>
      <p>${t('people.lead')}</p>
    </section>
    <section class="content">
      <div class="grid">${data.people.map(personCard).join('')}</div>
    </section>
    <div class="alumni-section">
      <h2 class="alumni-heading">${t('people.alumni')}</h2>
      <p style="color:var(--muted);margin:0 0 28px;font-size:17px">${t('people.alumniLead')}</p>
      <div class="grid" style="grid-template-columns:repeat(4,minmax(0,1fr))">${data.alumni.map(alumniCard).join('')}</div>
    </div>`;
}

function personDetail(slug) {
  const p = data.people.find(x => x.slug === slug);
  if (!p) return notFound();
  const avatar = p.image ? `<img src="${p.image}" alt="${L(p.name)}" style="width:112px;height:112px;border-radius:50%;object-fit:cover;margin-bottom:24px">` : `<div class="person-avatar" style="width:112px;height:112px;font-size:30px;margin-bottom:24px">${(L(p.name) || 'G').charAt(0)}</div>`;
  return `
    <section class="detail-hero">
      <div class="wrap">
        <div class="breadcrumb"><a href="#/people">${t('nav.people')}</a> / ${L(p.name)}</div>
        <h1>${L(p.name)}</h1>
        <p>${L(p.role)}</p>
      </div>
    </section>
    <section class="content split">
      <article class="prose">
        ${avatar}
        <h2>${t('cards.focus')}</h2><p>${L(p.focus)}</p>
        <h2>${t('cards.bio')}</h2><p>${L(p.bio)}</p>
      </article>
      <aside class="side-panel">
        <div class="spec-list">
          <div class="spec"><strong>${t('cards.role')}</strong><span>${L(p.role)}</span></div>
          <div class="spec"><strong>${t('contact.emailLabel')}</strong><span>${t('cards.contactVia')}</span></div>
        </div>
      </aside>
    </section>`;
}

function publications(cat) {
  const tabs = ['all', 'intl-journal', 'intl-conference', 'domestic-journal', 'domestic-conference'];
  const items = cat ? data.publications.filter(p => p.cat === cat) : data.publications;
  return `
    <section class="section-header parchment">
      <h1>${t('publications.h1')}</h1>
      <p>${t('publications.lead')}</p>
    </section>
    <section class="content narrow">
      <div class="chip-row">
        ${tabs.map(c => {
          const active = (!cat && c === 'all') || cat === c;
          return `<button class="chip ${active ? 'is-active' : ''}" data-pub="${c}">${t(`publications.tabs.${c}`)}</button>`;
        }).join('')}
      </div>
      ${items.map(pubRow).join('')}
    </section>`;
}

function publicationDetail(slug) {
  const p = data.publications.find(x => x.slug === slug);
  if (!p) return notFound();
  const catLabel = t(`publications.tabs.${p.cat}`) || p.cat;
  return `
    <section class="detail-hero">
      <div class="wrap">
        <div class="breadcrumb"><a href="#/publications">${t('nav.publications')}</a> / ${p.year}</div>
        <h1>${p.title}</h1>
        <p>${p.venue} · ${catLabel} · ${p.year}</p>
      </div>
    </section>
    <section class="content narrow prose">
      ${p.authors ? `<h2>${t('publications.authors')}</h2><p>${p.authors}</p>` : ''}
      <h2>${t('cards.summary')}</h2><p>${p.summary}</p>
      <h2>${t('cards.researchContext')}</h2><p>${t('cards.researchContextText')}</p>
      <div class="cta-row" style="justify-content:flex-start">${ghost('publications', t('cards.backPub'))}</div>
    </section>`;
}

function gallery(cat) {
  const cats = ['all', ...new Set(data.gallery.map(g => g.cat))];
  const items = cat ? data.gallery.filter(g => g.cat === cat) : data.gallery;
  return `
    <section class="section-header">
      <h1>${t('gallery.h1')}</h1>
      <p>${t('gallery.lead')}</p>
    </section>
    <section class="content">
      <div class="chip-row">
        ${cats.map(c => {
          const active = (!cat && c === 'all') || cat === c;
          const label = c === 'all' ? t('publications.tabs.all') : c.toUpperCase();
          return `<button class="chip ${active ? 'is-active' : ''}" data-gallery="${c}">${label}</button>`;
        }).join('')}
      </div>
      <div class="gallery-grid">${items.map(galleryCard).join('')}</div>
    </section>`;
}

function galleryDetail(slug) {
  const g = data.gallery.find(x => x.slug === slug);
  if (!g) return notFound();
  return `
    <section class="detail-hero">
      <div class="wrap">
        <div class="breadcrumb"><a href="#/gallery">${t('gallery.h1')}</a> / ${L(g.title)}</div>
        <h1>${L(g.title)}</h1>
        <p>${L(g.text)}</p>
      </div>
    </section>
    <section class="content narrow prose">
      <img src="${g.image}" alt="" style="border-radius:18px;margin-bottom:28px;aspect-ratio:4/3;object-fit:cover">
      <h2>${t('cards.activityNote')}</h2>
      <p>${t('cards.activityNoteText')}</p>
      <div class="cta-row" style="justify-content:flex-start">${ghost('gallery', t('cards.backGallery'))}</div>
    </section>`;
}

function contact() {
  return `
    <section class="section-header parchment">
      <h1>${t('contact.h1')}</h1>
      <p>${t('contact.lead')}</p>
    </section>
    <section class="content split contact-split">
      <article class="prose">
        <h2>${t('contact.labTitle')}</h2>
        <p>${t('contact.address')}</p>
        <p>${t('contact.emailLabel')}: <a href="mailto:harrykim@mju.ac.kr">harrykim@mju.ac.kr</a></p>
        <h2>${t('contact.collabAreas')}</h2>
        <p>${t('contact.collabText')}</p>
      </article>
      <aside>
        <div class="side-panel">
          <div class="spec-list">
            <div class="spec"><strong>${t('contact.prospective')}</strong><span>${t('contact.prospectiveVal')}</span></div>
            <div class="spec"><strong>${t('contact.primaryLang')}</strong><span>${t('contact.primaryLangVal')}</span></div>
            <div class="spec"><strong>${t('contact.location')}</strong><span>${t('contact.locationVal')}</span></div>
          </div>
        </div>
        <div class="collab-aside-box">
          <p class="collab-section-title">${t('contact.collaborators')}</p>
          <p style="font-size:13px;color:var(--muted);margin:0 0 12px">${t('contact.collabSubtext')}</p>
          <div class="collab-logos-strip inset">
            <div class="collab-marquee">
              ${'<img src="assets/embl.png" alt="EMBL" class="collab-logo">'.repeat(6)}
              ${'<img src="assets/embl.png" alt="EMBL" class="collab-logo">'.repeat(6)}
            </div>
          </div>
        </div>
      </aside>
    </section>`;
}

function join() {
  return `
    <section class="hero white">
      <div class="hero-inner">
        <p class="eyebrow">${t('join.eyebrow')}</p>
        <h1>${t('join.h1')}</h1>
        <p class="lead">${t('join.lead')}</p>
        <div class="cta-row">${cta('contact', t('join.cta1'))}${ghost('projects', t('join.cta2'))}</div>
      </div>
    </section>
    <section class="content">
      <div class="grid">
        <a class="card" href="#/projects/game-ai">
          <img src="assets/placeholder.jpg" alt="">
          <h3>${L(data.research[0].title)}</h3>
          <p>${lang === 'ko' ? '에이전트, 콘텐츠 이해, 안전성 평가에 관심 있는 학생.' : 'For students interested in agents, content understanding, and safety evaluation.'}</p>
        </a>
        <a class="card" href="#/projects/olfactory-ai">
          <img src="assets/placeholder.jpg" alt="">
          <h3>${L(data.research[1].title)}</h3>
          <p>${lang === 'ko' ? '생성형 AI, 지각, HCI, 향기 렌더링에 관심 있는 학생.' : 'For students interested in generative AI, perception, HCI, and scent rendering.'}</p>
        </a>
        <a class="card" href="#/projects/applied-ai">
          <img src="assets/placeholder.jpg" alt="">
          <h3>${L(data.research[2].title)}</h3>
          <p>${lang === 'ko' ? '경량 모델, 설명 가능성, 실세계 감지에 관심 있는 학생.' : 'For students interested in compact models, explainability, and real-world sensing.'}</p>
        </a>
      </div>
    </section>`;
}

function notFound() {
  return `
    <section class="section-header">
      <h1>${t('cards.notFound')}</h1>
      <p>${t('cards.notFoundLead')}</p>
      <div class="cta-row">${cta('home', t('cards.goHome'))}</div>
    </section>`;
}

/* ── Router ──────────────────────────────────────────────── */
function render() {
  const raw = location.hash.replace(/^#\/?/, '') || 'home';
  const parts = raw.split('/').filter(Boolean);
  let html = '';
  if (parts[0] === 'home') html = home();
  else if (parts[0] === 'research') html = research();
  else if (parts[0] === 'projects' && parts[1]) html = areaDetail(parts[1]);
  else if (parts[0] === 'projects') html = projects();
  else if (parts[0] === 'project') html = projectDetail(parts[1]);
  else if (parts[0] === 'people' && parts[1]) html = personDetail(parts[1]);
  else if (parts[0] === 'people') html = people();
  else if (parts[0] === 'publications') html = publications();
  else if (parts[0] === 'publication') html = publicationDetail(parts[1]);
  else if (parts[0] === 'gallery' && parts[1]) html = galleryDetail(parts[1]);
  else if (parts[0] === 'gallery') html = gallery();
  else if (parts[0] === 'contact') html = contact();
  else if (parts[0] === 'join') html = join();
  else html = notFound();
  app.innerHTML = `<div class="view">${html}</div>`;
  attachInteractions();
  requestAnimationFrame(initMarquees);
  app.focus({ preventScroll: true });
  window.scrollTo(0, 0);
}

/* ── Interactions ────────────────────────────────────────── */
function attachInteractions() {
  document.querySelectorAll('[data-filter]').forEach(b => b.addEventListener('click', () => {
    const v = b.dataset.filter;
    app.innerHTML = `<div class="view">${projects(v === 'all' ? null : v)}</div>`;
    attachInteractions();
  }));
  document.querySelectorAll('[data-pub]').forEach(b => b.addEventListener('click', () => {
    const v = b.dataset.pub;
    app.innerHTML = `<div class="view">${publications(v === 'all' ? null : v)}</div>`;
    attachInteractions();
  }));
  document.querySelectorAll('[data-gallery]').forEach(b => b.addEventListener('click', () => {
    const v = b.dataset.gallery;
    app.innerHTML = `<div class="view">${gallery(v === 'all' ? null : v)}</div>`;
    attachInteractions();
  }));
}

/* ── i18n ────────────────────────────────────────────────── */
function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t(el.dataset.i18n);
    if (val && val !== el.dataset.i18n) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const val = t(el.dataset.i18nPlaceholder);
    if (val) el.placeholder = val;
  });
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = lang === 'en' ? '한국어' : 'English';
  document.getElementById('html-root').lang = lang;
}

function setLang(newLang) {
  lang = newLang;
  localStorage.setItem('aialab-lang', lang);
  applyI18n();
  render();
}

/* ── Search ──────────────────────────────────────────────── */
function initSearch() {
  const dialog = $('#searchDialog'), openBtn = $('#openSearch'), input = $('#siteSearch'), results = $('#searchResults');
  const corpus = [
    ...data.research.map(x => ({ type: t('nav.research'), title: L(x.title), text: L(x.short), path: `projects/${x.slug}` })),
    ...data.projects.map(x => ({ type: t('nav.projects'), title: L(x.title), text: L(x.desc), path: `project/${x.slug}` })),
    ...data.people.map(x => ({ type: t('nav.people'), title: L(x.name), text: L(x.focus), path: `people/${x.slug}` })),
    ...data.publications.map(x => ({ type: t('nav.publications'), title: x.title, text: x.summary, path: `publication/${x.slug}` })),
    ...data.gallery.map(x => ({ type: t('gallery.h1'), title: L(x.title), text: L(x.text), path: `gallery/${x.slug}` }))
  ];
  openBtn.addEventListener('click', () => { dialog.showModal(); input.focus(); });
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { results.innerHTML = ''; return; }
    const hits = corpus.filter(x => (x.title + ' ' + x.text + ' ' + x.type).toLowerCase().includes(q)).slice(0, 8);
    results.innerHTML = hits.length
      ? hits.map(h => `<a class="result" href="#/${h.path}" onclick="document.getElementById('searchDialog').close()"><strong>${h.type}</strong><br>${h.title}<br><small>${h.text}</small></a>`).join('')
      : `<div class="empty">${lang === 'ko' ? '검색 결과가 없습니다.' : 'No results found.'}</div>`;
  });
}

/* ── Nav ─────────────────────────────────────────────────── */
function initNav() {
  const btn = $('#toggleMenu'), links = document.querySelector('.nav-links');
  btn.addEventListener('click', () => links.classList.toggle('open'));
  document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
}

/* ── Floating Bar ────────────────────────────────────────── */
function initFloating() {
  const bar = document.createElement('div');
  bar.className = 'floating-bar';
  bar.innerHTML = `<span>${lang === 'ko' ? 'AI & 응용연구실 탐색' : 'Explore AI & Applications Lab'}</span><a class="button-primary" href="#/join">${t('subNav.join')}</a>`;
  document.body.appendChild(bar);
  window.addEventListener('scroll', () => {
    bar.classList.toggle('show', window.scrollY > 900 && !location.hash.includes('join'));
  });
}

/* ── Marquee Init ────────────────────────────────────────── */
function initMarquees() {
  document.querySelectorAll('.collab-marquee').forEach(el => {
    el.classList.remove('is-running');
    el.style.removeProperty('--marquee-offset');
    el.style.removeProperty('--marquee-duration');

    const start = () => {
      // collab-logo has fixed width:80px + margin-right:56px = 136px each.
      // Count only the FIRST half of children (one set).
      const children = el.children;
      const half = Math.floor(children.length / 2);
      const itemW = 80 + 56; // px — must match CSS
      const setWidth = half * itemW;
      if (setWidth === 0) return;
      el.style.setProperty('--marquee-offset', `-${setWidth}px`);
      // ~80 px/s
      el.style.setProperty('--marquee-duration', `${Math.round(setWidth / 80)}s`);
      el.classList.add('is-running');
    };

    // Wait one frame so the DOM has been painted and images sized
    requestAnimationFrame(start);
  });
}

/* ── Init ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  initNav();
  initSearch();
  initFloating();
  applyI18n();
  render();
  window.addEventListener('hashchange', render);
  document.getElementById('langToggle').addEventListener('click', () => {
    setLang(lang === 'en' ? 'ko' : 'en');
  });
});
