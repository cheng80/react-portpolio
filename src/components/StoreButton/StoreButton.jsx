import styles from './StoreButton.module.css'

export default function StoreButton({ symbol, label }) {
  return (
    /* 앱스토어 다운로드 공통 버튼 */
    <a className={styles.button} href="#download">
      <span aria-hidden="true">{symbol}</span>
      <strong>{label}</strong>
    </a>
  )
}
