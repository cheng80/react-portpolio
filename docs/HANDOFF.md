# 날씨 - 부엉이 편지 React 클론 핸드오프

작성일: 2026-08-19

## 1. 작업 대상

- 원본 사이트: <https://union.pryzm.gg/malgeum/#weather>
- React 프로젝트: `/Users/cheng80/Desktop/Sesac_Works/Project/react-portpolio`
- Pen 디자인 파일: [`malgeum-reference.pen`](../malgeum-reference.pen)
- React 구조 문서: [`REACT_PROJECT_STRUCTURE.md`](./REACT_PROJECT_STRUCTURE.md)
- CSS 단계별 비교: [`CSS_VERSION_GUIDE.md`](./CSS_VERSION_GUIDE.md)
- 개발 환경: React 19 + Vite 8 + CSS Modules

## 2. 현재까지 완료한 작업 체크리스트

### 프로젝트 구조

- [x] 원본 HTML의 `nav → header → main → footer` 순서를 React 컴포넌트에 대응했다.
- [x] Main 내부를 Weather, Letter, Screens, Promise, Download 섹션으로 분리했다.
- [x] 컴포넌트별 JSX와 CSS Module을 같은 폴더에 배치했다.
- [x] 페이지 컴포넌트 폴더를 HTML 출력 순서대로 `00_`~`08_`, 공통 컴포넌트를 `90_`~`91_`로 구분했다.
- [x] 반복 콘텐츠를 [`siteData.js`](../src/data/siteData.js)의 배열로 관리했다.
- [x] `SectionTitle`, `StoreButton` 공통 컴포넌트를 적용했다.
- [x] 주요 JSX와 CSS에 영역별 한글 주석을 작성했다.
- [x] 모든 Flex 배치에 `flex-direction`을 명시했다.

### 이미지와 Pen 디자인

- [x] 모든 이미지 자산을 `public/images`로 통합했다.
- [x] JSX 이미지 경로를 `/images/파일명`으로 통일했다.
- [x] 프로젝트 루트의 중복 `images` 폴더를 제거했다.
- [x] Pen 디자인도 `public/images` 자산을 참조하도록 정리했다.
- [x] 원본 웹을 편집 가능한 Pen 레이어로 가져와 `1440px` 데스크톱 캔버스를 정리했다.
- [x] Pen 전체 캔버스와 WebP 이미지 렌더링을 확인했다.

### 데스크톱 화면 구현

- [x] 원본 사이트의 개발자 도구를 기준으로 `1440 × 1200` 계산 스타일을 확인했다.
- [x] Nav, Header, 전체 섹션과 Footer의 너비·높이·여백·Grid·Flex 값을 반영했다.
- [x] 원본 문구, 앱 화면 이미지, 스토어 링크와 Footer 링크를 반영했다.
- [x] 색상, 배경, 테두리, 그림자, hover, 가상 요소와 변형을 적용했다.
- [x] 원본과 React의 주요 박스 치수 및 전체 페이지 높이 `5744px`가 일치하는지 확인했다.

### CSS 학습 버전

- [x] 현재 완성 스타일을 `*_ver02.module.css`로 분리했다.
- [x] 같은 박스 치수에 검은 실선만 표시하는 `*_ver01.module.css`를 작성했다.
- [x] [`styleVersion.js`](../src/styleVersion.js)의 값 하나로 전체 컴포넌트의 `ver01`과 `ver02`를 교체할 수 있게 했다.
- [x] 기본 실행 버전을 `ver02`로 설정했다.
- [x] [`CSS_VERSION_GUIDE.md`](./CSS_VERSION_GUIDE.md)에 버전 차이와 교체 방법을 기록했다.

## 3. HTML과 React의 대응 구조

```text
body
└── #root
    └── App
        ├── Nav                 → <nav>
        ├── Header              → <header>
        ├── Main                → <main>
        │   ├── WeatherSection  → <section id="weather">
        │   ├── LetterSection   → <section id="letters">
        │   ├── ScreensSection  → <section id="screens">
        │   ├── PromiseSection  → <section id="promise">
        │   └── DownloadSection → <section id="download">
        └── Footer              → <footer>
```

`HomePage` 같은 별도 페이지 컴포넌트는 만들지 않았다. 원본 HTML과 이름을 바로 연결할 수 있도록 [`Main`](../src/components/02_Main/Main.jsx)이 `<main>`을 직접 반환한다.

## 4. 현재 프로젝트 구조

```text
react-portpolio/
├── docs/
│   ├── CSS_VERSION_GUIDE.md
│   ├── HANDOFF.md
│   └── REACT_PROJECT_STRUCTURE.md
├── public/
│   └── images/
│       ├── app-icon.png
│       ├── apple-touch-icon.png
│       ├── favicon-32.png
│       ├── favicon.svg
│       ├── icons.svg
│       ├── og.png
│       ├── owl-01-home.webp
│       ├── owl-02-office.webp
│       ├── owl-03-letter.webp
│       ├── owl-04-brief.webp
│       ├── owl-05-chat.webp
│       └── owl-06-personality.webp
├── src/
│   ├── components/
│   │   ├── 00_Nav/
│   │   │   ├── Nav.jsx
│   │   │   ├── Nav_ver01.module.css
│   │   │   └── Nav_ver02.module.css
│   │   ├── 01_Header/
│   │   │   ├── Header.jsx
│   │   │   ├── Header_ver01.module.css
│   │   │   └── Header_ver02.module.css
│   │   ├── 02_Main/
│   │   │   ├── Main.jsx
│   │   │   ├── Main_ver01.module.css
│   │   │   └── Main_ver02.module.css
│   │   ├── 03_WeatherSection/
│   │   │   ├── WeatherSection.jsx
│   │   │   ├── WeatherSection_ver01.module.css
│   │   │   └── WeatherSection_ver02.module.css
│   │   ├── 04_LetterSection/
│   │   │   ├── LetterSection.jsx
│   │   │   ├── LetterSection_ver01.module.css
│   │   │   └── LetterSection_ver02.module.css
│   │   ├── 05_ScreensSection/
│   │   │   ├── ScreensSection.jsx
│   │   │   ├── ScreensSection_ver01.module.css
│   │   │   └── ScreensSection_ver02.module.css
│   │   ├── 06_PromiseSection/
│   │   │   ├── PromiseSection.jsx
│   │   │   ├── PromiseSection_ver01.module.css
│   │   │   └── PromiseSection_ver02.module.css
│   │   ├── 07_DownloadSection/
│   │   │   ├── DownloadSection.jsx
│   │   │   ├── DownloadSection_ver01.module.css
│   │   │   └── DownloadSection_ver02.module.css
│   │   ├── 08_Footer/
│   │   │   ├── Footer.jsx
│   │   │   ├── Footer_ver01.module.css
│   │   │   └── Footer_ver02.module.css
│   │   ├── 90_SectionTitle/
│   │   │   ├── SectionTitle.jsx
│   │   │   ├── SectionTitle_ver01.module.css
│   │   │   └── SectionTitle_ver02.module.css
│   │   └── 91_StoreButton/
│   │       ├── StoreButton.jsx
│   │       ├── StoreButton_ver01.module.css
│   │       └── StoreButton_ver02.module.css
│   ├── data/
│   │   └── siteData.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── styleVersion.js
├── malgeum-reference.pen
├── index.html
├── package.json
└── vite.config.js
```

## 5. 구현 기준과 주요 결정

### 이미지

- 모든 이미지 파일은 `public/images`에 모았다.
- JSX에서는 `/images/파일명`으로 사용한다.
- 앱 화면 여섯 장은 [`siteData.js`](../src/data/siteData.js)에서 배열로 관리한다.
- 대표 앱 화면과 앱 화면 목록은 JSX의 `<img>`로 배치했다.

### CSS

- 전역 색상 변수와 기본 초기화는 [`src/index.css`](../src/index.css)에 있다.
- 컴포넌트별 스타일은 각 폴더의 `*_ver01.module.css`, `*_ver02.module.css`에 있다.
- [`src/App.css`](../src/App.css)는 현재 빈 파일이며 import하지 않는다.
- 전체 CSS 버전은 [`src/styleVersion.js`](../src/styleVersion.js)에서 선택하며 현재 기본값은 `ver02`다.
- 미디어 쿼리는 아직 없다.
- 섹션 콘텐츠는 주로 `width: 100%`와 `max-width: 1120px`를 함께 사용한다.
- 버전 전환 방법은 [`CSS_VERSION_GUIDE.md`](./CSS_VERSION_GUIDE.md)에 정리했다.

### Nav

- `position: fixed`와 `inset: 0 0 auto`로 화면 위에 고정한다.
- `inset: 0 0 auto`는 `top: 0; right: 0; bottom: auto; left: 0;`의 축약이다.
- 브랜드와 링크 묶음이 양쪽에 붙는 이유는 `.nav`의 `justify-content: space-between`이다.
- 다른 콘텐츠보다 위에 보이도록 `z-index: 100`을 사용한다.

### Header Hero

- 대표 앱 화면은 `.card` 안의 `/images/owl-01-home.webp` 이미지다.
- `오늘은 우산 필수! ☂️`와 `부엉이가 알려드려요 🦉`는 JSX의 실제 `.sticker` 요소다.
- 뒤쪽 흰색·남색 테두리 타원 장식은 `.header::before`, `.header::after`로 만든 가상 요소다.
- `.header`가 `position: relative`이므로 스티커와 가상 요소의 위치 기준이 된다.
- `.inner`와 `.sticker`는 `z-index: 2`로 배경 타원보다 앞에 표시한다.
- `.header`의 `overflow: hidden`으로 바깥으로 밀어낸 타원의 남는 부분을 자른다.

### 재사용 컴포넌트와 데이터

- [`SectionTitle`](../src/components/90_SectionTitle/SectionTitle.jsx): 섹션의 kicker, 제목, 설명을 재사용한다.
- [`StoreButton`](../src/components/91_StoreButton/StoreButton.jsx): Header와 DownloadSection의 앱스토어 버튼을 재사용한다.
- [`siteData.js`](../src/data/siteData.js): 날씨 기능, 편지 기능, 앱 화면, 이용 원칙 카드 데이터를 관리한다.

## 6. Pen 디자인 파일

[`malgeum-reference.pen`](../malgeum-reference.pen)은 원본 웹을 편집 가능한 레이어로 가져와 정리한 Desktop 참고 캔버스다.

- 문서 포맷 버전: `2.17`
- 최상위 프레임: `날씨 - 부엉이 편지 · Desktop 1440`
- 프레임 크기: `1440 × 5745`
- 구조: `Nav → Header → Main → Footer`
- 총 노드 수: 208개
- 이미지 참조 수: 10개
- 실제 이미지 파일 수: 7개
- 이미지 경로: `.pen` 파일 기준 `public/images/...`
- React와 Pen이 같은 `public/images` 자산을 사용하며 프로젝트 루트에 별도 `images` 폴더를 두지 않는다.
- Hero의 대표 이미지, 두 스티커, 뒤쪽 타원 장식을 각각 별도 레이어로 구성했다.
- Pen 앱에서 전체 페이지와 WebP 이미지가 렌더링되는 것을 확인했다.

이 파일은 단일 스크린샷이 아니라 텍스트, 카드, 이미지와 섹션을 각각 수정할 수 있는 레이어 구조다.

## 7. 검증 체크리스트

- [x] `npm run lint` 통과
- [x] `ver01` 프로덕션 빌드 통과
- [x] `ver02` 프로덕션 빌드 통과
- [x] `git diff --check` 통과
- [x] `1440 × 1200`에서 원본과 주요 박스 치수 비교
- [x] 전체 페이지 높이 `5744px` 일치 확인
- [x] `ver01`과 `ver02`의 섹션·카드 박스 치수 일치 확인
- [x] Pen 최상위 프레임, 노드 수, 이미지 참조와 실제 이미지 경로 확인
- [x] Pen 전체 캔버스와 이미지 렌더링 확인

## 8. 앞으로 진행할 반응형 작업 체크리스트

### 공통 기준

- [ ] 확인할 기준 폭을 `1024px`, `768px`, `390px`로 확정한다.
- [ ] `ver02`에서 반응형 레이아웃을 먼저 완성한다.
- [ ] 같은 미디어 쿼리와 박스 모델을 `ver01`에 반영한다.
- [ ] 모든 기준 폭에서 가로 스크롤과 콘텐츠 잘림이 없는지 확인한다.
- [ ] 제목 크기, 본문 크기, 섹션 좌우·상하 여백을 화면 폭에 맞게 줄인다.

### 컴포넌트별 작업

- [ ] Nav 링크와 다운로드 버튼이 좁은 폭에서도 겹치거나 잘리지 않게 정리한다.
- [ ] Header의 2열 구성을 1열로 전환하고 문구와 대표 이미지를 자연스럽게 배치한다.
- [ ] Header 스티커와 가상 요소가 화면 밖으로 과도하게 잘리지 않게 조정한다.
- [ ] Weather 카드 Grid를 태블릿과 모바일 열 수에 맞게 변경한다.
- [ ] Letter 카드 Grid를 모바일에서 1열로 변경하고 아이콘·본문 간격을 조정한다.
- [ ] Screens 이미지 Grid의 열 수와 이미지 폭을 화면 크기에 맞게 변경한다.
- [ ] Promise 카드 Grid를 좁은 화면에서 읽기 쉬운 열 수로 변경한다.
- [ ] Download의 스토어 버튼이 모바일에서 자연스럽게 줄바꿈되도록 확인한다.
- [ ] Footer 링크의 줄바꿈, 간격과 터치 영역을 확인한다.

### 반응형 검증

- [ ] `1024px`, `768px`, `390px`에서 `ver01` 화면을 캡처하고 박스 배치를 확인한다.
- [ ] 같은 폭에서 `ver02` 화면을 캡처하고 시각 디자인을 확인한다.
- [ ] 반응형 적용 후 `1440 × 1200` 데스크톱 치수가 유지되는지 회귀 확인한다.
- [ ] 키보드 포커스와 터치 환경에서 링크·버튼 사용성을 확인한다.
- [ ] 반응형 작업 완료 후 `npm run lint`, `npm run build`, `git diff --check`를 다시 실행한다.

## 9. 다음 세션 시작 순서

1. 이 문서를 먼저 읽는다.
2. 원본 사이트와 [`malgeum-reference.pen`](../malgeum-reference.pen)을 함께 연다.
3. 프로젝트에서 `npm run dev`를 실행한다.
4. CSS 학습 단계에 따라 [`styleVersion.js`](../src/styleVersion.js)의 값을 `ver01` 또는 `ver02`로 바꾼다.
5. 기본 실행 상태인 `ver02`를 기준으로 반응형 스타일을 추가한다.
6. `ver01`에도 같은 반응형 박스 모델을 반영한다.

## 10. Git 상태 확인

작업을 시작하거나 커밋하기 전에 `git status --short`로 현재 변경사항을 확인한다.
