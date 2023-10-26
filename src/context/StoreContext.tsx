import { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";
import { StoreContextType, StoreContextProviderProps } from "../typing";



export const StoreContext = createContext<StoreContextType>({
    test: "Hola!",
    settest: () => { },
    data: [],
    loading: true,
    error: ''
})

export const StoreContextProvider: React.FC<StoreContextProviderProps> = ({ children }) => {
    const [test, settest] = useState("Hola")
    const { data, loading, error } = useFetch('https://fakestoreapi.com/products')

    console.log(data, loading, error)

    return (
        <StoreContext.Provider value={{ test, settest, data, loading, error }}>
            {children}
        </StoreContext.Provider>
    )
}