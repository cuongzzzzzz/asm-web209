import { Link } from 'react-router-dom';
import { IProduct } from '../../contexts/ProductContext';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { AuthContext } from '../../contexts/AuthContext';


export function ProductCard({ data }: { data: IProduct }) {
    const cartContext = useContext(CartContext)
    const authContext = useContext(AuthContext)
    return (
        <div className='w-[300px] h-[350px] flex flex-col gap-4 items-center'>
            <div className='max-h-[200px] w-full flex justify-center relative my-3 group'>
                <img src={data.imgUrl} alt="" className=' self-center' />
                <div className='hidden absolute inset-0 group-hover:flex items-center gap-2 justify-center'>
                    <div className=' flex items-center justify-center  w-10 h-9 text-[#4E7C32]  bg-[#fff] hover:bg-[#4E7C32] hover:text-white rounded'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                        </svg>
                    </div>
                    <div className=' flex items-center justify-center w-10 h-9 text-[#4E7C32]  bg-[#fff] hover:bg-[#4E7C32] hover:text-white rounded'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>

                    </div>
                    <div className=' flex items-center justify-center w-10 h-9 text-[#4E7C32]  bg-[#fff] hover:bg-[#4E7C32] hover:text-white rounded'
                        onClick={authContext.user?.user?.id ? () => {
                            cartContext?.addToCart(authContext.user?.user?.id, data.id)
                        } : authContext.needLogin}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>

                    </div>


                </div>
            </div>
            <div className=' flex flex-col gap-3'>
                <Link to={`/products/${data.id}`}>
                    <p className='font-bold'>{data.name} </p></Link>
                <p className='text-[#828282]'>
                    <span>${data.price}</span>
                    {data.discount > 0 ? <span className=' line-through ml-3'>${data.price}</span> : ""}
                </p>
            </div>
        </div>
    );
}
