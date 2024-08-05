import * as React from 'react';
import { CartContext } from '../contexts/CartContext';
import { IProduct, ProductsContext } from '../contexts/ProductContext';
import { AuthContext } from '../contexts/AuthContext';

export interface ICartProps {
}

export function Cart() {
    const cartContext = React.useContext(CartContext)
    const authContext = React.useContext(AuthContext)
    const productsContext = React.useContext(ProductsContext)

    const [cartProducts, setCartProducts] = React.useState<any>([])
    const getAllCartProducts = async () => {
        if (cartContext.cart.products) {
            const productsArr = await Promise.all(
                cartContext.cart.products.map((item: any) => {
                    return { ...productsContext?.getOne(item.productId), quantity: item.quantity }
                }
                )
            );
            setCartProducts(productsArr);
        }
    };

    React.useEffect(() => {
        getAllCartProducts();
    }, [cartContext.cart.products]);



    const handleDelete = async (productId: number) => {
        if (authContext?.user?.user?.id) {
            await cartContext?.deleteOne(authContext.user.user.id, productId);
        }
    };
    return (

        <div className="relative overflow-x-auto">
            {cartContext.cart.products ? <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            img
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            sujbtotal
                        </th>
                        <th scope="col" className="px-6 py-3">
                            action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {cartProducts.length > 0 && cartProducts.map((item: any, index: number) => {
                        return <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {item.name}
                            </th>
                            <td className="px-6 py-4"><img src={item.imgUrl} className='w-20 h-20' alt="" /></td>
                            <td className="px-6 py-4">{item.category}</td>
                            <td className="px-6 py-4">{item.quantity}</td>
                            <td className="px-6 py-4">${item.price}</td>
                            <td className="px-6 py-4">${item.price * item.quantity}</td>
                            <td className="px-6 py-4"><button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                onClick={() => {
                                    handleDelete(item.id)
                                }}
                            >
                                Delete
                            </button></td>
                        </tr>
                    })}

                </tbody>
            </table> : <p>Chua co san pham nao</p>}
        </div>

    );
}
