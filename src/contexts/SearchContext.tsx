import { createContext, useContext, useState } from "react";
import { IProduct, ProductsContext } from "./ProductContext";

interface ContextProps {
    foundProducts: IProduct[]
    searchByNameOrCate: (text: string) => void
}

export const SearchContext = createContext<ContextProps | null>(null)



export function SearchProvider({ children }: { children: React.ReactElement }) {
    const proContext = useContext(ProductsContext)

    const [foundProducts, setFoundProducts] = useState<IProduct[]>([])

    const products = proContext?.products

    const searchByNameOrCate = (text: String) => {
        if (products) {
            if (text != "") {
                setFoundProducts(products.filter((pro) => {

                    return String(pro.category.toLowerCase()).includes(String(text.toLowerCase())) || String(pro.name.toLowerCase()).includes(String(text.toLowerCase()))
                }))
            } else {
                setFoundProducts([])
            }
        }
    }
    const value = {
        foundProducts, searchByNameOrCate
    }
    console.log(foundProducts)
    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    );
}
