import { Link } from 'react-router-dom';
import { ICategory } from '../Maincategory/MainCategory';

export interface ICategoryCardProps {
}

export function CategoryCard({ data }: { data: ICategory }) {
    return (
        <div className='category-card relative'>

            <div><img src={data.imgUrl} alt="" /></div>
            <Link to={`/categories/${data.name}`}>
                <div className='absolute inset-0 py-[7%]'>
                    <p className='p-[4%] bg-gradient-to-r from-[#ffffffce] via-[#ffffff7c] to-[#fff0] font-semibold text-2xl '>{data.name}</p>
                </div></Link>
        </div>
    );
}
