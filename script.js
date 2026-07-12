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
      lead:'We research and develop applied AI systems spanning game & interactive media, olfactory generation, digital content standards, and trustworthy AI evaluation.',
      cta1:'Explore projects', cta2:'Prospective students',
      statPillars:'Active projects', statPubs:'Publications & patents', statPeople:'Researchers'
    },
    research: { h1:'Research areas', lead:'We conduct research across three pillars — game & interactive AI, olfactory AI, and applied AI — united by a shared focus on building and evaluating multimodal systems.' },
    projects: { h1:'Projects', lead:'Game & Interactive AI, Olfactory AI, and Applied AI projects.' },
    people: {
      h1:'People',
      lead:'Principal investigator, Ph.D. and Master candidates, and research interns.',
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
      labDesc:'Department of Convergence Software, Myongji University. We research and develop AI systems across game & interactive AI, olfactory AI, and applied AI.',
      research:'Research', resources:'Resources', contact:'Contact', address:'Myongji University, Seoul, Republic of Korea',
      links: { gameAI:'Game & Interactive AI', olfactoryAI:'Olfactory AI', appliedAI:'Applied AI', publications:'Publications', gallery:'Gallery', join:'Prospective Students', contact:'Contact' }
    },
    cards: { viewProject:'View project', exploreArea:'Explore area', profile:'Profile', details:'Details', backPub:'Back to publications', backGallery:'Back to gallery', contactUs:'Contact us', viewGallery:'View gallery', overview:'Overview', projectsInArea:'Projects in this area', researchGoals:'Research goals', expectedOutputs:'Expected outputs', activityNote:'Activity note', activityNoteText:"This gallery page is a lab activity log. Replace placeholder images with real photos and add date, participants, location, and notes.", focus:'Research Focus', bio:'Bio', role:'Role', contactVia:'Contact via PI', related:'Related', area:'Area', type:'Type', status:'Status', summary:'Summary', researchContext:'Research context', researchContextText:"This item is part of the lab's applied AI portfolio. Details can be expanded with abstract, links, code, dataset, and publication status.", researchArea:'Research Area', allProjects:'All projects', collaborate:'Collaborate', notFound:'Page not found', notFoundLead:'The page you requested does not exist.', goHome:'Go home', education:'Education', experience:'Professional Experience', selectedPubs:'Selected Publications', books:'Books', invitedTalks:'Invited Talks', honors:'Honors & Awards' }
  },
  ko: {
    labName: 'AI & Applications Lab',
    nav: { research:'연구', projects:'프로젝트', people:'구성원', publications:'논문', gallery:'갤러리', contact:'연락처' },
    subNav: { gameAI:'게임 & 인터랙티브 AI', olfactoryAI:'후각 AI', appliedAI:'응용 AI', join:'합류하기' },
    search: { label:'연구실 사이트 검색', placeholder:'프로젝트, 논문, 구성원 검색...' },
    home: {
      eyebrow:'명지대학교 · 융합소프트웨어학부',
      h1:'실세계 응용을 위한 AI 시스템.',
      lead:'게임 & 인터랙티브 미디어, 후각 생성, 디지털 콘텐츠 표준, AI 신뢰성 평가를 아우르는 AI 응용 시스템을 연구하고 개발합니다.',
      cta1:'프로젝트 탐색', cta2:'지원 안내',
      statPillars:'수행 중 프로젝트', statPubs:'논문 & 특허', statPeople:'연구원'
    },
    research: { h1:'연구 분야', lead:'게임 & 인터랙티브 AI, 후각 AI, 응용 AI — 세 축의 연구를 수행하고 있습니다.' },
    projects: { h1:'프로젝트', lead:'게임 & 인터랙티브 AI, 후각 AI, 응용 AI 프로젝트.' },
    people: {
      h1:'구성원',
      lead:'연구책임자, 박사·석사 과정, 연구 인턴.',
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
      labTitle:'AI & Applications Lab',
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
    floatingBar: { text:'AI & Applications Lab 탐색', cta:'합류하기' },
    footer: {
      labDesc:'명지대학교 융합소프트웨어학부. 게임 & 인터랙티브 AI, 후각 AI, 응용 AI 분야의 시스템을 연구하고 개발합니다.',
      research:'연구', resources:'자료', contact:'연락처', address:'명지대학교, 서울, 대한민국',
      links: { gameAI:'게임 & 인터랙티브 AI', olfactoryAI:'후각 AI', appliedAI:'응용 AI', publications:'논문', gallery:'갤러리', join:'지원 안내', contact:'연락처' }
    },
    cards: { viewProject:'프로젝트 보기', exploreArea:'분야 탐색', profile:'프로필', details:'자세히 보기', backPub:'논문 목록으로', backGallery:'갤러리로', contactUs:'연락하기', viewGallery:'갤러리 보기', overview:'개요', projectsInArea:'이 분야의 프로젝트', researchGoals:'연구 목표', expectedOutputs:'예상 산출물', activityNote:'활동 노트', activityNoteText:'이 갤러리 페이지는 연구실 활동 로그입니다. 실제 사진으로 교체하고 날짜, 참여자, 장소, 노트를 추가하세요.', focus:'연구 관심사', bio:'소개', role:'역할', contactVia:'PI를 통해 연락', related:'관련', area:'분야', type:'유형', status:'상태', summary:'요약', researchContext:'연구 맥락', researchContextText:'이 항목은 연구실 응용 AI 포트폴리오의 일부입니다.', researchArea:'연구 분야', allProjects:'전체 프로젝트', collaborate:'협력하기', notFound:'페이지를 찾을 수 없습니다', notFoundLead:'요청하신 페이지가 존재하지 않습니다.', goHome:'홈으로', education:'학력', experience:'경력', selectedPubs:'주요 논문', books:'저서', invitedTalks:'초청 강연', honors:'수상 경력' }
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
      "theme": "dark",
      "tags": [
        "agent",
        "game rating",
        "multimodal"
      ],
      "title": {
        "en": "Game & Interactive AI",
        "ko": "게임 & 인터랙티브 AI"
      },
      "short": {
        "en": "Agents that play, inspect, and evaluate interactive content, plus game data analysis.",
        "ko": "인터랙티브 콘텐츠를 플레이·검사·평가하는 AI 에이전트와 게임 데이터 분석."
      },
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
      },
      "image": "assets/img-1782179804796-1jtwbfr3.jpg"
    },
    {
      "slug": "olfactory-ai",
      "theme": "light",
      "tags": [
        "text-to-scent",
        "perception",
        "scent speaker"
      ],
      "title": {
        "en": "Olfactory AI",
        "ko": "후각 AI"
      },
      "short": {
        "en": "AI systems that generate, evaluate, and physically render scents.",
        "ko": "향기를 생성하고 평가하고 물리적으로 렌더링하는 AI 시스템."
      },
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
          "이 연구는 텍스트-향기 생성, 향기 지각 연구, 구조화 출력 안전성, 향기 렌더링 디바이스를 포괄합니다."
        ]
      },
      "image": "assets/img-1782255785391-1bci4vjf.jpg"
    },
    {
      "slug": "applied-ai",
      "theme": "dark",
      "tags": [
        "biometrics",
        "standards",
        "bias & evaluation",
        "XAI"
      ],
      "title": {
        "en": "Applied AI",
        "ko": "응용 AI"
      },
      "short": {
        "en": "Biometric recognition, AI standards for digital content, and trustworthy evaluation of bias and fairness.",
        "ko": "생체인식, 디지털 콘텐츠를 위한 AI 표준, 그리고 편향·공정성에 대한 신뢰성 평가."
      },
      "status": {
        "en": "Applied sensing, standards & evaluation program",
        "ko": "응용 감지·표준·평가 프로그램"
      },
      "body": {
        "en": [
          "We develop compact and explainable models for biometric signals — palm-vein, face, and related modalities — emphasizing lightweight deployability and robustness under real-world constraints.",
          "We also work on AI standards for digital content, including standard technology for detecting generative-AI edited regions and retrieving illegal content, and on trustworthy evaluation — measuring bias, fairness, and failure modes of AI and language models."
        ],
        "ko": [
          "손바닥 정맥, 얼굴 등 생체 신호를 위한 경량·설명 가능 모델을 개발하며, 실제 환경에서의 경량 배포와 강건성을 중시합니다.",
          "또한 생성형 AI 수정영역 탐지 및 불법 콘텐츠 검색 표준 기술 등 디지털 콘텐츠를 위한 AI 표준 연구와, AI 및 언어모델의 편향·공정성·실패 사례를 측정하는 신뢰성 평가 연구를 수행합니다."
        ]
      },
      "image": "assets/img-1782256051514-ngfzte5f.jpg"
    }
  ],
  "projects": [
    {
      "slug": "game-rating-agent",
      "area": "game-ai",
      "period": "2026.04.01-2030.03.31",
      "stageColor": "green",
      "title": {
        "en": "게임물 등급분류 및 사후관리 효율화를 위한 AI 기반의 게임등급분류 기술 개발",
        "ko": "게임물 등급분류 및 사후관리 효율화를 위한 AI 기반의 게임등급분류 기술 개발"
      },
      "type": {
        "en": "문화체육관광부 CT R&D 과제",
        "ko": "문화체육관광부 CT R&D 과제"
      },
      "stage": {
        "en": "진행 중 (공동기관 연구책임자)",
        "ko": "진행 중 (공동기관 연구책임자)"
      },
      "desc": {
        "en": "게임 플레이 영상과 사람처럼 플레이 하는 AI 에이전트를 통한 XAI 기반의 피드백 순환 등급분류 시스템 개발",
        "ko": "게임 플레이 영상과 사람처럼 플레이 하는 AI 에이전트를 통한 XAI 기반의 피드백 순환 등급분류 시스템 개발"
      },
      "image": "assets/img-1782258599467-efp1ocbw.jpg"
    },
    {
      "slug": "description-to-recipe",
      "area": "olfactory-ai",
      "period": "2026.03.01-2026.08.31",
      "stageColor": "green",
      "title": {
        "en": "제약 환경에서 식향 및 향수 향에 안정적으로 동작하는 D2R(Description to Recipe) API 엔진 개발",
        "ko": "제약 환경에서 식향 및 향수 향에 안정적으로 동작하는 D2R(Description to Recipe) API 엔진 개발"
      },
      "type": {
        "en": "기업 연구과제",
        "ko": "기업 연구과제"
      },
      "stage": {
        "en": "진행 중 (연구책임자)",
        "ko": "진행 중 (연구책임자)"
      },
      "desc": {
        "en": "제약 환경에서 식향 및 향수 향에 안정적으로 동작하는 D2R(Description to Recipe) API 엔진 개발",
        "ko": "제약 환경에서 식향 및 향수 향에 안정적으로 동작하는 D2R(Description to Recipe) API 엔진 개발"
      },
      "image": "assets/img-1783071551222-mbseuq0n.jpg"
    },
    {
      "slug": "text-to-scent-perception",
      "area": "olfactory-ai",
      "period": "2025.09.01-2026.08.31",
      "stageColor": "green",
      "title": {
        "en": "텍스트 기반 향기 생성 기술 개발을 위한 향수 노트 예측 연구",
        "ko": "텍스트 기반 향기 생성 기술 개발을 위한 향수 노트 예측 연구"
      },
      "type": {
        "en": "우수신진연구과제 (씨앗)",
        "ko": "우수신진연구과제 (씨앗)"
      },
      "stage": {
        "en": "진행 중 (연구책임자)",
        "ko": "진행 중 (연구책임자)"
      },
      "desc": {
        "en": "텍스트 기반 향기 생성 기술 개발을 위한 향수 노트 예측 연구",
        "ko": "텍스트 기반 향기 생성 기술 개발을 위한 향수 노트 예측 연구"
      },
      "image": "assets/img-1782440308254-7f4b5xer.jpg"
    },
    {
      "slug": "generative-ai-deepfake",
      "area": "applied-ai",
      "period": "2026.04.01-20",
      "stageColor": "green",
      "title": {
        "en": "생성형 AI 수정영역 탐지 및 불법 콘텐츠 검색 표준 기술 개발",
        "ko": "생성형 AI 수정영역 탐지 및 불법 콘텐츠 검색 표준 기술 개발"
      },
      "type": {
        "en": "국가표준기술력향상사업",
        "ko": "국가표준기술력향상사업"
      },
      "stage": {
        "en": "진행 중 (참여연구자)",
        "ko": "진행 중 (참여연구자)"
      },
      "desc": {
        "en": "생성형 AI 수정영역 탐지 및 불법 콘텐츠 검색 표준 기술 개발",
        "ko": "생성형 AI 수정영역 탐지 및 불법 콘텐츠 검색 표준 기술 개발"
      },
      "image": "assets/img-1782440185042-cagldwp1.jpg"
    },
    {
      "slug": "battery-image-processing",
      "area": "applied-ai",
      "period": "2026.04.01-2026.06.30",
      "stageColor": "green",
      "title": {
        "en": "비파괴 센서 기반 배터리 외관·내부 통합 이기종 데이터 레이크 솔루션 개발 및 K-NPU Edge AI 검사장비 개발",
        "ko": "비파괴 센서 기반 배터리 외관·내부 통합 이기종 데이터 레이크 솔루션 개발 및 K-NPU Edge AI 검사장비 개발"
      },
      "type": {
        "en": "연구산업육성사업",
        "ko": "연구산업육성사업"
      },
      "stage": {
        "en": "진행 중 (참여연구자)",
        "ko": "진행 중 (참여연구자)"
      },
      "desc": {
        "en": "비파괴 센서 기반 배터리 외관·내부 통합 이기종 데이터 레이크 솔루션 개발 및 K-NPU Edge AI 검사장비 개발",
        "ko": "비파괴 센서 기반 배터리 외관·내부 통합 이기종 데이터 레이크 솔루션 개발 및 K-NPU Edge AI 검사장비 개발"
      },
      "image": "assets/img-1782439858741-occv6bof.jpg"
    },
    {
      "slug": "palm-vein",
      "area": "applied-ai",
      "period": "2026.01.01-2026.06.30",
      "stageColor": "red",
      "title": {
        "en": "근적외선 기반 비접촉 손바닥 정맥 인식을 위한 경량 알고리즘 개발 및 데모 구현",
        "ko": "근적외선 기반 비접촉 손바닥 정맥 인식을 위한 경량 알고리즘 개발 및 데모 구현"
      },
      "type": {
        "en": "기업 연구과제",
        "ko": "기업 연구과제"
      },
      "stage": {
        "en": "종료 (연구책임자)",
        "ko": "종료 (연구책임자)"
      },
      "desc": {
        "en": "손바닥 정맥 인식 알고리즘 개발",
        "ko": "손바닥 정맥 인식 알고리즘 개발"
      },
      "image": "assets/img-1783071542792-mjspz5o1.jpg"
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
      "image": "assets/profile.jpg",
      "email": "harrykim@mju.ac.kr",
      "cv": {
        "education": [
          "B.S. in Electrical and Electronic Engineering, Yonsei University, South Korea",
          "Ph.D. in Electrical and Electronic Engineering, Yonsei University, South Korea<br><span class=\"cv-sub\">Thesis: \"Line Features Projection for Face Photo-Sketch and Finger-Knuckle-Print Recognition\" · Advisor: Kar-Ann Toh</span>"
        ],
        "experience": [
          "Assistant Professor, Department of Convergence Software, Myongji University (Present)",
          "Manager, Data Science Team, SK Inc C&C"
        ],
        "selectedPubs": [
          "Kim, J., Lee, W., & Park, J. (2025). Structured Summarization of League of Legends Match Data Optimized for Large Language Model Input. Applied Sciences.",
          "Kim, J., Oh, K., & Oh, B. S. (2024). An NLP-Based Perfume Note Estimation Based on Descriptive Sentences. Applied Sciences.",
          "Kim J., Lin Z., Kim D., & Toh K. A. (2023). Face Photo-sketch Recognition based on Multi-Directional Line Features Projection. Neural Computing and Applications.",
          "Kim J., Lee H., Im S., Lee S. A., Kim D., & Toh K. A. (2021). Machine learning-based leaky momentum prediction of plasmonic random nanosubstrate. Optics Express.",
          "Jung J., Kim J., & Toh K. A. (2019). Transfer learning of Wi-Fi handwritten signature signals for identity verification based on the kernel and the range space projection. In IEEE International Conference on Image Processing."
        ],
        "books": [
          "Kim J. (2025). 아는 만큼 보이는 생성형 AI. 길벗, Seoul, Korea. ISBN: 979‑11‑407‑1507‑7."
        ],
        "invitedTalks": [
          "\"Expanding Multimedia to Smell: Manufacturable Text-to-Scent Generation for Multisensory Holodecks\", Holodecks Conference, University of Southern California (USC) (2026)",
          "\"아는 만큼 보이는 생성형 AI (Generative AI)\", Invited Lecture, 카카오모빌리티, 판교, 경기도, South Korea (2025)",
          "\"AI 창작 워크숍 (AI Creativity Workshop)\", Invited Lecture, K-ICT Big Data Center, Online (2025)",
          "\"AI를 활용한 영입구성원의 SK 적응 방안 (AI-driven Onboarding for SK's New Employees)\", SK Academy for Experienced Hires, SK Inc., Incheon, South Korea (2025)",
          "\"다양한 생성형 AI 도구 활용 (Leveraging Generative AI Tools)\", SK Academy for New Hires, SK Inc., Yongin, South Korea (2025)",
          "\"AI를 활용한 프로젝트 매니지먼트 (AI-driven Project Management)\", Invited Lecture, SK Innovation, Jongro, Seoul, South Korea (2025)",
          "\"AI 리터러시 특강 (AI-Literacy)\", Invited Lecture, SK Academy for New Hires, SK, Incheon, South Korea (2025)",
          "\"데이터 분석 특강 (Special Lecture on Data Analysis)\", Invited Talk, Sunchon National University, Suncheon, South Korea (2025)",
          "\"클라우드 기반의 가상화 시스템 (Cloud-based Virtualization Systems)\", Invited Lecture, Samsung Display, Online (2025)",
          "\"공학 연구자를 위한 인공지능과 머신러닝 이해 (Understanding Artificial Intelligence and Machine Learning for Engineering Researchers)\", Invited Lecture, 한국화학공학회, 서귀포, 제주도, South Korea (2025)",
          "\"제조 혁신을 위한 생성형 AI 기술의 개요와 활용 사례 (Overview and Applications of Generative AI Technologies for Manufacturing Innovation)\", Invited Lecture, 한국화학공학회, 서귀포, 제주도, South Korea (2025)",
          "\"우리의 생활을 바꾸는 생성형 인공지능 이야기 (The Era of Generative AI)\", Invited Lecture, 시흥시노인종합복지관, 시흥시, 경기도, South Korea (2025)",
          "\"멀티모달 생성형 AI 기술의 동향 (Trends in Multimodal Generative AI Technologies)\", Invited Lecture, K-ICT Big Data Center, Online (2024)",
          "\"생성형 인공지능의 시대: 교양처럼 이해하는 생성형 인공지능 (The Era of Generative AI: Understanding Generative AI as General Knowledge)\", Invited Lecture for Government-affiliated Organizations, Seongnam, South Korea (2024)"
        ],
        "honors": [
          "1st Prize Winner, LCL Open Learning Lounge, with the project 'Research on Data-flywheel-centered MLOps Pipeline for operating generative AI-based services', SK Inc C&C (2023)",
          "Quantum Excellence, Qiskit Global Summer School 2023, IBM (2023)",
          "1st Prize Winner, AI Competition on Classification of Consultation Types in the Customer Center, mySUNI (2023)",
          "4th Prize Winner, Dacon AI Competition on Machine Fault Diagnosis, Dacon Inc. (2023)",
          "Best Paper Award, International Conference on Electronics Information and Communication, IEEE (2023)",
          "Best Paper Award, 3rd International Conference on Advances in Image Processing, ACM (2019)"
        ]
      }
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
    },
    {
      "slug": "Yuchul-Lee",
      "category": "ms",
      "name": {
        "en": "Yuchul Lee",
        "ko": "이유철"
      },
      "role": {
        "en": "MS Candidate (2025.03~ / Co-supervision)",
        "ko": "MS Candidate (2025.03~ / Co-supervision)"
      },
      "focus": {
        "en": "",
        "ko": ""
      },
      "bio": {
        "en": "",
        "ko": ""
      },
      "image": "assets/img-1782952534990-g3u98er8.jpg"
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
      "slug": "sensors2026-nerf-radar",
      "cat": "intl-journal",
      "area": "applied-ai",
      "url": "https://ieeexplore.ieee.org/xpl/ReseArchPubType.jsp?punumber=7361",
      "title": "Signal Synthesis for IR-UWB Radar in Angle-Representation Fields based NeRF Architectures",
      "authors": "Park, J., Kim, J., & Kim, T.",
      "venue": "IEEE Sensors Journal",
      "year": "2026",
      "note": "SCIE, 2024 IF: 4.3"
    },
    {
      "slug": "koba2026-thermal",
      "cat": "domestic-conference",
      "area": "applied-ai",
      "url": "",
      "title": "생성형 AI 기반 컬러화와 4채널 ResNet18 앙상블을 이용한 열화상 객체 인식 성능 향상",
      "authors": "조민선, 김주영",
      "venue": "한국방송·미디어공학회 하계학술대회",
      "year": "2026"
    },
    {
      "slug": "koba2026-rescue",
      "cat": "domestic-conference",
      "area": "applied-ai",
      "url": "",
      "title": "Pose-Visibility 계층 구조와 Poincaré Prototype 정규화를 이용한 산림 위급 조난자 탐지",
      "authors": "이상훈, 김주영",
      "venue": "한국방송·미디어공학회 하계학술대회",
      "year": "2026"
    },
    {
      "slug": "koba2026-inverted",
      "cat": "domestic-conference",
      "area": "applied-ai",
      "url": "",
      "title": "픽셀 반전 기반 Inverted Grid를 이용한 비전-언어모델의 공간 위치 추정 개선",
      "authors": "이승주, 김주영",
      "venue": "한국방송·미디어공학회 하계학술대회",
      "year": "2026"
    },
    {
      "slug": "chi-smell-story",
      "cat": "intl-conference",
      "area": "olfactory-ai",
      "year": "2027",
      "title": "Can You Smell the Story? Which Textual Meanings Are Perceptible Through Computationally Generated Scent",
      "authors": "Kim, J. et al.",
      "venue": "-",
      "url": "",
      "note": "",
      "patentNumber": ""
    },
    {
      "slug": "chi-perception",
      "cat": "intl-conference",
      "area": "olfactory-ai",
      "year": "2027",
      "title": "From Recipe to Cartridge: Designing Compact Olfactory Displays for Text-Generated Scents",
      "authors": "Kim, J. et al.",
      "venue": "-",
      "url": "",
      "note": "",
      "patentNumber": ""
    },
    {
      "slug": "entcom-text-to-scent",
      "cat": "intl-journal",
      "area": "olfactory-ai",
      "year": "2026",
      "title": "Manufacturable Text-to-Scent Generation for Olfactory Entertainment Media",
      "authors": "Kim, J.",
      "venue": "Entertainment Computing",
      "url": "",
      "note": "under revision",
      "patentNumber": ""
    },
    {
      "slug": "scentbias-paper",
      "cat": "intl-conference",
      "area": "olfactory-ai",
      "year": "2026",
      "title": "Smells Like Bias: Evaluating Demographic Differentiation and Stereotype-Related Failures in LLM-Based Text-to-Scent Generation",
      "authors": "Kim, J.",
      "venue": "-",
      "url": "",
      "note": "under review",
      "patentNumber": ""
    },
    {
      "slug": "bbq-paper",
      "cat": "intl-conference",
      "area": "applied-ai",
      "year": "2026",
      "title": "When Bias Scores Reflect Abstention Failure: Disentangling Stereotype Direction from Refusal to Abstain in BBQ",
      "authors": "Kim, Jeemin & Kim, J.",
      "venue": "-",
      "url": "",
      "note": "under review",
      "patentNumber": ""
    },
    {
      "slug": "face-sketch-xai",
      "cat": "intl-journal",
      "area": "applied-ai",
      "url": "",
      "title": "Explainable Cross-Modal Face Photo-Sketch Similarity with Region-Wise Attribution and Multi-Extractor Fusion",
      "authors": "Kim, G. & Kim, J.",
      "venue": "Scientific Reports",
      "year": "2026",
      "note": "under revision"
    },
    {
      "slug": "perfume-note-prediction",
      "cat": "intl-journal",
      "area": "olfactory-ai",
      "url": "",
      "title": "Multi-context Perfume Note Prediction with Review-scaled Labels and Note–Accord Co-occurrence Gating",
      "authors": "Kim, J., Oh, K., & Oh, B. S.",
      "venue": "Engineering Applications of Artificial Intelligence",
      "year": "2026",
      "note": "under revision"
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

/* ── Single source of truth: script.js ───────────────────
   The admin panel writes directly to script.js (saveToScriptJs) and reads it
   back via loadDataFromScriptJs(), so the live site always renders the data
   defined above. A stale localStorage cache from earlier admin sessions is
   cleared here to avoid overriding fresh script.js edits. */
(function() {
  try { localStorage.removeItem('aialab-admin-data'); } catch(e) {}
})();

/* ── Utilities ───────────────────────────────────────────── */
const $ = s => document.querySelector(s);
const app = document.querySelector('#app');
function link(path, text, cls = '') { return `<a class="${cls}" href="#/${path}">${text}</a>`; }
function cta(path, text) { return link(path, text, 'button-primary'); }
function ghost(path, text) { return link(path, text, 'button-secondary'); }

/* ── Components ──────────────────────────────────────────── */
function researchCard(r) {
  return `<a class="card research-card ${r.theme === 'dark' ? 'dark' : ''}" href="#/projects/${r.slug}">
    <img src="${r.image}" alt=""><span class="meta">${L(r.status)}</span>
    <h3>${L(r.title)}</h3><p>${L(r.short)}</p>
    <span class="text-link">${t('cards.exploreArea')}</span></a>`;
}

function projectCard(p) {
  const stageColor = p.stageColor==='red'?'#d93025':p.stageColor==='green'?'#27ae60':'var(--ink)';
  return `<a class="card" href="#/project/${p.slug}">
    <img src="${p.image}" alt=""><span class="meta">${L(p.type)}${p.period ? ' · ' + p.period : ''}</span>
    <h3>${L(p.title)}</h3><p>${L(p.desc)}</p>
    <span style="font-size:13px;font-weight:600;color:${stageColor}">${L(p.stage)}</span></a>`;
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
      ${p.authors ? `<p style="font-size:14px;color:var(--muted);margin:5px 0 3px"><strong style="color:var(--ink);font-weight:600">${t('publications.authors')}:</strong> ${p.authors.replace(/Kim,\s*J\./g, '<strong style="color:var(--ink);font-weight:700">Kim, J.</strong>').replace(/김주영/g, '<strong style="color:var(--ink);font-weight:700">김주영</strong>')}</p>` : ''}
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
  const logo = `<img src="assets/embl_white.png" alt="EMBL" class="collab-logo">`;
  const logos = logo.repeat(12);
  return `<div class="collab-logos-strip"><div class="collab-marquee">${logos}${logos}</div></div>`;
}

/* ── Pages ───────────────────────────────────────────────── */
function home() {
  return `
    <section class="hero parchment hero-home">
      <canvas id="heroCanvas" class="hero-bg-canvas" aria-hidden="true"></canvas>
      <div class="hero-inner">
        <p class="eyebrow">${t('home.eyebrow')}</p>
        <h1>${t('home.h1')}</h1>
        <p class="lead">${t('home.lead')}</p>
        <div class="cta-row">${cta('projects', t('home.cta1'))}${ghost('join', t('home.cta2'))}</div>
      </div>
    </section>
    ${(() => {
      const activeCount = data.projects.filter(p => {
        if (p.stageColor === 'green') return true;
        if (p.stageColor === 'red') return false;
        return /active|진행|ongoing/i.test(L(p.stage)||'');
      }).length;
      return `<section class="stats-row">
      <div class="stat-item"><span class="stat-num">${activeCount}</span><span class="stat-cap">${t('home.statPillars')}</span></div>
      <div class="stat-item"><span class="stat-num">${data.publications.filter(p => !/under\s*(review|revision|preparation)|in\s*preparation/i.test((p.note||'') + (p.venue||''))).length}</span><span class="stat-cap">${t('home.statPubs')}</span></div>
      <div class="stat-item"><span class="stat-num">${data.people.length}</span><span class="stat-cap">${t('home.statPeople')}</span></div>
    </section>`;
    })()}
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
        <div class="grid">${[...data.gallery].sort((a,b)=>{if(!a.date&&!b.date)return 0;if(!a.date)return 1;if(!b.date)return -1;return b.date.replace(/\./g,'-')>a.date.replace(/\./g,'-')?1:-1;}).slice(0,3).map(galleryCard).join('')}</div>
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
  const sorted = [...data.projects].sort((a, b) => {
    const da = a.period ? a.period.split('-')[0].replace(/\./g,'') : '0';
    const db = b.period ? b.period.split('-')[0].replace(/\./g,'') : '0';
    return db > da ? 1 : -1;
  });
  const items = filter ? sorted.filter(p => p.area === filter) : sorted;
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
    <section class="content split project-split">
      <article class="prose">
        <img src="${p.image}" alt="" style="border-radius:18px;margin-bottom:28px;aspect-ratio:16/9;object-fit:cover;width:100%">
        <div class="cta-row" style="justify-content:flex-start">${cta('contact',t('cards.contactUs'))}${ghost('gallery',t('cards.viewGallery'))}</div>
      </article>
      <aside class="side-panel"><div class="spec-list">
        <div class="spec"><strong>${t('cards.area')}</strong><span>${L(area?.title)||p.area}</span></div>
        <div class="spec"><strong>${t('cards.type')}</strong><span>${L(p.type)}</span></div>
        <div class="spec"><strong>${t('cards.status')}</strong><span style="font-weight:600;color:${p.stageColor==='red'?'#d93025':p.stageColor==='green'?'#27ae60':'var(--ink)'}">${L(p.stage)}</span></div>
        ${p.period ? `<div class="spec"><strong>Period</strong><span>${p.period}</span></div>` : ''}
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
  const pi = bycat('pi'), phd = bycat('phd'), ms = bycat('ms'), interns = bycat('intern');
  const subhead = label => `<h2 class="section-subhead">${label}</h2>`;
  return `
    <section class="section-header"><h1>${t('people.h1')}</h1><p>${t('people.lead')}</p></section>
    <section class="content">
      ${subhead(t('people.categories.pi'))}
      <div class="grid">${pi.map(personCard).join('')}</div>
      ${phd.length ? subhead(t('people.categories.phd')) + `<div class="grid">${phd.map(personCard).join('')}</div>` : ''}
      ${ms.length ? subhead(t('people.categories.ms')) + `<div class="grid">${ms.map(personCard).join('')}</div>` : ''}
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
  const heroAvatar = p.image
    ? `<img class="hero-avatar" src="${p.image}" alt="${L(p.name)}">`
    : `<div class="hero-avatar hero-avatar-init"><span>${(L(p.name)||'G').charAt(0)}</span></div>`;
  const focusText = L(p.focus), bioText = L(p.bio);
  const cvSection = (key, items) => (items && items.length)
    ? `<h2>${t('cards.'+key)}</h2><ul class="cv-list">${items.map(i => `<li>${i}</li>`).join('')}</ul>`
    : '';
  const cv = p.cv ? [
    cvSection('education', p.cv.education),
    cvSection('experience', p.cv.experience),
    cvSection('selectedPubs', p.cv.selectedPubs),
    cvSection('books', p.cv.books),
    cvSection('invitedTalks', p.cv.invitedTalks),
    cvSection('honors', p.cv.honors)
  ].join('') : '';
  return `
    <section class="detail-hero"><div class="wrap">
      <div class="breadcrumb"><a href="#/people">${t('nav.people')}</a> / ${L(p.name)}</div>
      <div class="hero-id">
        ${heroAvatar}
        <div class="hero-id-text"><h1>${L(p.name)}</h1><p>${L(p.role)}</p></div>
      </div>
    </div></section>
    <section class="content split">
      <article class="prose">
        ${focusText ? `<h2>${t('cards.focus')}</h2><p>${focusText}</p>` : ''}
        ${bioText ? `<h2>${t('cards.bio')}</h2><p>${bioText}</p>` : ''}
        ${cv}
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
  const isPending = p => /under\s*(review|revision|preparation)|in\s*preparation/i.test((p.note||'') + (p.venue||''));
  let items = [...data.publications].sort((a, b) => {
    const dy = (parseInt(b.year)||0) - (parseInt(a.year)||0);
    if (dy !== 0) return dy;
    return isPending(b) - isPending(a);
  });
  if (cat && cat !== 'all') items = items.filter(p => p.cat === cat);
  if (area && area !== 'all') items = items.filter(p => p.area === area);

  // Group into year buckets with separators (>=2024 individually, rest "Before 2024")
  const bucketOf = p => { const y = parseInt(p.year)||0; return y >= 2024 ? String(y) : 'before-2024'; };
  let body = '', lastBucket = null;
  items.forEach(p => {
    const b = bucketOf(p);
    if (b !== lastBucket) {
      const label = b === 'before-2024' ? (lang==='ko'?'2024년 이전':'Before 2024') : b;
      body += `<h2 class="pub-year-head">${label}</h2>`;
      lastBucket = b;
    }
    body += pubRow(p);
  });

  return `
    <section class="section-header parchment"><h1>${t('publications.h1')}</h1><p>${t('publications.lead')}</p></section>
    <section class="content narrow">
      <div class="chip-row">
        ${catTabs.map(c => `<button class="chip ${(!cat&&c==='all')||cat===c?'is-active':''}" data-pub="${c}">${t(`publications.tabs.${c}`)}</button>`).join('')}
      </div>
      <div class="chip-row">
        ${areaTabs.map(a => `<button class="chip ${(!area&&a==='all')||area===a?'is-active':''}" data-pub-area="${a}" style="font-size:12px">${a==='all'?t('publications.tabs.all'):t(`subNav.${a==='game-ai'?'gameAI':a==='olfactory-ai'?'olfactoryAI':'appliedAI'}`)}</button>`).join('')}
      </div>
      ${body}
    </section>`;
}


function gallery(cat) {
  const cats = ['all', ...new Set(data.gallery.map(g => g.cat))];
  const sorted = [...data.gallery].sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    return b.date.replace(/\./g,'-') > a.date.replace(/\./g,'-') ? 1 : -1;
  });
  const items = cat ? sorted.filter(g => g.cat === cat) : sorted;
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
  requestAnimationFrame(initHeroCanvas);
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

/* ── Hero canvas: full-bleed flowing neural constellation ──── */
let _heroRAF = null, _heroResize = null;
function initHeroCanvas() {
  // Tear down any previous instance (SPA re-renders reuse this)
  if (_heroRAF) { cancelAnimationFrame(_heroRAF); _heroRAF = null; }
  if (_heroResize) { window.removeEventListener('resize', _heroResize); _heroResize = null; }

  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const wrap = canvas.parentElement; // the .hero-home section
  const ctx = canvas.getContext('2d');
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const DPR = Math.min(window.devicePixelRatio || 1, 2);
  const MOUSE_R = 160;
  let W = 0, H = 0, particles = [], builtW = 0;
  let flow = 0.14, linkD = 128, lineW = 1;      // per-size tuning (set in spawn)
  const mouse = { x: -9999, y: -9999, active: false };

  function measure() {
    const r = wrap.getBoundingClientRect();
    W = r.width; H = r.height;
    if (!W || !H) return false;
    canvas.width = W * DPR; canvas.height = H * DPR;
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    return true;
  }
  function spawn() {
    const small = W < 640;                        // phones: bigger, faster, denser links
    flow = small ? 0.34 : 0.14;
    linkD = small ? 150 : 128;
    lineW = small ? 1.4 : 1;
    const sizeMul = small ? 1.9 : 1;
    const vmax = small ? 0.55 : 0.22;
    const count = Math.max(22, Math.min(small ? 54 : 104, Math.round((W * H) / (small ? 11000 : 12500))));
    particles = [];
    for (let i = 0; i < count; i++) particles.push({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * vmax, vy: (Math.random() - .5) * vmax,
      r: (Math.random() * 1.5 + 1.2) * sizeMul, phase: Math.random() * Math.PI * 2
    });
    builtW = W;
  }
  function build() { if (measure()) spawn(); }
  build();

  // Rebuild particles ONLY on a real width change. Mobile browsers fire
  // resize constantly while scrolling (URL bar shows/hides → height changes);
  // respawning there teleported every particle. Now height-only changes just
  // resize the canvas and keep the existing particles in place.
  let _rt = null;
  _heroResize = () => {
    clearTimeout(_rt);
    _rt = setTimeout(() => { if (measure() && Math.abs(W - builtW) > 40) spawn(); }, 150);
  };
  window.addEventListener('resize', _heroResize);

  // Only a real mouse (not touch) repels particles — otherwise a finger swipe
  // to scroll the page would scatter them. On phones it just flows on its own.
  wrap.addEventListener('pointermove', e => {
    if (e.pointerType && e.pointerType !== 'mouse') return;
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; mouse.active = true;
  });
  wrap.addEventListener('pointerleave', () => { mouse.active = false; mouse.x = mouse.y = -9999; });

  function draw(t) {
    ctx.clearRect(0, 0, W, H);
    const s = t * 0.001;
    for (const p of particles) {
      p.x += p.vx + Math.cos(s * 0.3 + p.phase) * flow;
      p.y += p.vy + Math.sin(s * 0.25 + p.phase) * flow;
      if (mouse.active) {
        const dx = p.x - mouse.x, dy = p.y - mouse.y, d2 = dx * dx + dy * dy;
        if (d2 < MOUSE_R * MOUSE_R && d2 > 0.01) {
          const d = Math.sqrt(d2), f = (MOUSE_R - d) / MOUSE_R * 0.9;
          p.x += dx / d * f; p.y += dy / d * f;
        }
      }
      if (p.x < -24) p.x = W + 24; else if (p.x > W + 24) p.x = -24;
      if (p.y < -24) p.y = H + 24; else if (p.y > H + 24) p.y = -24;
    }
    for (let i = 0; i < particles.length; i++) {
      const a = particles[i];
      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j], dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy;
        if (d2 < linkD * linkD) {
          const o = (1 - Math.sqrt(d2) / linkD) * 0.4;
          ctx.strokeStyle = `rgba(0,102,204,${o})`; ctx.lineWidth = lineW;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    if (mouse.active) {
      for (const p of particles) {
        const dx = p.x - mouse.x, dy = p.y - mouse.y, d2 = dx * dx + dy * dy;
        if (d2 < MOUSE_R * MOUSE_R) {
          const o = (1 - Math.sqrt(d2) / MOUSE_R) * 0.5;
          ctx.strokeStyle = `rgba(0,113,227,${o})`; ctx.lineWidth = lineW;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
      }
    }
    for (const p of particles) {
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(29,29,31,0.5)'; ctx.fill();
    }
  }

  if (reduce) {
    draw(0); // single static frame, no animation
  } else {
    const loop = t => { draw(t); _heroRAF = requestAnimationFrame(loop); };
    _heroRAF = requestAnimationFrame(loop);
  }
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
