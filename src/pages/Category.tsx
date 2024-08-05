import axios from 'axios';
import * as React from 'react';
import { Link, useParams } from 'react-router-dom';
import { BreadScrum } from '../components/BreadScrum/BreadScrum';
import { CategoryButton, ICategoryButtonProps } from '../components/Category/CategoryButton';
import { CategoryCard } from '../components/Category/CategoryCard';
import { CategoryFilter } from '../components/Category/CategoryFilter';
import { ProductCard } from '../components/Category/ProductCard';
import { ICategory } from '../components/Maincategory/MainCategory';
import { ProductsContext } from '../contexts/ProductContext';

export interface ICategoryProps {
}

export function Category() {
    const { name } = useParams()
    const [sort, setSort] = React.useState("choose")
    const [categories, setCategories] = React.useState<any>([])
    const [currentProducts, setCurrentProducts] = React.useState<any>(null)

    React.useEffect(() => {
        if (currentProducts && currentProducts.length > 0) {
            const newSortedProducts = [...currentProducts]
            switch (sort) {
                case "nameAsc": {
                    newSortedProducts.sort((a: any, b: any) => a.name.localeCompare(b.name))
                    break;
                }
                case "nameDesc": {
                    newSortedProducts.sort((a: any, b: any) => b.name.localeCompare(a.name))
                    break;
                }
                case "priceAsc": {
                    newSortedProducts.sort((a, b) => a.price - b.price)
                    break;
                }
                case "priceDesc": {
                    newSortedProducts.sort((a, b) => b.price - a.price)
                    break;
                }

                default: {
                    return
                }
            }
            setCurrentProducts(newSortedProducts)

        }
    }, [sort])






    const fetchCategory = async () => {
        try {
            const data = await axios.get("http://localhost:3000/categories")
            setCategories(data.data)
        } catch (error) {
            console.log(error)
        }

    }
    const context1 = React.useContext(ProductsContext)

    const getProductsByCategory = async (name: string | undefined) => {
        if (name != "all") {
            setCurrentProducts(context1?.products.filter((item) => {
                return item.category == name
            }))
        } else {
            setCurrentProducts(context1?.products)
        }



    }

    React.useEffect(() => {
        fetchCategory()

    }, [setCategories])



    React.useEffect(() => {
        getProductsByCategory(name)
    }, [name, context1])




    return (
        <>
            <div className='flex flex-col w-full gap-5'>
                <BreadScrum />
                <div className='flex flex-col items-center gap-5'>
                    <div className='w-10/12'>
                        <div className='grid w-full grid-cols-4 gap-[5rem]  py-10'>
                            {categories.length > 0 && categories.slice(0, 4).map((item: ICategoryButtonProps, index: number) => {
                                return <CategoryButton key={index} id={item.id} name={item.name} imgUrl={item.imgUrl} />

                            })}

                        </div>

                    </div>
                    <div className='w-10/12'>
                        <CategoryFilter sort={sort} setSort={setSort} />
                        <div className='flex w-full gap-5 py-5'>
                            <div className='w-10/12 grid grid-cols-3'>
                                {currentProducts ? currentProducts.map((item: any, index: number) => {
                                    return <ProductCard key={index} data={item} />
                                }) : context1?.products.map((item: any, index: number) => {
                                    return <ProductCard key={index} data={item} />
                                })}


                            </div>
                            <div className='w-2/12 flex flex-col gap-5'>
                                <p className='text-2xl font-bold text-[#505F4E]'>Kategorien</p>
                                <Link to={`/categories/all`}>
                                    <div className='flex gap-3 items-center'>
                                        <input type="checkbox" checked={name == "all"} />
                                        <p>All</p>
                                    </div></Link>
                                {categories && categories.map((item: ICategory) => {
                                    return <Link key={item.id} to={`/categories/${item.name}`}>
                                        <div className='flex gap-3 items-center'
                                            onClick={() => setSort("choose")
                                            }
                                        >
                                            <input type="checkbox" checked={name == item.name} />
                                            <p>{item.name}</p>
                                        </div></Link>
                                })}

                                {categories.length > 0 && <CategoryCard data={categories[0]} />}
                                <div>
                                    <p className='font-bold text-xl my-5'>
                                        Filter By Price

                                    </p>

                                    <div className="slider">
                                        <div className="progress"></div>
                                    </div>
                                    <div className="range-input">
                                        <input type="range" className="range-min" min="0" max="10000" step="100" />
                                        <input type="range" className="range-max" min="0" max="10000" step="100" />
                                    </div>
                                    <div className='flex justify-between my-5 gap-3'>
                                        <p> From $0 to $8000</p>
                                        <p> Filter</p>
                                    </div>
                                </div>
                                <div>
                                    <p className='font-bold text-xl my-5'>
                                        Filter By Size

                                    </p>

                                    <div className="slider">
                                        <div className="progress"></div>
                                    </div>
                                    <div className="range-input">
                                        <input type="range" className="range-min" min="0" max="10000" step="100" />
                                        <input type="range" className="range-max" min="0" max="10000" step="100" />
                                    </div>
                                    <div className='flex justify-between my-5 gap-3'>
                                        <p> From $0 to $8000</p>
                                        <p> Filter</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}
