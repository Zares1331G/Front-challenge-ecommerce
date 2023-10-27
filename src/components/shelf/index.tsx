import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import AddToCartButton from '../addToCartButton'

const Shelf = ({ image, title, category, price, id }: any) => {

    return (
        <div className={styles['shelf-container']} key={id}>
            <Link className={styles['shelf-container-detail']} to={`/product-page/${id}`}>
                <img className={styles['shelf-image']} src={image} alt={title} />
                <div>{title}</div>
                <div>{category}</div>
                <div>${price}</div>
            </Link>
            <AddToCartButton id={id} />
        </div>
    )
}

export default Shelf