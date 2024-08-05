import axios from 'axios';
import * as React from 'react';
import { AuthContext } from './AuthContext';

export interface ICartProduct {
    productId: string | number
    quantity: number
}

export interface ICart {
    userId: string | number,
    products: ICartProduct[]
}

export interface ICartContextProps { }

export const CartContext = React.createContext<any>(null);

export function CartProvider({ children }: { children: React.ReactElement }) {
    const authContext = React.useContext(AuthContext);
    const user = authContext?.user;

    const [cart, setCart] = React.useState<ICart | any>({});
    const [cartQuantity, setCartQuantity] = React.useState<number>(0);

    const getCart = async (id: number) => {
        try {
            const res = await axios.get(`http://localhost:3000/carts/${id}`);
            setCart(res.data);
        } catch (error: any) {
            if (error.response && error.response.status === 404) {
                await axios.post(`http://localhost:3000/carts`, { id: id, products: [] });
                const res = await axios.get(`http://localhost:3000/carts/${id}`);
                setCart(res.data);
            }
        }
    };

    const getCartQuantity = () => {
        if (cart && cart.products) {
            const number = cart.products.reduce((acc: number, item: ICartProduct) => acc + item.quantity, 0);
            setCartQuantity(number);
        } else {
            setCartQuantity(0);
        }
    };

    const addToCart = async (id: number, productId: number) => {
        try {
            const updatedCart = { ...cart };
            const existingProduct = updatedCart.products.find((item: ICartProduct) => item.productId === productId);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                updatedCart.products.push({ productId, quantity: 1 });
            }

            await axios.put(`http://localhost:3000/carts/${id}`, updatedCart);
            setCart(updatedCart);
        } catch (error) {
            console.log(error);
        }
    };

    const update = async (id: number, productId: number, quantity: number) => {
        try {
            const updatedCart = { ...cart };
            const productToUpdate = updatedCart.products.find((item: ICartProduct) => item.productId === productId);

            if (productToUpdate) {
                productToUpdate.quantity = quantity;
            }

            await axios.put(`http://localhost:3000/carts/${id}`, updatedCart);
            setCart(updatedCart);
        } catch (error) {
            console.log(error);
        }
    };

    const addOne = async (id: number, productId: number) => {
        try {
            const updatedCart = { ...cart };
            const productToUpdate = updatedCart.products.find((item: ICartProduct) => item.productId === productId);

            if (productToUpdate) {
                productToUpdate.quantity += 1;
            }

            await axios.put(`http://localhost:3000/carts/${id}`, updatedCart);
            setCart(updatedCart);
        } catch (error) {
            console.log(error);
        }
    };

    const minusOne = async (id: number, productId: number) => {
        try {
            const updatedCart = { ...cart };
            const productToUpdate = updatedCart.products.find((item: ICartProduct) => item.productId === productId);

            if (productToUpdate) {
                productToUpdate.quantity = Math.max(0, productToUpdate.quantity - 1);
            }

            await axios.put(`http://localhost:3000/carts/${id}`, updatedCart);
            setCart(updatedCart);
        } catch (error) {
            console.log(error);
        }
    };
    const deleteOne = async (id: number, productId: number) => {
        try {
            const updatedCart = { ...cart };
            const newProducts = updatedCart.products.filter((item: ICartProduct) => item.productId != productId);
            const newCart = { ...updatedCart, products: newProducts };

            await axios.put(`http://localhost:3000/carts/${id}`, newCart);
            console.log("newCart:::", newCart);
            await setCart(newCart);
        } catch (error) {
            console.log(error);
        }
    };

    React.useEffect(() => {
        console.log("from cartContext:::", user?.user?.id)
        if (user?.user?.id) {
            getCart(user.user.id);
        } else {
            setCart({});
            setCartQuantity(0);
        }
    }, [user?.user?.id]);

    React.useEffect(() => {
        getCartQuantity();
    }, [cart]);


    console.log("cart::::", cart)

    return (
        <CartContext.Provider value={{ addToCart, update, minusOne, addOne, cart, getCartQuantity, deleteOne, cartQuantity, setCart, getCart }}>
            {children}
        </CartContext.Provider>
    );
}