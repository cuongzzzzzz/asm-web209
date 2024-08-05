import { Link } from "react-router-dom";

interface Link {
    name: string
    link: string
}

interface Props {
    data: Link[]
}

function SubMenu({ data }: Props) {
    return (
        <>
            <div className="pl-3 z-10 bg-white">
                <ul className="list-disc px-2 py-1">
                    {data.map((item, index) => {
                        return <Link key={index} to={item.link}><li className="hover:bg-slate-200">{item.name}</li></Link>
                    })}
                </ul>
            </div>
        </>
    );
}

export default SubMenu;