import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"
import styles from './styles.module.css'

const Checkout = () => {
  const { minicart } = useContext(StoreContext)
  return (
    <>
      {!minicart ?
        <div>
          No tienes productos en el carrito
        </div> :
        <div className={styles['container-checkout']}>
          {minicart.map((product) => (
            <div className={styles['container-checkout-items']}>
              <img src={product.image} alt="" width='80' />
              <div>{product.title}</div>
              <div>{product.price}</div>
            </div>
          ))}
        </div>}
    </>
  )
}

export default Checkout