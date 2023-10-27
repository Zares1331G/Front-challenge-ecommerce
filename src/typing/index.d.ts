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
    data: dataResult[]
    loading: boolean
    error: string
    dataProduct: dataResult[]
    setDataProduct: React.Dispatch<React.SetStateAction<dataResult[]>>
    minicart: dataResult[]
    setMinicart: React.Dispatch<React.SetStateAction<dataResult[]>>
}

export interface StoreContextProviderProps {
    children: ReactNode;
}