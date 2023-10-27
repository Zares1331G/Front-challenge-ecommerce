import { useContext/* , useState */ } from "react"
import { StoreContext } from "../../context/StoreContext"
import styles from './styles.module.css'

const Header = () => {

  const { data, setDataProduct } = useContext(StoreContext)

  const removeAccents = (str: string) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  const handleFilterData = (e: any) => {
    const filteredProducts = data.filter((product) =>
      removeAccents(product.title).toLowerCase().includes(removeAccents(e.target.value).toLowerCase())
    );

    setDataProduct(filteredProducts)
  }

  return (
    <header className={styles['container-header']}>
      <div className={styles['header-logo']} />
      <div><input onChange={handleFilterData} type="text" /></div>
      <div>filter</div>
    </header>
  )
}

export default Header