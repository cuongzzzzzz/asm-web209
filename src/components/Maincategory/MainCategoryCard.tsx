import * as React from 'react';
import { ICategory } from './MainCategory';
import { IProduct, ProductsContext } from '../../contexts/ProductContext';
import { Link } from 'react-router-dom';

export interface IMainCategoryCardProps {
}


export function MainCategoryCard({ data }: { data: ICategory }) {
    const proContext = React.useContext(ProductsContext)
    const totalProductsByCate = proContext?.products.reduce((acc: any, cur: IProduct) => {
        return cur.category == data.name ? acc + 1 : acc
    }, 0)
    return (
        <div className='relative '>
            <img src={data.imgUrl} className='w-full h-full object-cover' alt="" />
            <Link to={`/categories/${data.name}`}>
                <div className='mask absolute inset-0 bg-[#1019133e]'>
                    <div className='text-white flex py-7 px-5  items-end flex-col'>
                        <p className='text-[18px] font-semibold'>{data.name}</p>
                        <p className=''>{totalProductsByCate}</p>
                    </div>
                </div>
            </Link>

        </div>
    );
}
