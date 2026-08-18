import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav} aria-label="상단 네비게이션">
      {/* 브랜드 로고와 서비스명 */}
      <a className={styles.brand} href="#top" aria-label="날씨 - 부엉이 편지 홈으로">
        <img src="/images/app-icon.png" alt="" />
        <span>날씨 - 부엉이 편지</span>
      </a>

      {/* 페이지 내부 섹션 이동 메뉴 */}
      <div className={styles.links}>
        <a href="#weather">날씨 기능</a>
        <a href="#letters">부엉이 편지</a>
        <a href="#screens">앱 화면</a>
        <a className={styles.download} href="#download">다운로드</a>
      </div>
    </nav>
  )
}
