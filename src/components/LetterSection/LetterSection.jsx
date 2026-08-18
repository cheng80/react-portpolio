import { letterFeatures } from '../../data/siteData'
import SectionTitle from '../SectionTitle/SectionTitle'
import styles from './LetterSection_ver02.module.css'

export default function LetterSection() {
  return (
    <section id="letters" className={styles.section}>
      <div className={styles.container}>
        {/* 편지 기능 섹션 제목 */}
        <SectionTitle
          kicker="Owl letter"
          title={<>날씨가 흐린 날에는<br />마음에도 귀를 기울여요</>}
          description="오늘의 하늘을 매개로 마음을 나누고, 쉽게 꺼내지 못했던 말은 편지로 차분히 정리할 수 있어요."
        />

        {/* 부엉이 편지 기능 카드 목록 */}
        <div className={styles.cards}>
          {letterFeatures.map((feature) => (
            <article className={styles.card} key={feature.title}>
              <span className={styles.icon} aria-hidden="true">{feature.icon}</span>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
