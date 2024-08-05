import * as React from 'react';
import { MainCategoryCard } from './MainCategoryCard';
import axios from 'axios';

export interface IMainCatrgoryProps {
}

export interface ICategory {
    id: number | string
    name: string
    imgUrl: string
}

export function MainCatrgory() {

    const [categories, setCategories] = React.useState<ICategory[]>([])
    const getCate = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/categories?_page=1&_limit=8`)
            setCategories(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    React.useEffect(() => {
        getCate()
    }, [])
    return (
        <div className='flex items-center justify-center'>
            <div className='grid grid-cols-4 gap-x-5 gap-y-3  max-w-[1200px]'>
                {categories && categories.map((item) => {
                    return <MainCategoryCard key={item.id} data={item} />
                })}
            </div>
        </div>
    );
}
