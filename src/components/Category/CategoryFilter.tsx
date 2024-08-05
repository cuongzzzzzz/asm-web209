import { useState } from "react";


export interface ICategoryFilterProps {

}

export function CategoryFilter({ setSort, sort }: { setSort: (sort: string) => void, sort: string }) {
    const [show, setShow] = useState(false)


    return (
        <div className='flex items-center gap-5'>
            <div className='flex items-center gap-3'>
                <p className='text-[18px]'>Sort By :</p>
                <div className='w-[220px] h-[45px] rounded-md border flex justify-between px-3 items-center relative'
                    onClick={() => setShow(!show)} >
                    <p>{
                        sort
                    }</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                    {show && <div className=" absolute w-full z-20  border bg-white top-[100%] left-0">
                        <p className="p-3 hover:bg-slate-300"
                            onClick={() => {
                                setSort("priceAsc")

                            }}
                        >Price asc</p>
                        <p className="p-3 hover:bg-slate-300"
                            onClick={() => {
                                setSort("priceDesc")
                            }}>Price desc</p>
                        <p className="p-3 hover:bg-slate-300"
                            onClick={() => {
                                setSort("nameAsc")
                            }}>name asc</p>
                        <p className="p-3 hover:bg-slate-300"
                            onClick={() => {
                                setSort("nameDesc")
                            }}>name desc</p>
                    </div>}


                </div>
            </div>
            <div className='flex items-center gap-3'>
                <p className='text-[18px]'>Show :</p>
                <div className='w-[220px] h-[45px] rounded-md border flex justify-between px-3 items-center' >
                    <p>Default</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>


                </div>
            </div>
        </div>
    );
}
