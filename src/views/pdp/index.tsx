import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../../components/spinner';
import { dataResult } from '../../typing';
import AddToCartButton from '../../components/addToCartButton';
import styles from './styles.module.css'

const ProductPage = () => {
    const { id: idParams } = useParams();

    const [productDetails, setProductDetails] = useState<any>()

    const cachedData: any = sessionStorage.getItem('dataProduct');

    useEffect(() => {
        if (!idParams) return
        setProductDetails(JSON.parse(cachedData).find((producto: dataResult) => producto.id === parseInt(idParams)));
    }, [idParams])

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
                            <div className={styles['product-details-summary-content']}>
                                <div>{productDetails.title}</div>
                                <div>{productDetails.price}</div>
                                <div>{productDetails.category}</div>
                                <div>Rating: {productDetails.rate}</div>
                                <AddToCartButton id={productDetails.id} />
                            </div>
                        </div>
                    </div>
                </>
            }

        </>
    )
}

export default ProductPage
