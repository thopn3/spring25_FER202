import { useProduct } from "../hooks/useProduct";

export default function PriceFilter(){
    const {price, setPrice} = useProduct()

    return (
        <>
            <h3>Price Range:</h3>
            <input 
                type="number"
                placeholder="Min"
                value={price.min}
                onChange={e => setPrice({...price, min: e.target.value})}
                />
            <input 
                type="number"
                placeholder="Max"
                value={price.max}
                onChange={e => setPrice({...price, max: e.target.value})}
                />
        </>
    )
}