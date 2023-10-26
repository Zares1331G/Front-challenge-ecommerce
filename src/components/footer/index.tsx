import styles from './styles.module.css'

const Footer = () => {
  return (
    <footer className={styles['container-footer']}>
      <ul>
        <li>Centro de ayuda</li>
        <li>exito.com</li>
        <li>Nuestra compañia</li>
        <li>Comunidades</li>
        <li>Información legal</li>
        <li>Éxito atendido</li>
      </ul>
    </footer>
  )
}

export default Footer