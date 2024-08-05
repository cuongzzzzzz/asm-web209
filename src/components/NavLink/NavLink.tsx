import NavItem from "./NavItem";
import SubMenu from "./SubMenu";

interface Item {
    name: string
    link: string
    submenu: Link[]
}
interface Link {
    name: string
    link: string
}

interface Props {
    data: Item[]
}

function NavLink({ data }: Props) {
    return (
        <>
            {data.map((item, index) => {
                return <div key={index} className="relative group">
                    <NavItem text={item.name} path={item.link} />
                    <div className="absolute hidden  group-hover:block top-[100%] min-w-[150px] bg-white text-black">
                        <SubMenu data={item.submenu} />
                    </div>
                </div>
            })}
        </>
    );
}

export default NavLink;