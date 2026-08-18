import { selectStyles } from '../../styleVersion'
import stylesVer01 from './StoreButton_ver01.module.css'
import stylesVer02 from './StoreButton_ver02.module.css'

const styles = selectStyles(stylesVer01, stylesVer02)

export default function StoreButton({ symbol, label }) {
  const googlePlay = label === 'Google Play'

  return (
    /* 앱스토어 다운로드 공통 버튼 */
    <a
      className={styles.button}
      href={googlePlay
        ? 'https://play.google.com/store/apps/details?id=gg.pryzm.weather'
        : 'https://apps.apple.com/app/id6761682299'}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label}에서 날씨 - 부엉이 편지 다운로드`}
    >
      <span className={styles.icon} aria-hidden="true">{symbol}</span>
      <span className={styles.copy}>
        <small>{googlePlay ? 'GET IT ON' : 'DOWNLOAD ON THE'}</small>
        <strong>{label}</strong>
      </span>
    </a>
  )
}
