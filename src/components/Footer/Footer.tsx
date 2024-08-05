import * as React from 'react';

export interface IFooterProps {
}

export function Footer(props: IFooterProps) {
    return (
        <div>
            <div className='relative overflow-hidden z-0 flex flex-col gap-[5rem]'>
                <div className='w-full z-10  flex flex-col gap-10  '>
                    <div className='flex justify-center'>
                        <div className='w-8/12'>
                            <div className='flex justify-start w-6/12'>
                                <p className='text-[2.5rem] text-[#505F4E] font-bold line-clamp-2'>
                                    <span>Etwas abonnieren</span>
                                    <span className='text-black'>*</span>
                                    <br />
                                    <span className='text-black'>_</span>
                                    <span className=''>Unser Newsletter</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center  px-[60px]'>
                        <div className='w-8/12 flex justify-between items-center'>
                            <p className='text-[0.875rem] line-clamp-3 w-[25%]  whitespace-break-spaces'>Get weekly update about our product on your email, no spam guaranteed we promise ✌️</p>

                            <div className='grow flex justify-end'>
                                <div className='relative flex justify-end xl:w-[500px] md:w-[400px]'>
                                    <input type="text" className='w-full max-w-[500px] h-[4rem] px-[4rem] bg-white border-none text-[#57656C]'
                                        placeholder='youremail123@gmail.com'
                                    />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 absolute left-5   translate-y-[-50%] top-[50%]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                    </svg>
                                    <button className='absolute top-[50%] h-[3.5rem] w-[10rem] text-sm font-semibold text-white bg-[#656C66]'>ABONNIEREN</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="/Vector 2 (1).png" className='bottom-[-25%] absolute z-[-10] right-0 ' alt="" />
                </div>
                <div className='w-full z-10 bg-[#053D29] flex items-center  flex-col pb-[6rem]'>
                    <div className='grid grid-cols-4 py-10 text-white font-semibold  w-10/12'>
                        <div></div>
                        <div>Um</div>
                        <div>Hilfe</div>
                        <div>pOLITIK</div>
                    </div>
                    <div className='grid grid-cols-4 w-10/12 gap-3 text-sm text-white'>
                        <div>
                            <p className=' whitespace-pre-wrap'>Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua</p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p>Kontaktiere uns</p>
                            <p>Kontaktiere uns</p>
                            <p>Kontaktiere uns</p>
                            <p>Kontaktiere uns</p>
                            <p>Kontaktiere uns</p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p>Kontaktiere uns</p>
                            <p>Kontaktiere uns</p>
                            <p>Kontaktiere uns</p>
                            <p>Kontaktiere uns</p>
                            <p>Kontaktiere uns</p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p>Kontaktiere uns</p>
                            <p>Kontaktiere uns</p>
                            <p>Kontaktiere uns</p>
                            <p>Kontaktiere uns</p>
                            <p>Kontaktiere uns</p>
                        </div>



                    </div>

                </div>




            </div>
            <div className='bg-[#062F21] flex justify-center py-5'>
                <div className='w-10/12 text-sm text-white flex justify-between items-center'>
                    <p> 2023 hood.de , Inc.</p>
                    <p>Scroll to top</p>
                </div>
            </div>
        </div>
    );
}
