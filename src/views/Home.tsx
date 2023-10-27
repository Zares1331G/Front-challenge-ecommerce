import { useContext } from "react"
import { StoreContext } from "../context/StoreContext"
import { dataResult } from "../typing"
import styles from './styles.module.css'


const Home = () => {
  const { dataProduct, loading } = useContext(StoreContext)

  console.log(dataProduct, loading)

  return (
    <>
      {loading ?
        <>Loading</> :
        <div className={styles['container-home']}>
          {/* Refactorizar en un nuevo componente */}
          {dataProduct.map((card: dataResult) => (
            <div className={styles['home-card-result']} key={card.id}>
              <img className={styles['home-card-result-image']} src={card.image} alt={card.title} />
              <div>{card.title}</div>
              <div>{card.category}</div>
              <div>${card.price}</div>
              <button className={styles['home-card-result-buy-button']}>
                <span>Agregar</span>
              </button>
            </div>
          ))}
        </div>}
    </>
  )
}

export default Home