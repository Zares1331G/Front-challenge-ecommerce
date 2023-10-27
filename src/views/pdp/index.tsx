import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import Spinner from '../../components/spinner';
import styles from './styles.module.css'

const ProductPage = () => {
    const { id: idParams } = useParams();
    const { data } = useContext(StoreContext)

    const [productDetails, setProductDetails] = useState<any>()

    useEffect(() => {
        if (!idParams) return
        setProductDetails(data.find((producto) => producto.id === parseInt(idParams)));
    }, [idParams])

    console.log(productDetails)
    return (
        <>
            {!productDetails ?
                <>
                    <Spinner />
                </> :
                <>
                    <div className={styles['container-product-details']}>
                        <div className={styles['product-details-breadcrumb']}>
                            {productDetails.title}
                        </div>
                        <div className={styles['product-details-summary']}>
                            <img className={styles['product-details-summary-image']} src={productDetails.image} alt="" />
                            <div>
                                <div>{productDetails.title}</div>
                                <div>{productDetails.price}</div>
                                <div>{productDetails.category}</div>
                                <div>Rating: {productDetails.rate}</div>
                            </div>
                        </div>
                    </div>
                </>
            }

        </>
    )
}

export default ProductPage
