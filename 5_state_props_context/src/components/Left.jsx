import BrandFilter from "./BrandFilter";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";

export default function Left(){
    return (
        <>
            <CategoryFilter/>
            <BrandFilter/>
            <PriceFilter/>
        </>
    )
}