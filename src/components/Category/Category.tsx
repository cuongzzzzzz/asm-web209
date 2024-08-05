import * as React from 'react';
import { CategoryCard } from './CategoryCard';
import { ICategory } from '../Maincategory/MainCategory';
import axios from 'axios';

export interface ICategoryProps {
}

export function Category(props: ICategoryProps) {
    const [categories, setCategories] = React.useState<ICategory[]>([])
    const getCate = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/categories?_page=1&_limit=5`)
            setCategories(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    React.useEffect(() => {
        getCate()
    }, [])
    return (
        <div className='flex items-center justify-center '>
            <div className='grid-conatainer'>
                {categories && categories.map((item) => {
                    return <CategoryCard key={item.id} data={item} />
                })}


            </div>
        </div>
    );
}
