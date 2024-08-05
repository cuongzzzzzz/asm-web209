import { useContext } from "react";
import Banner from "../components/Banner/Banner";
import { BestSeller } from "../components/BestSeller/BestSeller";
import { Category } from "../components/Category/Category";
import { MainCatrgory } from "../components/Maincategory/MainCategory";
import { MainTitle } from "../components/MainTitle";
import { ProductsContext } from "../contexts/ProductContext";

function Home() {
    const context = useContext(ProductsContext)

    const data = context?.products.slice(0, 4)



    return (<>


        <Banner />
        <MainTitle text="best sellers" />
        <BestSeller data={data} />
        <Category />
        <MainTitle text="Kategorien" />
        <MainCatrgory />




    </>);
}

export default Home;