# 말금 React 프로젝트 현재 구조

참고 프로젝트: `/Users/cheng80/Desktop/Sesac_Works/Master/fourseasons_clone`
현재 구현 프로젝트: `/Users/cheng80/Desktop/Sesac_Works/Project/react-portpolio`

참고 프로젝트의 `컴포넌트 폴더 + JSX + CSS Module` 방식을 적용한다.
원본 HTML의 body 내부 순서인 `nav → header → main → footer`를 React 컴포넌트에 그대로 대응시킨다.
아래 트리는 현재 코드에서 실제로 import하여 사용하는 파일을 기준으로 한다.

## 프로젝트 트리

```text
react-portpolio/
├── docs/
│   ├── CSS_VERSION_GUIDE.md
│   ├── HANDOFF.md
│   └── REACT_PROJECT_STRUCTURE.md
│
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
│
├── src/
│   ├── components/
│   │   ├── Nav/
│   │   │   ├── Nav.jsx
│   │   │   ├── Nav_ver01.module.css
│   │   │   └── Nav_ver02.module.css
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   ├── Header_ver01.module.css
│   │   │   └── Header_ver02.module.css
│   │   ├── Main/
│   │   │   ├── Main.jsx
│   │   │   ├── Main_ver01.module.css
│   │   │   └── Main_ver02.module.css
│   │   ├── StoreButton/
│   │   │   ├── StoreButton.jsx
│   │   │   ├── StoreButton_ver01.module.css
│   │   │   └── StoreButton_ver02.module.css
│   │   ├── SectionTitle/
│   │   │   ├── SectionTitle.jsx
│   │   │   ├── SectionTitle_ver01.module.css
│   │   │   └── SectionTitle_ver02.module.css
│   │   ├── WeatherSection/
│   │   │   ├── WeatherSection.jsx
│   │   │   ├── WeatherSection_ver01.module.css
│   │   │   └── WeatherSection_ver02.module.css
│   │   ├── LetterSection/
│   │   │   ├── LetterSection.jsx
│   │   │   ├── LetterSection_ver01.module.css
│   │   │   └── LetterSection_ver02.module.css
│   │   ├── ScreensSection/
│   │   │   ├── ScreensSection.jsx
│   │   │   ├── ScreensSection_ver01.module.css
│   │   │   └── ScreensSection_ver02.module.css
│   │   ├── PromiseSection/
│   │   │   ├── PromiseSection.jsx
│   │   │   ├── PromiseSection_ver01.module.css
│   │   │   └── PromiseSection_ver02.module.css
│   │   ├── DownloadSection/
│   │   │   ├── DownloadSection.jsx
│   │   │   ├── DownloadSection_ver01.module.css
│   │   │   └── DownloadSection_ver02.module.css
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       ├── Footer_ver01.module.css
│   │       └── Footer_ver02.module.css
│   │
│   ├── data/
│   │   └── siteData.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── eslint.config.js
├── index.html
├── malgeum-reference.pen
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## HTML과 React 컴포넌트 대응

| 원본 HTML | React 컴포넌트 | 담당 파일 |
| --- | --- | --- |
| `<nav>` | `<Nav />` | `Nav/Nav.jsx` |
| `<header class="hero">` | `<Header />` | `Header/Header.jsx` |
| `<main>` | `<Main />` | `Main/Main.jsx` |
| `<section id="weather">` | `<WeatherSection />` | `WeatherSection/WeatherSection.jsx` |
| `<section id="letters">` | `<LetterSection />` | `LetterSection/LetterSection.jsx` |
| `<section id="screens">` | `<ScreensSection />` | `ScreensSection/ScreensSection.jsx` |
| `<section id="promise">` | `<PromiseSection />` | `PromiseSection/PromiseSection.jsx` |
| `<section id="download">` | `<DownloadSection />` | `DownloadSection/DownloadSection.jsx` |
| `<footer>` | `<Footer />` | `Footer/Footer.jsx` |

## 컴포넌트 관계

```text
App
├── Nav
├── Header
│   └── StoreButton
├── Main
│   ├── WeatherSection
│   │   └── SectionTitle
│   ├── LetterSection
│   │   └── SectionTitle
│   ├── ScreensSection
│   │   └── SectionTitle
│   ├── PromiseSection
│   │   └── SectionTitle
│   └── DownloadSection
│       ├── SectionTitle
│       └── StoreButton
└── Footer
```

## 파일 역할

- `App.jsx`: 별도 DOM 래퍼 없이 Nav, Header, Main, Footer를 원본 순서로 조립한다.
- `main.jsx`: React 앱을 `#root`에 연결하고 `index.css`를 불러온다.
- `Nav.jsx`: 원본의 상단 `<nav>`를 출력한다.
- `Header.jsx`: 첫 화면 소개 문구, 앱스토어 버튼, 대표 앱 이미지를 포함한 `<header>`를 출력한다.
- `Main.jsx`: `<main>`을 출력하고 다섯 개 section의 순서를 관리한다.
- `WeatherSection.jsx`: `#weather` 날씨 기능 카드 영역을 출력한다.
- `LetterSection.jsx`: `#letters` 부엉이 편지 카드 영역을 출력한다.
- `ScreensSection.jsx`: `#screens` 앱 화면 이미지 영역을 출력한다.
- `PromiseSection.jsx`: `#promise` 사용자 선택권 카드 영역을 출력한다.
- `DownloadSection.jsx`: `#download` 앱 다운로드 영역을 출력한다.
- `Footer.jsx`: 원본의 `<footer>`를 출력한다.
- `siteData.js`: 기능 카드, 편지 카드, 앱 화면, 약속 항목 데이터를 배열로 관리한다.
- `index.css`: CSS 초기화, 기본 글꼴, `:root` 색상 토큰을 정의하는 전역 스타일이다.
- `*_ver01.module.css`: 최종 치수의 기본 박스 모델을 담당한다.
- `*_ver02.module.css`: 같은 배치에 색상, 그림자, hover와 장식을 더한 완성 스타일을 담당한다.
- `public/images`: 모든 앱 아이콘과 화면 이미지를 보관한다. React에서는 `/images/파일명`, Pen 디자인에서는 `public/images/파일명`으로 같은 파일을 참조한다.
- `StoreButton`: Header와 DownloadSection에서 재사용한다.
- `SectionTitle`: 여러 섹션의 kicker, 제목, 설명 형식을 재사용한다.

`global.css`는 사용하지 않으며 전역 스타일은 `src/index.css`에서 관리한다.
`src/App.css`도 현재 import되지 않으므로 사용 구조에서 제외한다.

## 구현 원칙

1. 하나의 컴포넌트 폴더에 JSX와 CSS Module을 함께 둔다.
2. 컴포넌트의 최상위 HTML 태그는 이름과 동일하게 Nav → `nav`, Header → `header`, Main → `main`, Footer → `footer`로 작성한다.
3. 각 section 컴포넌트는 원본의 `id`를 유지한다.
4. 반복 콘텐츠는 JSX에 직접 복사하지 않고 `siteData.js`의 배열을 `map()`으로 출력한다.
5. 모든 이미지는 `public/images`에 두고 `/images/파일명`으로 참조한다.
6. 모든 `display: flex`에는 `flex-direction: row` 또는 `column`을 명시한다.
7. 현재 데스크톱 기준에는 `clamp()`를 사용하며 `@media` 반응형 스타일은 아직 추가하지 않는다.
8. 현재는 단일 랜딩 페이지이므로 `pages`, `HomePage`, `react-router-dom`, `ScrollToTop`, `NotFoundPage`는 만들지 않는다.
9. 다른 페이지가 실제로 추가될 때 라우터와 페이지 폴더를 확장한다.

## App과 Main 기본 구조

```jsx
// App.jsx
function App() {
  return (
    <>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </>
  );
}
```

```jsx
// Main.jsx
function Main() {
  return (
    <main className={styles.main}>
      <WeatherSection />
      <LetterSection />
      <ScreensSection />
      <PromiseSection />
      <DownloadSection />
    </main>
  );
}
```

## 이미지 사용 예시

```jsx
<img src="/images/app-icon.png" alt="앱 아이콘" />
```

`index.html`의 favicon도 같은 경로 규칙을 사용한다.

```html
<link rel="icon" href="/images/favicon-32.png" />
```

[`malgeum-reference.pen`](../malgeum-reference.pen)도 프로젝트 루트의 별도 이미지 폴더를 만들지 않고 같은 `public/images` 파일을 참조한다.
