import StoreButton from '../91_StoreButton/StoreButton'
import { selectStyles } from '../../styleVersion'
import stylesVer01 from './Header_ver01.module.css'
import stylesVer02 from './Header_ver02.module.css'

const styles = selectStyles(stylesVer01, stylesVer02)

export default function Header() {
  return (
    <header id="top" className={styles.header}>
      <div className={styles.inner}>
        {/* 서비스 핵심 문구와 다운로드 버튼 */}
        <div>
          <div className={styles.eyebrow}>☀️ 날씨 행동 추천 + 마음 편지</div>
          <h1>
            오늘의 하늘부터
            <span>마음속 이야기까지</span>
          </h1>
          <p className={styles.lead}>
            <strong>우산·옷차림·미세먼지는 한눈에.</strong>
            <br />
            흐린 날 꺼내지 못한 마음은 부엉이와 함께 내 말투의 편지로 완성해보세요.
          </p>
          <div className={styles.storeRow}>
            <StoreButton symbol="▶" label="Google Play" />
            <StoreButton symbol="●" label="App Store" />
          </div>
          <p className={styles.locale}>한국어 · English · 日本語 · 繁體中文</p>
        </div>

        {/* 대표 앱 화면과 상·하단 안내 스티커 */}
        <div className={styles.visual} aria-hidden="true">
          <div className={[styles.sticker, styles.top].join(' ')}>
            오늘은 우산 필수! ☂️
          </div>

          <div className={styles.card}>
            <img src="/images/owl-01-home.webp" alt="" />
          </div>

          <div className={[styles.sticker, styles.bottom].join(' ')}>
            부엉이가 알려드려요 🦉
          </div>
        </div>
      </div>
    </header>
  )
}
