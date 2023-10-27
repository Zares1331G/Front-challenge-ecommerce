import { useContext, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { Link } from 'react-router-dom'
import { dataResult } from '../../typing'
import styles from './styles.module.css'

const Shelf = ({ image, title, category, price, id }: any) => {
    const [saveInCart, setSaveInCart] = useState<boolean>(false)

    const { minicart, setMinicart, dataProduct } = useContext(StoreContext)

    const handleAddToCart = (id: number) => {
        const dataMinicart: dataResult[] | any = minicart;
        dataMinicart.push(dataProduct.filter(product => product.id === id)[0])

        setMinicart(dataMinicart)
        setSaveInCart(true)
    }

    console.log(minicart)

    return (
        <div className={styles['shelf-container']} key={id}>
            <img className={styles['shelf-image']} src={image} alt={title} />
            <div>{title}</div>
            <div>{category}</div>
            <div>${price}</div>
            {
                saveInCart ?
                    <Link className={styles['shelf-buy-button-link']} to='/checkout'>
                        <button className={styles['shelf-buy-button-finish']}>
                            <span>Ir a pagar</span>
                        </button>
                    </Link> :
                    <button onClick={() => handleAddToCart(id)} className={styles['shelf-buy-button']}>
                        <span>Agregar</span>
                    </button>
            }
        </div>
    )
}

export default Shelf