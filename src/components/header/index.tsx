import { useContext, useEffect } from "react"
import { StoreContext } from "../../context/StoreContext"
import styles from './styles.module.css'
import { Link } from "react-router-dom"

const Header = () => {

  const { data, setDataProduct, minicart } = useContext(StoreContext)

  //Esta función sirve para quitar los acentos
  const removeAccents = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  const handleFilterData = (e: any) => {
    const filteredProducts = data.filter((product) =>
      removeAccents(product.title).toLowerCase().includes(removeAccents(e.target.value).toLowerCase())
    );

    setDataProduct(filteredProducts)
  }

  useEffect(() => {
    console.log(minicart, "MINI")
  }, [minicart])

  console.log(minicart, "MINI")

  return (
    <header className={styles['container-header']}>
      <Link to='/'>
        <div className={styles['header-logo']} />
      </Link>
      <div><input placeholder="Buscar en tu exito.com" onChange={handleFilterData} type="text" /></div>
      <Link to='/checkout'>
        <div className={styles['header-minicart']}>
          <span>{minicart.length}</span>
        </div>
      </Link>
    </header>
  )
}

export default Header