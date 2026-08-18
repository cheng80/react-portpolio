import styles from './SectionTitle.module.css'

export default function SectionTitle({ kicker, title, description }) {
  return (
    /* 각 섹션에서 재사용하는 제목 묶음 */
    <div className={styles.title}>
      <p>{kicker}</p>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
