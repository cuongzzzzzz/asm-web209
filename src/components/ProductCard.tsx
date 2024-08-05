import { Link } from 'react-router-dom';

export interface IProductCardProps {
    data1: IProduct
}

interface IProduct {
    id: number
    imgUrl: string
    name: string
    category: string

    discount: number
    price: number
}
export function ProductCard(props: IProductCardProps) {
    return (
        <div>
            <div className='flex items-center justify-center h-[500px]'>
                <img src={props.data1.imgUrl} alt="" className='w-full' />
            </div>
            <div className=' p-3 flex flex-col gap-3'>

                <Link to={`/products/${props.data1.id}`}>
                    <p className='font-semibold text-sm text-[#665345]'>{props.data1.name}</p></Link>


                <div className='flex  justify-between'>
                    <span className='text-[12px] text-[#777777]'>{props.data1.category}</span>
                    <span className='text-[12px]'>$ {props.data1.price}</span>
                </div>
            </div>
        </div>
    );
}
