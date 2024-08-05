import * as React from 'react';
import { ProductCard } from '../ProductCard';
import { IProduct } from '../../contexts/ProductContext';

export interface IBestSellerProps {
}

export function BestSeller({ data }: { data: IProduct[] | undefined }) {

    return (
        <div className='bg-white flex justify-center items-center'>
            <div className='max-w-[1200px] w-full p-5'>
                <div className='grid grid-cols-4 w-full gap-10'>
                    {data && data.map((item) => {
                        return <ProductCard key={item.id} data1={item}></ProductCard>
                    })}
                </div>
            </div>

        </div>
    );
}
