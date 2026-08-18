import { appScreens } from '../../data/siteData'
import SectionTitle from '../SectionTitle/SectionTitle'
import styles from './ScreensSection.module.css'

export default function ScreensSection() {
  return (
    <section id="screens" className={styles.section}>
      <div className={styles.container}>
        {/* 앱 화면 섹션 제목 */}
        <SectionTitle
          kicker="Inside the app"
          title="매일 펼쳐보고 싶은 다정한 날씨 경험"
          description="실용적인 날씨부터 마음을 나누는 순간까지 앱 화면을 만나보세요."
        />

        {/* 앱 화면 이미지 목록 */}
        <div className={styles.screens}>
          {appScreens.map((screen) => (
            <article className={styles.item} key={screen.image}>
              <div
                className={styles.image}
                style={{ backgroundImage: "url('" + screen.image + "')" }}
                role="img"
                aria-label={screen.caption}
              />
              <p>{screen.caption}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
