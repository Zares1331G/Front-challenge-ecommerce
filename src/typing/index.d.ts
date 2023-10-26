import { ReactNode } from "react";

export interface dataResult {
    category: string
    description: string
    id: number
    image: string
    price: number
    rating: any
    title: string
}

export interface StoreContextType {
    test: string;
    settest: React.Dispatch<React.SetStateAction<string>>

    data: dataResult[]
    loading: boolean
    error: string
}

export interface StoreContextProviderProps {
    children: ReactNode;
}