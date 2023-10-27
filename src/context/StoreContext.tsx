import { createContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { StoreContextType, StoreContextProviderProps, dataResult } from "../typing";

export const StoreContext = createContext<StoreContextType>({
    test: "Hola!",
    settest: () => { },
    data: [],
    loading: true,
    error: '',
    dataProduct: [],
    setDataProduct: () => { }
})

export const StoreContextProvider: React.FC<StoreContextProviderProps> = ({ children }) => {
    const apiUrl = 'https://fakestoreapi.com/products'

    const { data, loading, error } = useFetch(apiUrl)

    const [test, settest] = useState("Hola")
    const [dataProduct, setDataProduct] = useState<any>([])

    useEffect(() => {
        if (loading) return

        if (!data.length) return

        setDataProduct(data)
    }, [data, loading])

    console.log(data, loading, error)

    return (
        <StoreContext.Provider value={{ 
            test, 
            settest, 
            data, 
            loading, 
            error, 
            dataProduct, 
            setDataProduct 
        }}>
            {children}
        </StoreContext.Provider>
    )
}