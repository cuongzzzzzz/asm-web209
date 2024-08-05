function Banner() {
    return (<>
        <div className="relative">
            <div className="bg-gradient-to-r  from-[#B5DCB0]  to-[#F9F3EE] w-full">
                <img src="/banner.png" className="w-full " alt="" />
            </div>
            <div className="absolute inset-0">
                <div className="flex w-full items-center h-full">
                    <div className="w-1/12"></div>
                    <div className="w-6/12 flex flex-col gap-5">
                        <p className="text-[#505F4E] text-[55px] font-bold  line-clamp-2">
                            Wir kümmern uns um Ihre
                            schöner Garten und Haus</p>
                        <p className="text-[#665345]">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s,
                        </p>
                        <div>
                            <button className="border-2 h-[60px] text-[20px] border-[#505F4E] px-10 py-2">Lern mehr</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Banner;