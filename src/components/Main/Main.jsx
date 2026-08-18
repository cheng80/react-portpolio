import DownloadSection from '../DownloadSection/DownloadSection'
import LetterSection from '../LetterSection/LetterSection'
import PromiseSection from '../PromiseSection/PromiseSection'
import ScreensSection from '../ScreensSection/ScreensSection'
import WeatherSection from '../WeatherSection/WeatherSection'
import styles from './Main.module.css'

export default function Main() {
  return (
    <main className={styles.main}>
      {/* 날씨 기능 소개 */}
      <WeatherSection />

      {/* 부엉이 편지 기능 소개 */}
      <LetterSection />

      {/* 실제 앱 화면 소개 */}
      <ScreensSection />

      {/* 사용자 선택권 안내 */}
      <PromiseSection />

      {/* 앱 다운로드 안내 */}
      <DownloadSection />
    </main>
  )
}
