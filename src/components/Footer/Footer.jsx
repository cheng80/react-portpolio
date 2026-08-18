import styles from './Footer_ver02.module.css'

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
        <a href="https://union.pryzm.gg/malgeum/guide.html">행동 추천 가이드</a>
        <a href="https://union.pryzm.gg/malgeum/download">공유 카드</a>
        <a href="https://union.pryzm.gg/malgeum/privacy-policy.html">개인정보처리방침</a>
        <a href="https://union.pryzm.gg/malgeum/terms-of-service.html">이용약관</a>
        <a href="https://union.pryzm.gg/malgeum/data-deletion.html">계정 및 데이터 삭제</a>
        <a href="https://union.pryzm.gg/malgeum/support-en.html">English support</a>
        <a href="https://union.pryzm.gg/">pryzm 도구 모음</a>
      </div>

      {/* 저작권 정보 */}
      <p className={styles.copy}>© 2026 pryzm · 날씨 데이터 출처: OpenWeatherMap · Open-Meteo · AirKorea</p>
    </footer>
  )
}
