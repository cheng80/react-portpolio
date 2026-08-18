import SectionTitle from '../90_SectionTitle/SectionTitle'
import StoreButton from '../91_StoreButton/StoreButton'
import styles from './DownloadSection_ver02.module.css'

export default function DownloadSection() {
  return (
    <section id="download" className={styles.section}>
      <div className={styles.container}>
        {/* 앱 아이콘과 다운로드 안내 */}
        <img className={styles.icon} src="/images/app-icon.png" alt="날씨 - 부엉이 편지 앱 아이콘" />
        <SectionTitle
          title={<>오늘의 하늘과 마음을<br />한곳에서 만나보세요</>}
          description="Android와 iPhone에서 지금 시작할 수 있어요."
        />

        {/* 앱스토어 이동 버튼 */}
        <div className={styles.storeRow}>
          <StoreButton symbol="▶" label="Google Play" />
          <StoreButton symbol="●" label="App Store" />
        </div>
      </div>
    </section>
  )
}
