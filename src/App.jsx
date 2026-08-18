import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      {/* 상단 고정 네비게이션 */}
      <Nav />

      {/* 첫 화면 소개 영역 */}
      <Header />

      {/* 서비스 소개 섹션 모음 */}
      <Main />

      {/* 하단 정보 영역 */}
      <Footer />

    </>
  )
}

export default App
