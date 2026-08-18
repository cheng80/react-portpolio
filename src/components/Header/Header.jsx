import StoreButton from '../StoreButton/StoreButton'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header id="top" className={styles.header}>
      <div className={styles.inner}>
        {/* 서비스 핵심 문구와 다운로드 버튼 */}
        <div className={styles.copy}>
          <p>☀️ 날씨 행동 추천 + 마음 편지</p>
          <h1>
            오늘의 하늘부터
            <br />
            마음속 이야기까지
          </h1>
          <p>
            우산·옷차림·미세먼지는 한눈에.
            <br />
            흐린 날 꺼내지 못한 마음은 부엉이와 함께 편지로 완성해보세요.
          </p>
          <div className={styles.buttons}>
            <StoreButton symbol="▶" label="Google Play" />
            <StoreButton symbol="●" label="App Store" />
          </div>
        </div>

        {/* 대표 앱 화면과 상·하단 안내 스티커 */}
        <div className={styles.visual} aria-hidden="true">
          <div className={[styles.sticker, styles.top].join(' ')}>
            오늘은 우산 필수! ☂️
          </div>

          <div className={styles.card} />

          <div className={[styles.sticker, styles.bottom].join(' ')}>
            부엉이가 알려드려요 🦉
          </div>
        </div>
      </div>
    </header>
  )
}
