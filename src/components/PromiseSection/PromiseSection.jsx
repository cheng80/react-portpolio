import { promises } from '../../data/siteData'
import SectionTitle from '../SectionTitle/SectionTitle'
import styles from './PromiseSection_ver02.module.css'

export default function PromiseSection() {
  return (
    <section id="promise" className={styles.section}>
      <div className={styles.container}>
        {/* 사용자 선택권 섹션 제목 */}
        <SectionTitle
          kicker="Our promise"
          title="선택권은 언제나 사용자에게"
          description="날씨도 편지도 사적인 정보인 만큼, 필요한 순간에 필요한 만큼만 사용합니다."
        />

        {/* 서비스 이용 원칙 카드 목록 */}
        <div className={styles.cards}>
          {promises.map((promise) => (
            <article className={styles.card} key={promise.title}>
              <span className={styles.check}>✓</span>
              <h3>{promise.title}</h3>
              <p>{promise.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
