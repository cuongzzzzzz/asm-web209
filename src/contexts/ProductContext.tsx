import { ajvResolver } from '@hookform/resolvers/ajv';
import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';



export interface IProduct {
    id: number
    name: string
    desc: string
    price: number
    imgUrl: string
    discount: number
    category: string


}
interface IFetchContext {
    products: IProduct[];
    isLoading: boolean;
    isSuccess: boolean;
    isError: boolean;
    addProduct: (data: any) => Promise<any>
    onDelete: (id: number) => Promise<any>
    onUpdate: (data: any, id: number | string | undefined) => Promise<any>
    getProducts: () => Promise<any>
    getOne: (id: any) => any

}

export const ProductsContext = React.createContext<IFetchContext | null>(null)

export function FetchContext({ children }: { children: React.ReactElement }) {


    const [products, setProducts] = useState<IProduct[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isSuccess, setIsSuccess] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)
    React.useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async (): Promise<any> => {
        try {
            setIsLoading(true)
            const data = await axios.get<IProduct[]>("http://localhost:3000/products")
            setProducts(data.data)
            setIsLoading(false)
            setIsSuccess(true)
        } catch (error) {
            setIsLoading(false)
            setIsSuccess(false)
            setIsError(true)
            console.log(error)

        }
    }
    const addProduct = async (data: any) => {
        try {
            await axios.post("http://localhost:3000/products", data)
            alert("them san pham than hcong")
        } catch (error) {
            console.log(error)
            alert("co loi xay ra khi them san pham")
        }

    }
    const onUpdate = async (data: any, id: number | string | undefined) => {
        try {
            await axios.put(`http://localhost:3000/products/${id}`, data)
            alert("sua san pham than hcong")
        } catch (error) {
            console.log(error)
            alert("co loi xay ra khi sua san pham")
        }

    }
    const onDelete = async (id: number) => {
        try {
            if (confirm("Ban co muon xoa san phan nay khong?")) {
                await axios.delete(`http://localhost:3000/products/${id}`)
            }
            getProducts()

            alert("xao san phan than hcong")
        } catch (error) {
            console.log(error)

        }
    }
    const getOne = (id: number) => {
        try {
            const product = products.filter((item: any) => {
                return item.id == id
            })
            return product[0]
        } catch (error) {

        }
    }

    const contextValue: IFetchContext = {
        products,
        isLoading,
        isSuccess,
        isError,
        addProduct,
        onDelete,
        onUpdate,
        getProducts,
        getOne


    };


    return (
        <ProductsContext.Provider value={contextValue}>
            {children}
        </ProductsContext.Provider>
    );
}