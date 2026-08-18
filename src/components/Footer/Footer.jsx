import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* 하단 브랜드 정보 */}
      <div className={styles.brand}>
        <img src="/images/app-icon.png" alt="" />
        <span>날씨 - 부엉이 편지</span>
      </div>

      {/* 주요 섹션 바로가기 */}
      <div className={styles.links}>
        <a href="#weather">날씨 기능</a>
        <a href="#letters">부엉이 편지</a>
        <a href="#screens">앱 화면</a>
        <a href="#download">다운로드</a>
      </div>

      {/* 저작권 정보 */}
      <p>© 2026 pryzm · 날씨 - 부엉이 편지</p>
    </footer>
  )
}
