import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import { BreadScrum } from '../components/BreadScrum/BreadScrum';
import { CategoryFilter } from '../components/Category/CategoryFilter';
import { ProductCard } from '../components/Category/ProductCard';
import { SearchContext } from '../contexts/SearchContext';

export interface ICategoryProps { }

export function SearchPage() {
    const [sort, setSort] = React.useState("choose")
    const [sortedProducts, setSortedProducts] = React.useState<any[]>([])
    const params = useSearchParams()[0].get("query")
    const context = React.useContext(SearchContext)

    React.useEffect(() => {
        if (params || params === "") {
            context?.searchByNameOrCate(params)
        }
    }, [params])

    React.useEffect(() => {
        if (context?.foundProducts) {
            setSortedProducts([...context.foundProducts])
        }
    }, [context?.foundProducts])

    React.useEffect(() => {
        if (sortedProducts.length > 0) {
            const newSortedProducts = [...sortedProducts]
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
                    console.log("nothing")
                    return
                }
            }
            setSortedProducts(newSortedProducts)
        }
    }, [sort, context?.foundProducts])

    return (
        <>
            <div className='flex flex-col w-full gap-5'>
                <BreadScrum />
                <div className='flex flex-col items-center gap-5'>
                    <div className='w-10/12 flex flex-col gap-5'>
                        <p className='text-black font-bold text-xl'>Bạn đang tìm kiếm cho: <span className='text-red-600'>{params}</span></p>
                        {sortedProducts.length > 0 && <p className='text-black font-bold text-xl'>Có {sortedProducts.length} kết quả tìm thấy</p>}

                        <CategoryFilter sort={sort} setSort={setSort} />
                        <div className='flex w-full flex-col gap-5 py-5'>
                            <div className='w-10/12 grid grid-cols-3'>
                                {sortedProducts.length > 0 ? sortedProducts.map((item: any, index: number) => {
                                    return <ProductCard key={index} data={item} />
                                }) : <p className='text-red-600 font-bold text-3xl col-span-3'>Không có sản phẩm phù hợp</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}