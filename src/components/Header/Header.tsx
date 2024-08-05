import { Link } from "react-router-dom";
import Language from "../Language";
import NavLink from "../NavLink/NavLink";
import SearchInput from "../SearchInput";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { AuthContext } from "../../contexts/AuthContext";

export interface IHeaderProps {
}

export function Header() {
    const cartContext = useContext(CartContext)
    const authContext = useContext(AuthContext)
    const [show, setShow] = useState(false)
    const productCategories = [
        {
            name: "Beleuchtung",
            link: "/beleuchtung",
            submenu: [
                { name: "LED Grow Lampen", link: "/led-grow-lampen" },
                { name: "HPS & MH Lampen", link: "/hps-mh-lampen" },
                { name: "Vorschaltgeräte", link: "/vorschaltgeraete" },
                { name: "Reflektoren", link: "/reflektoren" },
                { name: "Lampenfassungen", link: "/lampenfassungen" },
                { name: "Zeitschaltuhren", link: "/zeitschaltuhren" }
            ]
        },
        {
            name: "Growbox",
            link: "/growbox",
            submenu: [
                { name: "Komplettsets", link: "/komplettsets" },
                { name: "Zelte", link: "/zelte" },
                { name: "Zubehör", link: "/zubehoer" },
                { name: "Homebox", link: "/homebox" },
                { name: "Secret Jardin", link: "/secret-jardin" },
                { name: "G-Tools", link: "/g-tools" }
            ]
        },
        {
            name: "Dünger",
            link: "/duenger",
            submenu: [
                { name: "Wachstum", link: "/wachstum" },
                { name: "Blüte", link: "/bluete" },
                { name: "Biologisch", link: "/biologisch" },
                { name: "Mineralisch", link: "/mineralisch" },
                { name: "Zusätze", link: "/zusaetze" },
                { name: "pH-Regulierung", link: "/ph-regulierung" }
            ]
        },
        {
            name: "Erde & Substrate",
            link: "/erde-substrate",
            submenu: [
                { name: "Erde", link: "/erde" },
                { name: "Substrate", link: "/substrate" },
                { name: "Perlite", link: "/perlite" },
                { name: "Vermiculite", link: "/vermiculite" },
                { name: "Kokos", link: "/kokos" },
                { name: "Tongranulat", link: "/tongranulat" }
            ]
        },
        {
            name: "Töpfe & Behälter",
            link: "/toepfe-behaelter",
            submenu: [
                { name: "Töpfe", link: "/toepfe" },
                { name: "Behälter", link: "/behaelter" },
                { name: "Air Pots", link: "/air-pots" },
                { name: "Smart Pots", link: "/smart-pots" },
                { name: "Pflanzenschalen", link: "/pflanzenschalen" },
                { name: "Anzuchtplatten", link: "/anzuchtplatten" }
            ]
        },
        {
            name: "Bewässerung",
            link: "/bewaesserung",
            submenu: [
                { name: "Bewässerungssysteme", link: "/bewaesserungssysteme" },
                { name: "Pumpen", link: "/pumpen" },
                { name: "Schläuche & Zubehör", link: "/schlaeuche-zubehoer" },
                { name: "Gießkannen", link: "/giesskannen" },
                { name: "Sprühflaschen", link: "/spruehflaschen" },
                { name: "Messgeräte", link: "/messgeraete" }
            ]
        },
        {
            name: "Pflanzen & Gärtnern",
            link: "/pflanzen-gaertnern",
            submenu: [
                { name: "Samen", link: "/samen" },
                { name: "Stecklinge", link: "/stecklinge" },
                { name: "Jungpflanzen", link: "/jungpflanzen" },
                { name: "Dünger", link: "/duenger" }, // Có thể liên kết đến danh mục "Dünger"
                { name: "Werkzeuge", link: "/werkzeuge" },
                { name: "Pflanzenschutz", link: "/pflanzenschutz" }
            ]
        },
        {
            name: "Lüftung & Klimaanlage",
            link: "/lueftung-klimaanlage",
            submenu: [
                { name: "Ventilatoren", link: "/ventilatoren" },
                { name: "Abluftventilatoren", link: "/abluftventilatoren" },
                { name: "Umluftventilatoren", link: "/umluftventilatoren" },
                { name: "Klimageräte", link: "/klimageraete" },
                { name: "Luftbefeuchter", link: "/luftbefeuchter" },
                { name: "Luftentfeuchter", link: "/luftentfeuchter" }
            ]
        }
    ];
    console.log(cartContext.cartQuantity)
    return (
        <div className="h-[140px] z-10 text-white bg-gradient-to-r from-[#4E7C32] to-[#6653458a] flex items-center justify-center">
            <div className="w-10/12 flex flex-col gap-3 ">
                <div className="flex items-center justify-center w-full">
                    <div className="w-1/6"></div>

                    <div className="w-8/12"><SearchInput /></div>
                    <div className="flex w-4/12 items-center justify-between">
                        <div className="w-1/6"></div>
                        <Language />
                        <div className="flex gap-3">
                            <div className="flex gap-3 relative"
                                onClick={() => {
                                    setShow(!show)
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                                <span>Account</span>

                                {show && <div className=" absolute top-[100%] w-[150px] z-[20] py-3 border rounded bg-white text-black flex flex-col"
                                    onClick={() => {
                                        setShow(!show)
                                    }}
                                >
                                    {!authContext?.user?.user?.id && <>
                                        <Link to={"/login"} className="p-3 hover:bg-slate-400 ">Login</Link>
                                        <Link to={"/register"} className="p-3 hover:bg-slate-400 ">Register</Link></>}
                                    {authContext?.user?.user?.id && <p
                                        onClick={() => {
                                            authContext.logOut()
                                        }}
                                        className="p-3 hover:bg-slate-400">Logout</p>}
                                </div>}
                            </div>
                            <div className=" relative">
                                <Link to={"/cart"} className="flex gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                    </svg>
                                    <div className=" absolute w-5 h-5 rounded-full bg-red-600 left-3 top-[-10px] flex text-sm justify-center items-center">{cartContext?.cartQuantity ? cartContext?.cartQuantity : 0}</div>
                                    <span>Cart</span></Link>
                            </div>
                        </div></div>
                </div>
                <div className="border border-b"></div>
                <div className="flex items-center  justify-evenly text-sm">
                    <NavLink data={productCategories} />
                </div>

            </div>
        </div>
    );
}
