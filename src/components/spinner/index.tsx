import styles from './styles.module.css'

const Spinner = () => {
  return (
    <div className={styles['container-spinner']}>
      <div className={styles['spinner']} />
    </div>
  )
}

export default Spinner
