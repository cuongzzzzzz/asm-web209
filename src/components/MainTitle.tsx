

export interface IMainTitleProps {
    text: string
}

export function MainTitle(props: IMainTitleProps) {
    return (
        <div className='py-5 border-b w-full flex items-center justify-center'>
            <div className="max-w-[1200px] flex  justify-start w-full"><p className='max font-bold text-[1.875rem] text-[#505F4E] ' >{props.text}</p></div>
        </div>
    );
}
