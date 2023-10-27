import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../../components/spinner';
import styles from './styles.module.css'
import { dataResult } from '../../typing';

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
