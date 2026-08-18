import { weatherFeatures } from '../../data/siteData'
import SectionTitle from '../SectionTitle/SectionTitle'
import styles from './WeatherSection.module.css'

export default function WeatherSection() {
  return (
    <section id="weather" className={styles.section}>
      <div className={styles.container}>
        {/* 날씨 기능 섹션 제목 */}
        <SectionTitle
          kicker="Weather for real life"
          title="숫자를 읽는 대신 오늘 할 일을 바로 보세요"
          description="복잡한 예보를 내 생활에 맞는 행동으로 바꿉니다."
        />

        {/* 날씨 기능 카드 목록 */}
        <div className={styles.cards}>
          {weatherFeatures.map((feature) => (
            <article className={styles.card} key={feature.title}>
              <span>{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
