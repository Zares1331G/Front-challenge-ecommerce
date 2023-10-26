import { ReactNode, createContext, useState } from "react";

interface StoreContextType {
    test: string;
    settest: React.Dispatch<React.SetStateAction<string>>
}

interface StoreContextProviderProps {
    children: ReactNode;
}

export const StoreContext = createContext<StoreContextType>({
    test: "Hola!",
    settest: () => { }
})

export const StoreContextProvider: React.FC<StoreContextProviderProps> = ({ children }) => {
    const [test, settest] = useState("Hola")

    return (
        <StoreContext.Provider value={{ test, settest }}>
            {children}
        </StoreContext.Provider>
    )
}