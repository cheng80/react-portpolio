import { selectStyles } from '../../styleVersion'
import stylesVer01 from './SectionTitle_ver01.module.css'
import stylesVer02 from './SectionTitle_ver02.module.css'

const styles = selectStyles(stylesVer01, stylesVer02)

export default function SectionTitle({ kicker, title, description }) {
  return (
    /* 각 섹션에서 재사용하는 제목 묶음 */
    <div className={styles.title}>
      {kicker && <p className={styles.kicker}>{kicker}</p>}
      <h2 className={styles.heading}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
