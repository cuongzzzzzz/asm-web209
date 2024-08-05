import { Link } from "react-router-dom";

export interface ICategoryButtonProps {
    id: number
    name: string
    imgUrl: string
}

export function CategoryButton(props: ICategoryButtonProps) {
    return (
        <Link to=
            {`/categories/${props.name}`}>
            <div className='flex justify-center items-center p-[0.45rem] bg-[#D2E8CD] gap-3 rounded max-w-[200px]'
            >

                <img className="w-[50px] h-[50px]" src={props.imgUrl} alt="" />
                <p>{props.name}</p>
            </div >
        </Link>
    );
}
