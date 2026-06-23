/* ── Language State ─────────────────────────────────────── */
let lang = localStorage.getItem('aialab-lang') || 'en';

/* ── Translations ───────────────────────────────────────── */
const TR = {
  en: {
    labName: 'AI & Applications Lab',
    nav: { research:'Research', projects:'Projects', people:'People', publications:'Publications', gallery:'Gallery', contact:'Contact' },
    subNav: { gameAI:'Game & Interactive AI', olfactoryAI:'Olfactory AI', appliedAI:'Applied AI', join:'Join' },
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
      alumni:'Alumni',
      alumniLead:'Former members who have graduated or moved on from the lab.',
      categories: { pi:'Principal Investigator', phd:'Ph.D. Candidates', ms:'Master Candidates', intern:'Research Interns' }
    },
    publications: {
      h1:'Publications',
      lead:'Journals, conference papers, and patents.',
      tabs: { all:'All', 'intl-journal':'International Journal', 'intl-conference':'International Conference', 'domestic-journal':'Domestic Journal', 'domestic-conference':'Domestic Conference', patent:'Patent' },
      authors:'Authors',
      patentNo:'Patent No.',
      viewLink:'View ↗'
    },
    gallery: { h1:'Gallery', lead:'Research seminars, prototypes, experiments, and student activities.', recentEvents:'Recent Events', viewAll:'View all' },
    contact: {
      h1:'Contact',
      lead:'We welcome motivated students and collaborators interested in applied AI systems.',
      labTitle:'AI & Applications Lab',
      address:'S1604, Social Science Campus, Myongji University, 34 Geobulgol-ro, Seodaemun-Gu, Seoul, South Korea (03674)',
      phone:'TEL',
      phoneVal:'02-300-0705',
      emailLabel:'E-mail',
      collabAreas:'Collaboration areas',
      collabText:'Game & Interactive AI, Olfactory AI, Biometric Intelligence, multimodal evaluation, LLM safety, and applied generative AI services.',
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
    floatingBar: { text:'Explore AI & Applications Lab', cta:'Join the Lab' },
    footer: {
      labDesc:'Department of Convergence Software, Myongji University. We develop and evaluate AI systems for real-world applications.',
      research:'Research', resources:'Resources', contact:'Contact', address:'Myongji University, Seoul, Republic of Korea',
      links: { gameAI:'Game & Interactive AI', olfactoryAI:'Olfactory AI', appliedAI:'Applied AI', publications:'Publications', gallery:'Gallery', join:'Prospective Students', contact:'Contact' }
    },
    cards: { viewProject:'View project', exploreArea:'Explore area', profile:'Profile', details:'Details', backPub:'Back to publications', backGallery:'Back to gallery', contactUs:'Contact us', viewGallery:'View gallery', overview:'Overview', projectsInArea:'Projects in this area', researchGoals:'Research goals', expectedOutputs:'Expected outputs', activityNote:'Activity note', activityNoteText:"This gallery page is a lab activity log. Replace placeholder images with real photos and add date, participants, location, and notes.", focus:'Research Focus', bio:'Bio', role:'Role', contactVia:'Contact via PI', related:'Related', area:'Area', type:'Type', status:'Status', summary:'Summary', researchContext:'Research context', researchContextText:"This item is part of the lab's applied AI portfolio. Details can be expanded with abstract, links, code, dataset, and publication status.", researchArea:'Research Area', allProjects:'All projects', collaborate:'Collaborate', notFound:'Page not found', notFoundLead:'The page you requested does not exist.', goHome:'Go home' }
  },
  ko: {
    labName: 'AI & 응용연구실',
    nav: { research:'연구', projects:'프로젝트', people:'구성원', publications:'논문', gallery:'갤러리', contact:'연락처' },
    subNav: { gameAI:'게임 & 인터랙티브 AI', olfactoryAI:'후각 AI', appliedAI:'응용 AI', join:'합류하기' },
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
      alumni:'졸업생',
      alumniLead:'졸업하거나 이직한 전 구성원들입니다.',
      categories: { pi:'연구책임자', phd:'박사 과정', ms:'석사 과정', intern:'연구 인턴' }
    },
    publications: {
      h1:'논문',
      lead:'저널 논문, 학술대회 논문, 특허.',
      tabs: { all:'전체', 'intl-journal':'국제 저널', 'intl-conference':'국제 학술대회', 'domestic-journal':'국내 저널', 'domestic-conference':'국내 학술대회', patent:'특허' },
      authors:'저자',
      patentNo:'특허번호',
      viewLink:'보기 ↗'
    },
    gallery: { h1:'갤러리', lead:'연구 세미나, 프로토타입, 실험, 학생 활동.', recentEvents:'최근 활동', viewAll:'전체 보기' },
    contact: {
      h1:'연락처',
      lead:'응용 AI 시스템에 관심 있는 학생 및 협력 연구자를 환영합니다.',
      labTitle:'AI & 응용연구실',
      address:'서울특별시 서대문구 거북골로 34 명지대학교 인문캠퍼스 종합관 1604호 (우편번호 03674)',
      phone:'전화',
      phoneVal:'02-300-0705',
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
    floatingBar: { text:'AI & 응용연구실 탐색', cta:'합류하기' },
    footer: {
      labDesc:'명지대학교 융합소프트웨어학부. 실세계 응용 AI 시스템을 연구하고 평가합니다.',
      research:'연구', resources:'자료', contact:'연락처', address:'명지대학교, 서울, 대한민국',
      links: { gameAI:'게임 & 인터랙티브 AI', olfactoryAI:'후각 AI', appliedAI:'응용 AI', publications:'논문', gallery:'갤러리', join:'지원 안내', contact:'연락처' }
    },
    cards: { viewProject:'프로젝트 보기', exploreArea:'분야 탐색', profile:'프로필', details:'자세히 보기', backPub:'논문 목록으로', backGallery:'갤러리로', contactUs:'연락하기', viewGallery:'갤러리 보기', overview:'개요', projectsInArea:'이 분야의 프로젝트', researchGoals:'연구 목표', expectedOutputs:'예상 산출물', activityNote:'활동 노트', activityNoteText:'이 갤러리 페이지는 연구실 활동 로그입니다. 실제 사진으로 교체하고 날짜, 참여자, 장소, 노트를 추가하세요.', focus:'연구 관심사', bio:'소개', role:'역할', contactVia:'PI를 통해 연락', related:'관련', area:'분야', type:'유형', status:'상태', summary:'요약', researchContext:'연구 맥락', researchContextText:'이 항목은 연구실 응용 AI 포트폴리오의 일부입니다.', researchArea:'연구 분야', allProjects:'전체 프로젝트', collaborate:'협력하기', notFound:'페이지를 찾을 수 없습니다', notFoundLead:'요청하신 페이지가 존재하지 않습니다.', goHome:'홈으로' }
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
  "research": [
    {
      "slug": "game-ai",
      "title": {
        "en": "Game & Interactive AI",
        "ko": "게임 & 인터랙티브 AI"
      },
      "short": {
        "en": "Agents that play, inspect, and evaluate interactive content.",
        "ko": "인터랙티브 콘텐츠를 플레이하고 검사하고 평가하는 AI 에이전트."
      },
      "image": "assets/placeholder.jpg",
      "theme": "dark",
      "tags": [
        "agent",
        "game rating",
        "multimodal"
      ],
      "status": {
        "en": "Large-scale funded project",
        "ko": "대형 연구과제"
      },
      "body": {
        "en": [
          "We develop AI agents and multimodal pipelines for automatic gameplay, behavior logging, and game rating classification. The goal is to turn complex interactive media into measurable evidence for safer, more scalable content review.",
          "This research combines gameplay agents, visual-language understanding, LLM evaluators, and structured logs so that decisions are explainable rather than only predictive."
        ],
        "ko": [
          "자동 게임플레이, 행동 로깅, 게임 등급 분류를 위한 AI 에이전트와 멀티모달 파이프라인을 개발합니다.",
          "게임플레이 에이전트, 비전-언어 이해, LLM 평가기, 구조화 로그를 결합하여 설명 가능한 결정을 만듭니다."
        ]
      }
    },
    {
      "slug": "olfactory-ai",
      "title": {
        "en": "Olfactory AI",
        "ko": "후각 AI"
      },
      "short": {
        "en": "AI systems that generate, evaluate, and physically render scents.",
        "ko": "향기를 생성하고 평가하고 물리적으로 렌더링하는 AI 시스템."
      },
      "image": "assets/placeholder.jpg",
      "theme": "light",
      "tags": [
        "text-to-scent",
        "perception",
        "scent speaker"
      ],
      "status": {
        "en": "Core lab identity project",
        "ko": "핵심 연구실 프로젝트"
      },
      "body": {
        "en": [
          "Olfactory AI studies how language, media, context, and human states can be translated into manufacturable scent recipes and physical olfactory experiences.",
          "Our current work spans text-to-scent generation, scent perception studies, structured-output safety, and scent rendering devices."
        ],
        "ko": [
          "언어, 미디어, 맥락, 인간 상태가 어떻게 제조 가능한 향기 레시피와 물리적 후각 경험으로 변환될 수 있는지 연구합니다.",
          "현재 연구는 텍스트-향기 생성, 향기 지각 연구, 구조화 출력 안전성, 향기 렌더링 디바이스를 포괄합니다."
        ]
      }
    },
    {
      "slug": "applied-ai",
      "theme": "dark",
      "tags": [
        "biometrics",
        "LLM evaluation",
        "e-sports",
        "XAI"
      ],
      "title": {
        "en": "Applied AI",
        "ko": "응용 AI"
      },
      "short": {
        "en": "Biometric intelligence, LLM evaluation, e-sports analytics, and emerging applied AI.",
        "ko": "생체인식, LLM 평가, e스포츠 분석, 그리고 다양한 응용 AI 연구."
      },
      "status": {
        "en": "Applied sensing & evaluation program",
        "ko": "응용 감지 및 평가 프로그램"
      },
      "body": {
        "en": [
          "We build compact and explainable models for face, vein, ECG, and other biometric signals, emphasizing deployability and robustness under real-world constraints.",
          "This pillar also includes e-sports analytics, LLM evaluation, applied generative AI demonstrations, and student-led projects in any emerging domain where AI evaluation and sensing converge."
        ],
        "ko": [
          "얼굴, 정맥, 심전도 등 생체 신호를 위한 경량 설명 가능 모델을 개발합니다.",
          "이 분야는 e스포츠 분석, LLM 평가, 응용 생성형 AI, 학생 주도 프로젝트를 포괄합니다."
        ]
      },
      "image": "assets/img-1782133009043-ocrh9x77.jpg"
    }
  ],
  "projects": [
    {
      "slug": "game-rating-agent",
      "title": {
        "en": "Automatic Gameplay and Rating AI",
        "ko": "자동 게임플레이 및 등급 분류 AI"
      },
      "area": "game-ai",
      "type": {
        "en": "Funded Project",
        "ko": "연구과제"
      },
      "stage": {
        "en": "Active",
        "ko": "진행 중"
      },
      "desc": {
        "en": "Large-scale development of agents and multimodal evaluators for game rating classification.",
        "ko": "게임 등급 분류를 위한 에이전트 및 멀티모달 평가기 대규모 개발."
      },
      "image": "assets/placeholder.jpg",
      "goals": {
        "en": [
          "Build agents that navigate game environments",
          "Extract multimodal evidence from gameplay",
          "Classify content and explain rating decisions"
        ],
        "ko": [
          "게임 환경을 탐색하는 에이전트 개발",
          "게임플레이에서 멀티모달 증거 추출",
          "콘텐츠 분류 및 등급 결정 설명"
        ]
      },
      "outputs": {
        "en": [
          "Agent baseline",
          "Gameplay log schema",
          "Rating-classification pipeline"
        ],
        "ko": [
          "에이전트 기준 모델",
          "게임플레이 로그 스키마",
          "등급 분류 파이프라인"
        ]
      }
    },
    {
      "slug": "text-to-scent",
      "title": {
        "en": "Text-to-Scent Generation and Evaluation",
        "ko": "텍스트-향기 생성 및 평가"
      },
      "area": "olfactory-ai",
      "type": {
        "en": "Core Research",
        "ko": "핵심 연구"
      },
      "stage": {
        "en": "Active",
        "ko": "진행 중"
      },
      "desc": {
        "en": "Manufacturable scent recipe generation from natural language, followed by human perceptual evaluation.",
        "ko": "자연어에서 제조 가능한 향기 레시피 생성 및 인간 지각 평가."
      },
      "image": "assets/placeholder.jpg",
      "goals": {
        "en": [
          "Generate valid scent recipes from text",
          "Measure semantic alignment in human perception",
          "Build reusable evaluation protocols"
        ],
        "ko": [
          "텍스트에서 유효한 향기 레시피 생성",
          "인간 지각에서 의미 정렬 측정",
          "재사용 가능한 평가 프로토콜 구축"
        ]
      },
      "outputs": {
        "en": [
          "100 manufactured perfumes",
          "1,000 perceptual evaluations",
          "CHI perception manuscript"
        ],
        "ko": [
          "100개 제조 향수",
          "1,000개 지각 평가",
          "CHI 지각 논문"
        ]
      }
    },
    {
      "slug": "scent-speaker",
      "title": {
        "en": "AI Olfactory Renderer / Scent Speaker",
        "ko": "AI 후각 렌더러 / 향기 스피커"
      },
      "area": "olfactory-ai",
      "type": {
        "en": "Device Research",
        "ko": "디바이스 연구"
      },
      "stage": {
        "en": "Prototype",
        "ko": "프로토타입"
      },
      "desc": {
        "en": "A physical output device that renders generated scent recipes as real-time olfactory media.",
        "ko": "생성된 향기 레시피를 실시간 후각 미디어로 렌더링하는 물리적 출력 디바이스."
      },
      "image": "assets/placeholder.jpg",
      "goals": {
        "en": [
          "Represent recipes with cartridge blends",
          "Control emission and evaporation",
          "Evaluate rendering consistency"
        ],
        "ko": [
          "카트리지 블렌드로 레시피 표현",
          "방출 및 증발 제어",
          "렌더링 일관성 평가"
        ]
      },
      "outputs": {
        "en": [
          "Renderer architecture",
          "Calibration protocol",
          "Interactive demo"
        ],
        "ko": [
          "렌더러 아키텍처",
          "교정 프로토콜",
          "인터랙티브 데모"
        ]
      }
    },
    {
      "slug": "scentbias",
      "title": {
        "en": "SCENTBIAS: Structured-output Safety",
        "ko": "SCENTBIAS: 구조화 출력 안전성"
      },
      "area": "applied-ai",
      "type": {
        "en": "Benchmark",
        "ko": "벤치마크"
      },
      "stage": {
        "en": "Submitted",
        "ko": "제출됨"
      },
      "desc": {
        "en": "Evaluation suite for demographic differentiation and stereotype-related failures in text-to-scent generation.",
        "ko": "텍스트-향기 생성에서 인구통계학적 차별화 및 고정관념 관련 실패 평가."
      },
      "image": "assets/placeholder.jpg",
      "goals": {
        "en": [
          "Detect demographic conditioning",
          "Measure safety bypass",
          "Separate distributional differentiation"
        ],
        "ko": [
          "인구통계학적 조건화 감지",
          "안전성 우회 측정",
          "분포적 차별화 분리"
        ]
      },
      "outputs": {
        "en": [
          "Five-protocol suite",
          "Trap-word diagnostic",
          "Mitigation analysis"
        ],
        "ko": [
          "5개 프로토콜 모음",
          "함정 단어 진단",
          "완화 분석"
        ]
      }
    },
    {
      "slug": "biometric-ondevice",
      "title": {
        "en": "Efficient Biometric Recognition",
        "ko": "효율적 생체인식"
      },
      "area": "applied-ai",
      "type": {
        "en": "Applied AI",
        "ko": "응용 AI"
      },
      "stage": {
        "en": "Active",
        "ko": "진행 중"
      },
      "desc": {
        "en": "Compression, quantization, and explainability for biometric models under deployment constraints.",
        "ko": "배포 제약 조건에서 생체인식 모델의 압축, 양자화, 설명 가능성."
      },
      "image": "assets/placeholder.jpg",
      "goals": {
        "en": [
          "Reduce model size without performance loss",
          "Evaluate INT8 and FP16 deployment",
          "Explain decisions with region-wise attribution"
        ],
        "ko": [
          "성능 손실 없이 모델 크기 감소",
          "INT8 및 FP16 배포 평가",
          "영역별 귀속으로 결정 설명"
        ]
      },
      "outputs": {
        "en": [
          "On-device baseline",
          "Quantization report",
          "Journal manuscript"
        ],
        "ko": [
          "온디바이스 기준 모델",
          "양자화 보고서",
          "저널 논문"
        ]
      }
    },
    {
      "slug": "student-scent-apps",
      "title": {
        "en": "Multimodal Scent Applications",
        "ko": "멀티모달 향기 응용"
      },
      "area": "olfactory-ai",
      "type": {
        "en": "Student Projects",
        "ko": "학생 프로젝트"
      },
      "stage": {
        "en": "Exploratory",
        "ko": "탐색 중"
      },
      "desc": {
        "en": "Undergraduate research projects connecting scent with fashion, music, diary, and ambient media.",
        "ko": "향기를 패션, 음악, 일기, 주변 미디어와 연결하는 학부 연구."
      },
      "image": "assets/placeholder.jpg",
      "goals": {
        "en": [
          "Build lightweight demos",
          "Collect reusable data",
          "Feed promising ideas into graduate projects"
        ],
        "ko": [
          "경량 데모 개발",
          "재사용 가능한 데이터 수집",
          "대학원 프로젝트로 아이디어 연결"
        ]
      },
      "outputs": {
        "en": [
          "Fashion-to-scent demo",
          "Music-to-scent mapping",
          "Gallery-ready prototypes"
        ],
        "ko": [
          "패션-향기 데모",
          "음악-향기 매핑",
          "갤러리 전시 프로토타입"
        ]
      }
    }
  ],
  "people": [
    {
      "slug": "professor",
      "category": "pi",
      "name": {
        "en": "Jooyoung Kim",
        "ko": "김주영"
      },
      "role": {
        "en": "Principal Investigator · Assistant Professor",
        "ko": "연구책임자 · 조교수"
      },
      "focus": {
        "en": "Applied AI, multimodal generation, olfactory AI, game AI, biometrics, LLM evaluation",
        "ko": "응용 AI, 멀티모달 생성, 후각 AI, 게임 AI, 생체인식, LLM 평가"
      },
      "bio": {
        "en": "Jooyoung Kim is an Assistant Professor in the Department of Convergence Software at Myongji University, South Korea. He received his B.S. and Ph.D. degrees in Electrical and Electronic Engineering from Yonsei University, South Korea. After graduation, he worked as a Manager in the Data Science Team, G.AI Group at SK Inc C&C. Additionally, he co-founded PS Analytics, an e-sport data analysis company. His research interests encompass the application and development of state-of-the-art pattern recognition and machine learning methods across multidisciplinary fields.",
        "ko": "Jooyoung Kim is an Assistant Professor in the Department of Convergence Software at Myongji University, South Korea. He received his B.S. and Ph.D. degrees in Electrical and Electronic Engineering from Yonsei University, South Korea. After graduation, he worked as a Manager in the Data Science Team, G.AI Group at SK Inc C&C. Additionally, he co-founded PS Analytics, an e-sport data analysis company. His research interests encompass the application and development of state-of-the-art pattern recognition and machine learning methods across multidisciplinary fields."
      },
      "image": "assets/profile.jpg"
    },
    {
      "slug": "seungju-lee",
      "category": "phd",
      "name": {
        "en": "Seungju Lee",
        "ko": "이승주"
      },
      "role": {
        "en": "Ph.D. Candidate (2026.03 ~)",
        "ko": "박사 과정 (2026.03 ~)"
      },
      "focus": {
        "en": "Applied AI, game&interactive AI",
        "ko": "Applied AI, game&interactive AI"
      },
      "bio": {
        "en": "Applied AI, game&interactive AI",
        "ko": "Applied AI, game&interactive AI"
      },
      "image": "assets/img-1782171948577-cynoabab.jpg",
      "email": "sj99ai@mju.ac.kr"
    },
    {
      "slug": "sanghoon-lee",
      "category": "phd",
      "name": {
        "en": "Sanghoon Lee",
        "ko": "이상훈"
      },
      "role": {
        "en": "Ph.D. Candidate (2026.03 ~)",
        "ko": "박사 과정 (2026.03 ~)"
      },
      "focus": {
        "en": "",
        "ko": ""
      },
      "bio": {
        "en": "",
        "ko": ""
      },
      "image": "assets/img-1782171963708-wj19pwtq.jpg"
    },
    {
      "slug": "jeemin-kim",
      "category": "intern",
      "name": {
        "en": "Jeemin Kim",
        "ko": "김지민"
      },
      "role": {
        "en": "Research Intern (2025.04 ~)",
        "ko": "학부연구생 (2025.04 ~)"
      },
      "focus": {
        "en": "",
        "ko": ""
      },
      "bio": {
        "en": "",
        "ko": ""
      },
      "image": "assets/img-1782172195402-54c4j7ot.jpg"
    },
    {
      "slug": "kyeongmin-kim",
      "category": "phd",
      "name": {
        "en": "Kyeongmin Kim",
        "ko": "김경민"
      },
      "role": {
        "en": "Ph.D. Candidate (2026.09 ~)",
        "ko": "박사 과정 (2026.09 ~)"
      },
      "focus": {
        "en": "",
        "ko": ""
      },
      "bio": {
        "en": "",
        "ko": ""
      },
      "image": "assets/img-1782172004427-nxcbo9y3.jpg"
    },
    {
      "slug": "minseon-jo",
      "category": "intern",
      "name": {
        "en": "MinSeon Jo",
        "ko": "조민선"
      },
      "role": {
        "en": "Research Intern (2025.11 ~)",
        "ko": "학부연구생 (2025.11 ~)"
      },
      "focus": {
        "en": "",
        "ko": ""
      },
      "bio": {
        "en": "",
        "ko": ""
      },
      "image": "assets/img-1782172213056-n3xayg3v.jpg"
    },
    {
      "slug": "yoojeong-kim",
      "category": "intern",
      "name": {
        "en": "Yoojeong Kim",
        "ko": "김유정"
      },
      "role": {
        "en": "Research Intern (2025.12 ~)",
        "ko": "학부연구생 (2025.12 ~)"
      },
      "focus": {
        "en": "",
        "ko": ""
      },
      "bio": {
        "en": "",
        "ko": ""
      },
      "image": "assets/img-1782172224152-acg7i9l0.jpg"
    },
    {
      "slug": "seunggyu-han",
      "category": "intern",
      "name": {
        "en": "SeungGyu Han",
        "ko": "한승규"
      },
      "role": {
        "en": "Research Intern (2025.12 ~)",
        "ko": "학부연구생 (2025.12 ~)"
      },
      "focus": {
        "en": "",
        "ko": ""
      },
      "bio": {
        "en": "",
        "ko": ""
      },
      "image": "assets/img-1782172238208-lnomv55c.jpg"
    },
    {
      "slug": "minwook-kim",
      "category": "intern",
      "name": {
        "en": "Minwook Kim",
        "ko": "김민욱"
      },
      "role": {
        "en": "Research Intern (2025.12 ~)",
        "ko": "학부연구생 (2025.12 ~)"
      },
      "focus": {
        "en": "",
        "ko": ""
      },
      "bio": {
        "en": "",
        "ko": ""
      },
      "image": "assets/img-1782172434737-izn3nm65.jpg"
    },
    {
      "slug": "sukwoo-jung",
      "category": "intern",
      "name": {
        "en": "SukWoo Jung",
        "ko": "정석우"
      },
      "role": {
        "en": "Research Intern (2025.12 ~)",
        "ko": "학부연구생 (2025.12 ~)"
      },
      "focus": {
        "en": "",
        "ko": ""
      },
      "bio": {
        "en": "",
        "ko": ""
      },
      "image": "assets/img-1782172479890-x050c6ux.jpg"
    },
    {
      "slug": "taekdong-kim",
      "category": "intern",
      "name": {
        "en": "Taekdong Kim",
        "ko": "김택동"
      },
      "role": {
        "en": "Research Intern (2026.01 ~)",
        "ko": "학부연구생 (2026.01 ~)"
      },
      "focus": {
        "en": "",
        "ko": ""
      },
      "bio": {
        "en": "",
        "ko": ""
      },
      "image": "assets/img-1782172495034-a1lv1rri.jpg"
    },
    {
      "slug": "jihoon-shin",
      "category": "intern",
      "name": {
        "en": "Jihoon Shin",
        "ko": "신지훈"
      },
      "role": {
        "en": "Research Intern (2026.03 ~)",
        "ko": "학부연구생 (2026.03 ~)"
      },
      "focus": {
        "en": "",
        "ko": ""
      },
      "bio": {
        "en": "",
        "ko": ""
      },
      "image": "assets/img-1782172512009-75mr7yhy.jpg"
    },
    {
      "slug": "seonga-lee",
      "category": "intern",
      "name": {
        "en": "Seonga Lee",
        "ko": "이성아"
      },
      "role": {
        "en": "Research Intern (2026.03 ~)",
        "ko": "학부연구생 (2026.03 ~)"
      },
      "focus": {
        "en": "",
        "ko": ""
      },
      "bio": {
        "en": "",
        "ko": ""
      },
      "image": "assets/img-1782172523774-fc60tag8.jpg"
    },
    {
      "slug": "minseo-kim",
      "category": "intern",
      "name": {
        "en": "Minseo Kim",
        "ko": "김민서"
      },
      "role": {
        "en": "Research Intern (2026.03 ~)",
        "ko": "학부연구생 (2026.03 ~)"
      },
      "focus": {
        "en": "",
        "ko": ""
      },
      "bio": {
        "en": "",
        "ko": ""
      },
      "image": "assets/img-1782172532194-g63mtefj.jpg"
    },
    {
      "slug": "sion-kim",
      "category": "intern",
      "name": {
        "en": "Sion Kim",
        "ko": "김시온"
      },
      "role": {
        "en": "Research Intern (2026.06 ~)",
        "ko": "학부연구생 (2026.06 ~)"
      },
      "focus": {
        "en": "",
        "ko": ""
      },
      "bio": {
        "en": "",
        "ko": ""
      },
      "image": "assets/img-1782178286631-bxcf7m3o.jpg"
    }
  ],
  "alumni": [
    {
      "name": {
        "en": "Sumin Seo",
        "ko": "서수민"
      },
      "role": {
        "en": "Research Intern",
        "ko": "학부연구생"
      },
      "year": "2024.12 ~ 2025.06",
      "affiliation": {
        "en": "",
        "ko": ""
      },
      "image": "assets/img-1782172105928-0sw56103.jpg"
    },
    {
      "name": {
        "en": "Yeonwoo Choo",
        "ko": "추연우"
      },
      "role": {
        "en": "Research Intern",
        "ko": "학부연구생"
      },
      "year": "2025.01 ~ 2026.02",
      "affiliation": {
        "en": "SCSPRO",
        "ko": "SCSPRO"
      },
      "image": "assets/img-1782172091226-jpcnjh1k.jpg"
    },
    {
      "name": {
        "en": "Gyuri Kim",
        "ko": "김규리"
      },
      "role": {
        "en": "Research Intern",
        "ko": "학부연구생"
      },
      "year": "2025.06 ~ 2026.02",
      "affiliation": {
        "en": "Ewha W. Univ",
        "ko": "이화여자대학교"
      },
      "image": "assets/img-1782173959721-arghbr6x.jpg"
    },
    {
      "name": {
        "en": "Junsoo Jang",
        "ko": "장준수"
      },
      "role": {
        "en": "Research Intern",
        "ko": "학부연구생"
      },
      "year": "2025.01 ~ 2026.08",
      "affiliation": {
        "en": "SCSPRO",
        "ko": "SCSPRO"
      },
      "image": "assets/img-1782172071911-x5hczav4.jpg"
    }
  ],
  "publications": [
    {
      "slug": "chi-perception",
      "cat": "intl-conference",
      "area": "olfactory-ai",
      "url": "",
      "title": "Can You Smell the Story? Which Textual Meanings Are Perceptible Through Computationally Generated Scent",
      "authors": "Kim, J. et al.",
      "venue": "Manuscript in preparation for CHI",
      "year": "2027"
    },
    {
      "slug": "scentbias-paper",
      "cat": "intl-conference",
      "area": "olfactory-ai",
      "url": "",
      "title": "Smells Like Bias: Evaluating Demographic Differentiation and Stereotype-Related Failures in LLM-Based Text-to-Scent Generation",
      "authors": "Kim, J. et al.",
      "venue": "NeurIPS E&D Workshop",
      "year": "2026"
    },
    {
      "slug": "bbq-paper",
      "cat": "intl-conference",
      "area": "applied-ai",
      "year": "2026",
      "title": "When Bias Scores Reflect Abstention Failure: Disentangling Stereotype Direction from Refusal to Abstain in BBQ",
      "authors": "Kim, J., Kim, J.",
      "venue": "ACL Rolling Review",
      "url": "",
      "note": "EMNLP 2026 Findings",
      "patentNumber": ""
    },
    {
      "slug": "face-sketch-xai",
      "cat": "intl-journal",
      "area": "applied-ai",
      "url": "",
      "title": "Explainable Cross-Modal Face Photo-Sketch Similarity with Region-Wise Attribution and Multi-Extractor Fusion",
      "authors": "Kim, J. et al.",
      "venue": "Journal (under revision)",
      "year": "2026"
    },
    {
      "slug": "j7-lol",
      "cat": "intl-journal",
      "area": "game-ai",
      "url": "https://www.mdpi.com/journal/applsci",
      "title": "Structured Summarization of League of Legends Match Data Optimized for Large Language Model Input",
      "authors": "Kim, J., Lee, W., & Park, J.",
      "venue": "Applied Sciences",
      "year": "2025",
      "note": "SCIE, 2022 IF: 2.5"
    },
    {
      "slug": "j6-smote",
      "cat": "intl-journal",
      "area": "applied-ai",
      "url": "https://ieeexplore.ieee.org/xpl/ReseArchPubType.jsp?punumber=7361",
      "title": "SMOTE-Diffusion: A Combined Approach for Authentic Data Generation for Time-domain Radar Signal in Intelligent Transportation System",
      "authors": "Yun, K., Park, J., Kim, J., & Kim, T.",
      "venue": "IEEE Sensors Journal",
      "year": "2025",
      "note": "SCIE, 2024 IF: 4.3"
    },
    {
      "slug": "game-rating-ai",
      "cat": "domestic-conference",
      "area": "game-ai",
      "url": "https://www.kiise.or.kr",
      "title": "AI 기반 게임 콘텐츠 이해 및 등급 분류 연구",
      "authors": "Kim, J. et al.",
      "venue": "한국정보과학회",
      "year": "2025"
    },
    {
      "slug": "j5-perfume",
      "cat": "intl-journal",
      "area": "olfactory-ai",
      "url": "https://www.mdpi.com/journal/applsci",
      "title": "An NLP-Based Perfume Note Estimation Based on Descriptive Sentences",
      "authors": "Kim, J., Oh, K., & Oh, B. S.",
      "venue": "Applied Sciences",
      "year": "2024",
      "note": "SCIE, 2022 IF: 2.5"
    },
    {
      "slug": "j4-facesketch",
      "cat": "intl-journal",
      "area": "applied-ai",
      "url": "https://link.springer.com/journal/521",
      "title": "Face Photo-sketch Recognition based on Multi-Directional Line Features Projection",
      "authors": "Kim, J., Lin, Z., Kim, D., & Toh, K. A.",
      "venue": "Neural Computing and Applications",
      "year": "2023",
      "note": "SCIE, 2022 IF: 6.0"
    },
    {
      "slug": "c7-esports",
      "cat": "intl-conference",
      "area": "game-ai",
      "url": "https://ieeexplore.ieee.org/xpl/conhome/10361948/proceeding",
      "title": "Rethinking Evaluation Metric for Probability Estimation Models Using Esports Data",
      "authors": "Choi, E., Kim, J., & Lee, W.",
      "venue": "IEEE TrustCom 2023",
      "year": "2023"
    },
    {
      "slug": "c6-palmvein",
      "cat": "intl-conference",
      "area": "applied-ai",
      "url": "https://www.iceic.org",
      "title": "Multispectral Palm-Vein Fusion for User Identification",
      "authors": "Lee, J., Kim, J., Kim, D., Lee, S., Sung, J., & Toh, K. A.",
      "venue": "IEEE ICEIC 2023",
      "year": "2023"
    },
    {
      "slug": "p2-body",
      "cat": "patent",
      "area": "applied-ai",
      "url": "https://www.kipris.or.kr",
      "title": "Image based body composition analyzing apparatus and body composition analyzing method, and smart device using the same",
      "authors": "Kim, J.",
      "venue": "Republic of Korea",
      "patentNumber": "KR-1023596560000",
      "year": "2022"
    },
    {
      "slug": "c5-palm",
      "cat": "intl-conference",
      "area": "applied-ai",
      "url": "https://ieeexplore.ieee.org/xpl/conhome/9933666/proceeding",
      "title": "Identity Verification based on the RGB and NIR Images of the Palm",
      "authors": "Lee, J., Kim, J., & Toh, K. A.",
      "venue": "IEEE INDIN 2022",
      "year": "2022"
    },
    {
      "slug": "j3-plasmon",
      "cat": "intl-journal",
      "area": "applied-ai",
      "url": "https://opg.optica.org/oe/home.cfm",
      "title": "Machine learning-based leaky momentum prediction of plasmonic random nanosubstrate",
      "authors": "Kim, J., Lee, H., Im, S., Lee, S. A., Kim, D., & Toh, K. A.",
      "venue": "Optics Express",
      "year": "2021",
      "note": "SCIE, 2022 IF: 3.8"
    },
    {
      "slug": "j2-wifi",
      "cat": "intl-journal",
      "area": "applied-ai",
      "url": "https://ieeeaccess.ieee.org/",
      "title": "Wi-Fi based user identification using in-air handwritten signature",
      "authors": "Jung, J., Moon, H. C., Kim, J., Kim, D., & Toh, K. A.",
      "venue": "IEEE Access",
      "year": "2021",
      "note": "SCIE, 2022 IF: 3.9"
    },
    {
      "slug": "j1-fkp",
      "cat": "intl-journal",
      "area": "applied-ai",
      "url": "https://link.springer.com/journal/12559",
      "title": "A line feature extraction method for finger-knuckle-print verification",
      "authors": "Kim, J., Oh, K., Oh, B. S., Lin, Z., & Toh, K. A.",
      "venue": "Cognitive Computation",
      "year": "2019",
      "note": "SCIE, 2022 IF: 5.4"
    },
    {
      "slug": "p1-stock",
      "cat": "patent",
      "area": "applied-ai",
      "url": "https://www.kipris.or.kr",
      "title": "Method of providing stock information",
      "authors": "Kim, J., Kar-Ann Toh",
      "venue": "Republic of Korea",
      "patentNumber": "KR-1020125640000",
      "year": "2019"
    },
    {
      "slug": "c4-wifi-triplet",
      "cat": "intl-conference",
      "area": "applied-ai",
      "url": "https://ieeexplore.ieee.org/xpl/conhome/8961595/proceeding",
      "title": "Wi-Fi based handwritten signature verification using a triplet network",
      "authors": "Kwon, Y., Kim, J., & Toh, K. A.",
      "venue": "ICAIP 2019",
      "year": "2019"
    },
    {
      "slug": "c3-wifi-transfer",
      "cat": "intl-conference",
      "area": "applied-ai",
      "url": "https://ieeexplore.ieee.org/xpl/conhome/8820578/proceeding",
      "title": "Transfer learning of Wi-Fi handwritten signature signals for identity verification based on the kernel and the range space projection",
      "authors": "Jung, J., Kim, J., & Toh, K. A.",
      "venue": "IEEE ICIP 2019",
      "year": "2019"
    },
    {
      "slug": "c2-glaucoma",
      "cat": "intl-conference",
      "area": "applied-ai",
      "url": "https://ieeexplore.ieee.org/",
      "title": "Fusing geometric and appearance-based features for glaucoma diagnosis",
      "authors": "Oh, K., Kim, J., Yoon, S., & Seo, K. Y.",
      "venue": "AIPR 2017",
      "year": "2017"
    },
    {
      "slug": "c1-fkp-ieee",
      "cat": "intl-conference",
      "area": "applied-ai",
      "url": "https://ieeexplore.ieee.org/xpl/conhome/7510283/proceeding",
      "title": "Finger-knuckle-print for identity verification based on difference images",
      "authors": "Kim, J., Oh, K., Teoh, A. B. J., & Toh, K. A.",
      "venue": "IEEE ICIEA 2016",
      "year": "2016"
    }
  ],
  "gallery": [
    {
      "slug": "conference-presentation",
      "cat": "conference",
      "date": "2026.06.18",
      "title": {
        "en": "한국방송미디어공학회 하계학술대회 참석",
        "ko": "한국방송미디어공학회 하계학술대회 참석"
      },
      "image": "assets/img-1782178539348-bgiye2kj.jpg",
      "text": {
        "en": "연구실 이승주, 이상훈, 조민선 학생이 한국방송미디어공학회 하계학술대회에 참석하여 연구 내용을 발표했습니다.",
        "ko": "연구실 이승주, 이상훈, 조민선 학생이 한국방송미디어공학회 하계학술대회에 참석하여 연구 내용을 발표했습니다."
      }
    },
    {
      "slug": "website-renewal",
      "cat": "team",
      "date": "2026.06.23",
      "title": {
        "en": "Lab Website Renewal",
        "ko": "연구실 홈페이지 개편"
      },
      "image": "assets/img-1782178399474-uekqcyu3.jpg",
      "text": {
        "en": "Lab Website Renewal!",
        "ko": "연구실 홈페이지를 개편하였습니다!"
      }
    },
    {
      "slug": "paper-accept",
      "cat": "team",
      "date": "2026.06.23",
      "title": {
        "en": "IEEE Sensors Journal Accepted in June 2026",
        "ko": "IEEE Sensors Journal Accepted in June 2026"
      },
      "image": "assets/img-1782179187605-ui55m5y2.jpg",
      "text": {
        "en": "Manuscript entitled \"Signal Synthesis for IR-UWB Radar in Angle-Representation Fields based NeRF Architectures\" has been accepted to IEEE Sensors Journal (SCIE Journal, 2024 IF: 4.3)",
        "ko": "Manuscript entitled \"Signal Synthesis for IR-UWB Radar in Angle-Representation Fields based NeRF Architectures\" has been accepted to IEEE Sensors Journal (SCIE Journal, 2024 IF: 4.3)"
      }
    }
  ]
};

/* ── Load admin overrides from localStorage ─────────────── */
(function() {
  try {
    const raw = localStorage.getItem('aialab-admin-data');
    if (!raw) return;
    const saved = JSON.parse(raw);
    ['research','projects','people','alumni','gallery'].forEach(k => {
      if (Array.isArray(saved[k]) && saved[k].length > 0) data[k] = saved[k];
    });
    // Publications are always loaded from script.js (source of truth for area tags)
    // localStorage override for publications is intentionally disabled
  } catch(e) {}
})();

/* ── Utilities ───────────────────────────────────────────── */
const $ = s => document.querySelector(s);
const app = document.querySelector('#app');
function link(path, text, cls = '') { return `<a class="${cls}" href="#/${path}">${text}</a>`; }
function cta(path, text) { return link(path, text, 'button-primary'); }
function ghost(path, text) { return link(path, text, 'button-secondary'); }

/* ── Components ──────────────────────────────────────────── */
function researchCard(r) {
  return `<a class="card ${r.theme === 'dark' ? 'dark' : ''}" href="#/projects/${r.slug}">
    <img src="${r.image}" alt=""><span class="meta">${L(r.status)}</span>
    <h3>${L(r.title)}</h3><p>${L(r.short)}</p>
    <span class="text-link">${t('cards.exploreArea')}</span></a>`;
}

function projectCard(p) {
  return `<a class="card" href="#/project/${p.slug}">
    <img src="${p.image}" alt=""><span class="meta">${L(p.type)} · ${L(p.stage)}</span>
    <h3>${L(p.title)}</h3><p>${L(p.desc)}</p>
    <span class="text-link">${t('cards.viewProject')}</span></a>`;
}

function piCard(p) {
  const avatar = p.image
    ? `<img src="${p.image}" alt="${L(p.name)}" class="pi-avatar">`
    : `<div class="pi-avatar pi-avatar-init"><span>${(L(p.name)||'P').charAt(0)}</span></div>`;
  return `<a class="card pi-card" href="#/people/${p.slug}">
    ${avatar}
    <div class="pi-card-body">
      <span class="meta">${L(p.role)}</span>
      <h3>${L(p.name)}</h3>
      ${L(p.focus) ? `<p>${L(p.focus)}</p>` : ''}
    </div>
  </a>`;
}

function personCard(p) {
  const avatar = p.image ? `<img src="${p.image}" alt="${L(p.name)}">` : `<span>${(L(p.name)||'G').charAt(0)}</span>`;
  const focusText = L(p.focus);
  return `<a class="card" href="#/people/${p.slug}">
    <div class="person-avatar">${avatar}</div>
    <span class="meta">${L(p.role)}</span>
    <h3>${L(p.name)}</h3>
    ${focusText ? `<p>${focusText}</p>` : ''}
    <span class="text-link">${t('cards.profile')}</span></a>`;
}

function internCard(p) {
  const avatar = p.image ? `<img src="${p.image}" alt="${L(p.name)}">` : `<span>${(L(p.name)||'G').charAt(0)}</span>`;
  return `<a class="card intern-card" href="#/people/${p.slug}">
    <div class="person-avatar" style="width:56px;height:56px">${avatar}</div>
    <span class="meta">${L(p.role)}</span>
    <h3 style="font-size:18px">${L(p.name)}</h3></a>`;
}

function alumniCard(a) {
  const avatar = a.image ? `<img src="${a.image}" alt="${L(a.name)}">` : '';
  return `<div class="card alumni-card">
    <div class="person-avatar" style="width:56px;height:56px">${avatar}</div>
    <span class="meta">${L(a.role)} · ${a.year}</span>
    <h3 style="font-size:18px">${L(a.name)}</h3>
    ${L(a.affiliation) ? `<p style="font-size:12px;color:var(--muted)">${L(a.affiliation)}</p>` : ''}
  </div>`;
}

function pubRow(p) {
  const catLabel = t(`publications.tabs.${p.cat}`) || p.cat;
  const linkBtn = p.url
    ? `<a href="${p.url}" target="_blank" rel="noopener noreferrer" class="button-secondary" style="flex-shrink:0;white-space:nowrap">${t('publications.viewLink')}</a>`
    : '';
  return `<article class="paper">
    <div>
      <p style="font-size:12px;color:var(--muted);text-transform:uppercase;letter-spacing:.04em;margin-bottom:6px">${catLabel} · ${p.year}</p>
      <h3>${p.title}</h3>
      ${p.authors ? `<p style="font-size:14px;color:var(--muted);margin:5px 0 3px"><strong style="color:var(--ink);font-weight:600">${t('publications.authors')}:</strong> ${p.authors}</p>` : ''}
      <p style="font-size:14px;color:var(--muted)">${p.venue}</p>
      ${p.patentNumber ? `<p style="font-size:13px;color:var(--muted);margin:3px 0">${t('publications.patentNo')}: <strong>${p.patentNumber}</strong></p>` : ''}
      ${p.note ? `<p style="font-size:12px;color:var(--primary);font-weight:600;margin:4px 0">${p.note}</p>` : ''}
    </div>
    ${linkBtn}
  </article>`;
}

function galleryCard(g) {
  return `<a class="gallery-card" href="#/gallery/${g.slug}">
    <img src="${g.image}" alt="">
    ${g.date ? `<p class="gallery-date">${g.date}</p>` : ''}
    <h3>${L(g.title)}</h3><p>${L(g.text)}</p></a>`;
}

function collabLogoStrip() {
  const logo = `<img src="assets/embl.png" alt="EMBL" class="collab-logo">`;
  const logos = logo.repeat(12);
  return `<div class="collab-logos-strip"><div class="collab-marquee">${logos}${logos}</div></div>`;
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
        <img class="hero-art" src="assets/myongji-home.png" alt="AI & Applications Lab">
      </div>
    </section>
    <section class="tile dark">
      <h2>${L(data.research[0].title)}</h2>
      <p class="tile-lead">${L(data.research[0].short)}</p>
      <div class="cta-row">${cta('projects/game-ai', t('subNav.gameAI'))}${ghost('project/game-rating-agent', t('cards.viewProject'))}</div>
      <img class="tile-media" src="${data.research[0].image}" alt="">
    </section>
    <section class="tile light">
      <h2>${L(data.research[1].title)}</h2>
      <p class="tile-lead">${L(data.research[1].short)}</p>
      <div class="cta-row">${cta('projects/olfactory-ai', t('subNav.olfactoryAI'))}${ghost('project/text-to-scent', t('cards.viewProject'))}</div>
      <img class="tile-media" src="${data.research[1].image}" alt="">
    </section>
    <section class="tile dark2">
      <h2>${L(data.research[2].title)}</h2>
      <p class="tile-lead">${L(data.research[2].short)}</p>
      <div class="cta-row">${cta('projects/applied-ai', t('subNav.appliedAI'))}${ghost('publications', t('nav.publications'))}</div>
      <img class="tile-media" src="${data.research[2].image}" alt="">
    </section>
    <section class="tile parchment" style="padding:40px 24px 60px">
      <p style="font-family:'SF Pro Display',system-ui,-apple-system,sans-serif;font-size:clamp(20px,2.2vw,28px);font-weight:600;color:var(--ink);letter-spacing:.196px;margin:0 0 8px">${t('gallery.recentEvents')}</p>
      <div class="content" style="padding-top:16px;padding-bottom:0">
        <div style="text-align:right;margin-bottom:16px"><a href="#/gallery" style="font-size:14px;color:var(--primary)">${t('gallery.viewAll')} ↗</a></div>
        <div class="grid">${data.gallery.slice(0,3).map(galleryCard).join('')}</div>
      </div>
    </section>
    <section class="tile dark" style="padding:32px 24px 60px">
      <p style="font-family:'SF Pro Display',system-ui,-apple-system,sans-serif;font-size:clamp(20px,2.2vw,28px);font-weight:600;color:#fff;letter-spacing:.196px;margin-bottom:28px;margin-top:0">${t('contact.collaborators')}</p>
      ${collabLogoStrip()}
    </section>`;
}

function research() {
  return `
    <section class="section-header"><h1>${t('research.h1')}</h1><p>${t('research.lead')}</p></section>
    <section class="content"><div class="grid">${data.research.map(researchCard).join('')}</div></section>`;
}

function projects(filter) {
  const items = filter ? data.projects.filter(p => p.area === filter) : data.projects;
  const chips = ['all', ...data.research.map(r => r.slug)];
  return `
    <section class="section-header parchment"><h1>${t('projects.h1')}</h1><p>${t('projects.lead')}</p></section>
    <section class="content">
      <div class="chip-row">
        ${chips.map(c => {
          const label = c === 'all' ? t('publications.tabs.all') : L(data.research.find(r => r.slug === c)?.title);
          return `<button class="chip ${(!filter && c === 'all') || filter === c ? 'is-active' : ''}" data-filter="${c}">${label}</button>`;
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
    <section class="detail-hero"><div class="wrap">
      <div class="breadcrumb"><a href="#/projects">${t('nav.projects')}</a> / <a href="#/projects/${p.area}">${L(area?.title)||''}</a></div>
      <h1>${L(p.title)}</h1><p>${L(p.desc)}</p>
    </div></section>
    <section class="content split">
      <article class="prose">
        <img src="${p.image}" alt="" style="border-radius:18px;margin-bottom:28px;aspect-ratio:16/9;object-fit:cover">
        <h2>${t('cards.researchGoals')}</h2>${L(p.goals).map(g=>`<p>${g}</p>`).join('')}
        <h2>${t('cards.expectedOutputs')}</h2>${L(p.outputs).map(o=>`<p>${o}</p>`).join('')}
        <div class="cta-row" style="justify-content:flex-start">${cta('contact',t('cards.contactUs'))}${ghost('gallery',t('cards.viewGallery'))}</div>
      </article>
      <aside class="side-panel"><div class="spec-list">
        <div class="spec"><strong>${t('cards.area')}</strong><span>${L(area?.title)||p.area}</span></div>
        <div class="spec"><strong>${t('cards.type')}</strong><span>${L(p.type)}</span></div>
        <div class="spec"><strong>${t('cards.status')}</strong><span>${L(p.stage)}</span></div>
        <div class="spec"><strong>${t('cards.related')}</strong><span>${area?.tags?.join(', ')||''}</span></div>
      </div></aside>
    </section>`;
}

function areaDetail(slug) {
  const r = data.research.find(x => x.slug === slug);
  if (!r) return notFound();
  const ps = data.projects.filter(p => p.area === slug);
  return `
    <section class="hero ${r.theme==='dark'?'dark':'white'}"><div class="hero-inner">
      <p class="eyebrow">${t('cards.researchArea')}</p>
      <h1>${L(r.title)}</h1><p class="lead">${L(r.short)}</p>
      <div class="cta-row">${cta('projects',t('cards.allProjects'))}${ghost('contact',t('cards.collaborate'))}</div>
      <img class="hero-art" src="${r.image}" alt="">
    </div></section>
    <section class="content narrow prose">
      <h2>${t('cards.overview')}</h2>${L(r.body).map(x=>`<p>${x}</p>`).join('')}
      <h2>${t('cards.projectsInArea')}</h2>
    </section>
    <section class="content"><div class="grid">${ps.map(projectCard).join('')}</div></section>`;
}

function people() {
  const bycat = cat => data.people.filter(p => p.category === cat);
  const pi = bycat('pi'), phd = bycat('phd'), interns = bycat('intern');
  const subhead = label => `<h2 class="section-subhead">${label}</h2>`;
  return `
    <section class="section-header"><h1>${t('people.h1')}</h1><p>${t('people.lead')}</p></section>
    <section class="content">
      ${subhead(t('people.categories.pi'))}
      <div class="grid">${pi.map(personCard).join('')}</div>
      ${phd.length ? subhead(t('people.categories.phd')) + `<div class="grid">${phd.map(personCard).join('')}</div>` : ''}
      ${interns.length ? subhead(t('people.categories.intern')) + `<div class="grid-interns">${interns.map(internCard).join('')}</div>` : ''}
    </section>
    <div class="alumni-section">
      <h2 class="alumni-heading">${t('people.alumni')}</h2>
      <p style="color:var(--muted);margin:0 0 28px;font-size:17px">${t('people.alumniLead')}</p>
      <div class="grid">${data.alumni.map(alumniCard).join('')}</div>
    </div>`;
}

function personDetail(slug) {
  const p = data.people.find(x => x.slug === slug);
  if (!p) return notFound();
  const avatar = p.image
    ? `<img src="${p.image}" alt="${L(p.name)}" style="width:112px;height:112px;border-radius:50%;object-fit:cover;margin-bottom:24px">`
    : `<div class="person-avatar" style="width:112px;height:112px;font-size:30px;margin-bottom:24px"><span>${(L(p.name)||'G').charAt(0)}</span></div>`;
  const focusText = L(p.focus), bioText = L(p.bio);
  return `
    <section class="detail-hero"><div class="wrap">
      <div class="breadcrumb"><a href="#/people">${t('nav.people')}</a> / ${L(p.name)}</div>
      <h1>${L(p.name)}</h1><p>${L(p.role)}</p>
    </div></section>
    <section class="content split">
      <article class="prose">
        ${avatar}
        ${focusText ? `<h2>${t('cards.focus')}</h2><p>${focusText}</p>` : ''}
        ${bioText ? `<h2>${t('cards.bio')}</h2><p>${bioText}</p>` : ''}
      </article>
      <aside class="side-panel"><div class="spec-list">
        <div class="spec"><strong>${t('cards.role')}</strong><span>${L(p.role)}</span></div>
        <div class="spec"><strong>${t('contact.emailLabel')}</strong><span>${p.email ? `<a href="mailto:${p.email}">${p.email}</a>` : t('cards.contactVia')}</span></div>
      </div></aside>
    </section>`;
}

function publications(cat, area) {
  const catTabs = ['all','intl-journal','intl-conference','domestic-journal','domestic-conference','patent'];
  const areaTabs = ['all','game-ai','olfactory-ai','applied-ai'];
  let items = data.publications;
  if (cat && cat !== 'all') items = items.filter(p => p.cat === cat);
  if (area && area !== 'all') items = items.filter(p => p.area === area);
  return `
    <section class="section-header parchment"><h1>${t('publications.h1')}</h1><p>${t('publications.lead')}</p></section>
    <section class="content narrow">
      <div class="chip-row">
        ${catTabs.map(c => `<button class="chip ${(!cat&&c==='all')||cat===c?'is-active':''}" data-pub="${c}">${t(`publications.tabs.${c}`)}</button>`).join('')}
      </div>
      <div class="chip-row">
        ${areaTabs.map(a => `<button class="chip ${(!area&&a==='all')||area===a?'is-active':''}" data-pub-area="${a}" style="font-size:12px">${a==='all'?t('publications.tabs.all'):t(`subNav.${a==='game-ai'?'gameAI':a==='olfactory-ai'?'olfactoryAI':'appliedAI'}`)}</button>`).join('')}
      </div>
      ${items.map(pubRow).join('')}
    </section>`;
}


function gallery(cat) {
  const cats = ['all', ...new Set(data.gallery.map(g => g.cat))];
  const items = cat ? data.gallery.filter(g => g.cat === cat) : data.gallery;
  return `
    <section class="section-header"><h1>${t('gallery.h1')}</h1><p>${t('gallery.lead')}</p></section>
    <section class="content">
      <div class="chip-row">
        ${cats.map(c => `<button class="chip ${(!cat&&c==='all')||cat===c?'is-active':''}" data-gallery="${c}">${c==='all'?t('publications.tabs.all'):c.charAt(0).toUpperCase()+c.slice(1)}</button>`).join('')}
      </div>
      <div class="gallery-grid">${items.map(galleryCard).join('')}</div>
    </section>`;
}

function galleryDetail(slug) {
  const g = data.gallery.find(x => x.slug === slug);
  if (!g) return notFound();
  return `
    <section class="detail-hero"><div class="wrap">
      <div class="breadcrumb"><a href="#/gallery">${t('gallery.h1')}</a> / ${L(g.title)}</div>
      <h1>${L(g.title)}</h1><p>${L(g.text)}</p>
    </div></section>
    <section class="content narrow prose">
      ${g.date ? `<p style="font-size:14px;color:var(--muted);margin-bottom:20px">${g.date}</p>` : ''}
      <img src="${g.image}" alt="" style="border-radius:18px;margin-bottom:28px;aspect-ratio:4/3;object-fit:cover">
      <div class="cta-row" style="justify-content:flex-start">${ghost('gallery',t('cards.backGallery'))}</div>
    </section>`;
}

function contact() {
  return `
    <section class="section-header parchment"><h1>${t('contact.h1')}</h1><p>${t('contact.lead')}</p></section>
    <section class="content split contact-split">
      <article class="prose">
        <h2>${t('contact.labTitle')}</h2>
        <p>${t('contact.address')}</p>
        <p>${t('contact.phone')}: <a href="tel:02-300-0705">${t('contact.phoneVal')}</a></p>
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
    <section class="hero white"><div class="hero-inner">
      <p class="eyebrow">${t('join.eyebrow')}</p>
      <h1>${t('join.h1')}</h1>
      <p class="lead">${t('join.lead')}</p>
      <div class="cta-row">${cta('contact',t('join.cta1'))}${ghost('projects',t('join.cta2'))}</div>
    </div></section>
    <section class="content"><div class="grid">
      <a class="card" href="#/projects/game-ai"><img src="${data.research[0].image}" alt=""><h3>${L(data.research[0].title)}</h3><p>${lang==='ko'?'에이전트, 콘텐츠 이해, 안전성 평가에 관심 있는 학생.':'For students interested in agents, content understanding, and safety evaluation.'}</p></a>
      <a class="card" href="#/projects/olfactory-ai"><img src="${data.research[1].image}" alt=""><h3>${L(data.research[1].title)}</h3><p>${lang==='ko'?'생성형 AI, 지각, HCI, 향기 렌더링에 관심 있는 학생.':'For students interested in generative AI, perception, HCI, and scent rendering.'}</p></a>
      <a class="card" href="#/projects/applied-ai"><img src="${data.research[2].image}" alt=""><h3>${L(data.research[2].title)}</h3><p>${lang==='ko'?'경량 모델, 설명 가능성, 실세계 감지에 관심 있는 학생.':'For students interested in compact models, explainability, and real-world sensing.'}</p></a>
    </div></section>`;
}

function notFound() {
  return `<section class="section-header"><h1>${t('cards.notFound')}</h1><p>${t('cards.notFoundLead')}</p><div class="cta-row">${cta('home',t('cards.goHome'))}</div></section>`;
}

/* ── Router ──────────────────────────────────────────────── */
function render() {
  const raw = location.hash.replace(/^#\/?/, '') || 'home';
  const parts = raw.split('/').filter(Boolean);
  let html = '';
  if (parts[0]==='home') html=home();
  else if (parts[0]==='research') html=research();
  else if (parts[0]==='projects'&&parts[1]) html=areaDetail(parts[1]);
  else if (parts[0]==='projects') html=projects();
  else if (parts[0]==='project') html=projectDetail(parts[1]);
  else if (parts[0]==='people'&&parts[1]) html=personDetail(parts[1]);
  else if (parts[0]==='people') html=people();
  else if (parts[0]==='publications') { window._pubCat=null; window._pubArea=null; html=publications(); }
  else if (parts[0]==='publication') { window._pubCat=null; window._pubArea=null; html=publications(); }
  else if (parts[0]==='gallery'&&parts[1]) html=galleryDetail(parts[1]);
  else if (parts[0]==='gallery') html=gallery();
  else if (parts[0]==='contact') html=contact();
  else if (parts[0]==='join') html=join();
  else html=notFound();
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
    app.innerHTML = `<div class="view">${projects(v==='all'?null:v)}</div>`;
    attachInteractions();
  }));
  document.querySelectorAll('[data-pub]').forEach(b => b.addEventListener('click', () => {
    window._pubCat = b.dataset.pub === 'all' ? null : b.dataset.pub;
    app.innerHTML = `<div class="view">${publications(window._pubCat, window._pubArea)}</div>`;
    attachInteractions();
  }));
  document.querySelectorAll('[data-pub-area]').forEach(b => b.addEventListener('click', () => {
    window._pubArea = b.dataset.pubArea === 'all' ? null : b.dataset.pubArea;
    app.innerHTML = `<div class="view">${publications(window._pubCat, window._pubArea)}</div>`;
    attachInteractions();
  }));
  document.querySelectorAll('[data-gallery]').forEach(b => b.addEventListener('click', () => {
    const v = b.dataset.gallery;
    app.innerHTML = `<div class="view">${gallery(v==='all'?null:v)}</div>`;
    attachInteractions();
  }));
}

/* ── Marquee Init ────────────────────────────────────────── */
function initMarquees() {
  document.querySelectorAll('.collab-marquee').forEach(el => {
    el.classList.remove('is-running');
    el.style.removeProperty('--marquee-offset');
    el.style.removeProperty('--marquee-duration');
    const start = () => {
      const half = Math.floor(el.children.length / 2);
      const itemW = 80 + 56;
      const setWidth = half * itemW;
      if (setWidth === 0) return;
      el.style.setProperty('--marquee-offset', `-${setWidth}px`);
      el.style.setProperty('--marquee-duration', `${Math.round(setWidth / 80)}s`);
      el.classList.add('is-running');
    };
    requestAnimationFrame(start);
  });
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

/* ── Floating Bar ────────────────────────────────────────── */
let _floatingBar = null;

function updateFloatingBar() {
  if (!_floatingBar) return;
  _floatingBar.innerHTML = `<span>${t('floatingBar.text')}</span><a class="button-primary" href="#/join">${t('floatingBar.cta')}</a>`;
}

function initFloating() {
  _floatingBar = document.createElement('div');
  _floatingBar.className = 'floating-bar';
  updateFloatingBar();
  document.body.appendChild(_floatingBar);
  window.addEventListener('scroll', () => {
    _floatingBar.classList.toggle('show', window.scrollY > 900 && !location.hash.includes('join'));
  });
}

/* ── Language switch ─────────────────────────────────────── */
function setLang(newLang) {
  lang = newLang;
  localStorage.setItem('aialab-lang', lang);
  applyI18n();
  updateFloatingBar();
  render();
}

/* ── Search ──────────────────────────────────────────────── */
function initSearch() {
  const dialog = $('#searchDialog'), openBtn = $('#openSearch'), input = $('#siteSearch'), results = $('#searchResults');
  const corpus = [
    ...data.research.map(x => ({ type:t('nav.research'), title:L(x.title), text:L(x.short), path:`projects/${x.slug}` })),
    ...data.projects.map(x => ({ type:t('nav.projects'), title:L(x.title), text:L(x.desc), path:`project/${x.slug}` })),
    ...data.people.map(x => ({ type:t('nav.people'), title:L(x.name), text:L(x.role), path:`people/${x.slug}` })),
    ...data.publications.map(x => ({ type:t('nav.publications'), title:x.title, text:x.authors||'', path:`publication/${x.slug}` })),
    ...data.gallery.map(x => ({ type:t('gallery.h1'), title:L(x.title), text:L(x.text), path:`gallery/${x.slug}` }))
  ];
  openBtn.addEventListener('click', () => { dialog.showModal(); input.focus(); });
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { results.innerHTML=''; return; }
    const hits = corpus.filter(x => (x.title+' '+x.text+' '+x.type).toLowerCase().includes(q)).slice(0, 8);
    results.innerHTML = hits.length
      ? hits.map(h => `<a class="result" href="#/${h.path}" onclick="document.getElementById('searchDialog').close()"><strong>${h.type}</strong><br>${h.title}<br><small>${h.text}</small></a>`).join('')
      : `<div class="empty">${lang==='ko'?'검색 결과가 없습니다.':'No results found.'}</div>`;
  });
}

/* ── Nav ─────────────────────────────────────────────────── */
function initNav() {
  const btn = $('#toggleMenu'), links = document.querySelector('.nav-links');
  btn.addEventListener('click', () => links.classList.toggle('open'));
  document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
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
