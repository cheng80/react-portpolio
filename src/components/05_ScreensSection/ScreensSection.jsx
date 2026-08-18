import { appScreens } from '../../data/siteData'
import SectionTitle from '../90_SectionTitle/SectionTitle'
import styles from './ScreensSection_ver02.module.css'

export default function ScreensSection() {
  return (
    <section id="screens" className={styles.section}>
      <div className={styles.container}>
        {/* 앱 화면 섹션 제목 */}
        <SectionTitle
          kicker="Inside the app"
          title={<>매일 펼쳐보고 싶은<br />다정한 날씨 경험</>}
          description="실용적인 날씨부터 마음을 나누는 순간까지, 최신 앱 화면을 만나보세요."
        />

        {/* 앱 화면 이미지 목록 */}
        <div className={styles.screens}>
          {appScreens.map((screen) => (
            <div className={styles.item} key={screen.image}>
              <div className={styles.image}>
                <img src={screen.image} alt={screen.alt} loading="lazy" />
              </div>
              <p>{screen.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
