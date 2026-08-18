# 날씨 - 부엉이 편지 React 클론 핸드오프

작성일: 2026-08-19

## 1. 작업 대상

- 원본 사이트: <https://union.pryzm.gg/malgeum/#weather>
- React 프로젝트: `/Users/cheng80/Desktop/Sesac_Works/Project/react-portpolio`
- Pen 디자인 파일: [`malgeum-reference.pen`](../malgeum-reference.pen)
- React 구조 문서: [`REACT_PROJECT_STRUCTURE.md`](./REACT_PROJECT_STRUCTURE.md)
- 개발 환경: React 19 + Vite 8 + CSS Modules

## 2. 현재 작업 단계

원본 사이트의 세부 디자인을 완성하는 단계가 아니라, React 컴포넌트 구조와 각 영역의 기본 배치를 파악하는 단계다.

Pen 디자인 참고 파일은 원본 웹을 편집 가능한 레이어로 다시 가져온 뒤 `1440px` 데스크톱 기준으로 정리했다. React 구현은 아직 이 Pen 디자인을 기준으로 세부 CSS를 맞추기 전 단계다.

- 원본 HTML의 시맨틱 태그 순서를 React 컴포넌트에 직관적으로 대응했다.
- 각 컴포넌트의 JSX와 CSS Module을 폴더별로 분리했다.
- 배치는 `flex`, 배경색, 배경 이미지, 너비와 높이 위주로 최소 구현했다.
- 필요한 부분에만 원본을 참고한 `border-radius`를 적용했다.
- 주요 JSX와 CSS에 영역별 한글 주석을 작성했다.
- 반응형 미디어 쿼리는 구조 확인을 쉽게 하기 위해 현재 제외했다.
- `display: flex`를 사용하는 곳에는 `flex-direction`을 명시했다.

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

`HomePage` 같은 별도 페이지 컴포넌트는 만들지 않았다. 원본 HTML과 이름을 바로 연결할 수 있도록 [`Main`](../src/components/Main/Main.jsx)이 `<main>`을 직접 반환한다.

## 4. 현재 프로젝트 구조

```text
react-portpolio/
├── docs/
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
│   │   ├── DownloadSection/
│   │   │   ├── DownloadSection.jsx
│   │   │   └── DownloadSection.module.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   └── Footer.module.css
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.module.css
│   │   ├── LetterSection/
│   │   │   ├── LetterSection.jsx
│   │   │   └── LetterSection.module.css
│   │   ├── Main/
│   │   │   ├── Main.jsx
│   │   │   └── Main.module.css
│   │   ├── Nav/
│   │   │   ├── Nav.jsx
│   │   │   └── Nav.module.css
│   │   ├── PromiseSection/
│   │   │   ├── PromiseSection.jsx
│   │   │   └── PromiseSection.module.css
│   │   ├── ScreensSection/
│   │   │   ├── ScreensSection.jsx
│   │   │   └── ScreensSection.module.css
│   │   ├── SectionTitle/
│   │   │   ├── SectionTitle.jsx
│   │   │   └── SectionTitle.module.css
│   │   ├── StoreButton/
│   │   │   ├── StoreButton.jsx
│   │   │   └── StoreButton.module.css
│   │   └── WeatherSection/
│   │       ├── WeatherSection.jsx
│   │       └── WeatherSection.module.css
│   ├── data/
│   │   └── siteData.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
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
- 대표 앱 화면과 앱 화면 목록은 `<img>` 대신 CSS `background-image`로 배치했다.

### CSS

- 전역 색상 변수와 기본 초기화는 [`src/index.css`](../src/index.css)에 있다.
- 컴포넌트별 스타일은 각 폴더의 `*.module.css`에 있다.
- [`src/App.css`](../src/App.css)는 현재 빈 파일이며 import하지 않는다.
- 현재 미디어 쿼리는 없다.
- 섹션 콘텐츠 최대 너비는 주로 `width: min(1120px, 100%)`를 사용한다.
- 카드와 이미지의 둥근 모서리는 원본에서 확인되는 요소에만 최소 적용했다.

### Nav

- `position: fixed`와 `inset: 0 0 auto`로 화면 위에 고정한다.
- `inset: 0 0 auto`는 `top: 0; right: 0; bottom: auto; left: 0;`의 축약이다.
- 브랜드와 링크 묶음이 양쪽에 붙는 이유는 `.nav`의 `justify-content: space-between`이다.
- 다른 콘텐츠보다 위에 보이도록 `z-index: 10`을 사용한다.

### Header Hero

- 대표 앱 화면은 `.card`의 `/images/owl-01-home.webp` 배경 이미지다.
- `오늘은 우산 필수! ☂️`와 `부엉이가 알려드려요 🦉`는 JSX의 실제 `.sticker` 요소다.
- 뒤쪽 흰색·남색 테두리 타원 장식은 `.header::before`, `.header::after`로 만든 가상 요소다.
- `.header`가 `position: relative`이므로 스티커와 가상 요소의 위치 기준이 된다.
- `.inner`와 `.sticker`는 `z-index: 2`로 배경 타원보다 앞에 표시한다.
- `.header`의 `overflow: hidden`으로 바깥으로 밀어낸 타원의 남는 부분을 자른다.

### 재사용 컴포넌트와 데이터

- [`SectionTitle`](../src/components/SectionTitle/SectionTitle.jsx): 섹션의 kicker, 제목, 설명을 재사용한다.
- [`StoreButton`](../src/components/StoreButton/StoreButton.jsx): Header와 DownloadSection의 앱스토어 버튼을 재사용한다.
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

## 7. 현재 검증 결과

2026-08-19 기준으로 다음 검증을 통과했다.

```text
npm run lint   → 통과
npm run build  → 통과
Pen 앱 렌더링  → 전체 캔버스와 이미지 표시 확인
```

`.pen` 파일은 최상위 프레임 크기, 노드 수, 이미지 참조, placeholder 잔존 여부와 이미지 경로 존재 여부를 확인했다.

## 8. 아직 진행하지 않은 작업

- 원본과의 세부 여백, 글꼴, 글자 크기, 행간, 그림자와 색상 정밀 비교
- 앱스토어 버튼을 실제 Google Play와 App Store 주소에 연결
- 원본 Footer의 전체 정책·지원 링크 반영
- 데스크톱 구조 완성 후 반응형 레이아웃 추가
- 브라우저에서 원본과 React 결과를 나란히 비교하는 최종 시각 검수

## 9. 다음 세션 시작 순서

1. 이 문서를 먼저 읽는다.
2. 원본 사이트와 [`malgeum-reference.pen`](../malgeum-reference.pen)을 함께 연다.
3. 프로젝트에서 `npm run dev`를 실행한다.
4. 데스크톱 화면 기준으로 원본과 React 결과를 비교한다.
5. 한 섹션씩 JSX 구조를 유지하면서 CSS만 정밀 조정한다.
6. 데스크톱 구조가 확정되기 전에는 반응형 스타일을 추가하지 않는다.

## 10. Git 작업 상태 주의

React 컴포넌트 구조와 최초 Pen 파일은 `97055d8` 커밋으로 `origin/main`에 반영했다.

현재 원본 웹과 동기화한 Pen 파일 및 핸드오프 문서 변경은 아직 커밋하거나 push하지 않았다. 다음 세션에서 변경사항을 되돌리거나 덮어쓰지 말고 먼저 `git status --short`를 확인해야 한다.
