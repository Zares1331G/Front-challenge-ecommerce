import { useContext } from "react"
import { StoreContext } from "../../context/StoreContext"
import { dataResult } from "../../typing"
import Shelf from "../../components/shelf"
import Spinner from "../../components/spinner"
import styles from './styles.module.css'


const Home = () => {
  const { dataProduct, loading } = useContext(StoreContext)

  return (
    <>
      {loading ?
        <>
          <Spinner />
        </> :
        <div className={styles['container-home']}>
          {dataProduct.map((card: dataResult) => (
            <Shelf
              image={card.image}
              title={card.title}
              category={card.category}
              price={card.price}
              id={card.id}
            />
          ))}
        </div>}
    </>
  )
}

export default Home
