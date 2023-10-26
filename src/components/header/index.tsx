import styles from './styles.module.css'

const Header = () => {
  return (
    <header className={styles['container-header']}>
      <div className={styles['header-logo']} />
      <div>filter</div>
    </header>
  )
}

export default Header