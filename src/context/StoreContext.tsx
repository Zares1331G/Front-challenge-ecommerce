import { createContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { StoreContextType, StoreContextProviderProps, dataResult } from "../typing";

export const StoreContext = createContext<StoreContextType>({
    data: [],
    loading: true,
    error: '',
    dataProduct: [],
    setDataProduct: () => { },
    minicart: [], 
    setMinicart: () => { }
})

export const StoreContextProvider: React.FC<StoreContextProviderProps> = ({ children }) => {
    const apiUrl = 'https://fakestoreapi.com/products'
    const { data, loading, error } = useFetch(apiUrl)

    const [ dataProduct, setDataProduct ] = useState<dataResult[]>([])
    const [ minicart, setMinicart ] = useState<dataResult[]>([])

    useEffect(() => {
        if (loading) return

        if (!data.length) return

        setDataProduct(data)
    }, [data, loading])

    console.log(data, loading, error)

    return (
        <StoreContext.Provider value={{
            data,
            loading,
            error,
            dataProduct,
            setDataProduct,
            minicart, 
            setMinicart
        }}>
            {children}
        </StoreContext.Provider>
    )
}