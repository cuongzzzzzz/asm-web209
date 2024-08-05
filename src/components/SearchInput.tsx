import { useContext, useState } from "react";
import { SearchContext } from "../contexts/SearchContext";
import { Link } from "react-router-dom";

function SearchInput() {
    const [text, setText] = useState("")
    const searchContext = useContext(SearchContext)
    console.log(searchContext?.foundProducts)

    return (<form className="relative">
        <input className="outline-none rounded w-full h-10 text-black" type="text"
            placeholder="Suchen Sie nach Produkten, Marken und mehr"
            onInput={(e: any) => {

                setText(e.target.value)

            }}
        />
        <div className="absolute top-[50%] translate-y-[-50%] right-3 text-black"

        >
            <Link to={`/search?query=${text}`}> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            </Link>
        </div>

    </form >
    );
}

export default SearchInput;