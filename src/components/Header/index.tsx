import Logo from '../../assets/Logo.png'
import styles from './styles.module.css'
export function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Todo" loading="lazy" decoding="async" />
      <h1 className={styles.sronly}>todo</h1>
    </header>
  )
}
