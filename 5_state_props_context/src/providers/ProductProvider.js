import { useMemo, useState } from "react"
import { ProductContext } from "../context/ProductContext"
import data from "../data/database.json"

export default function ProductProvider({ children }) {
    const {products, brands, categories} = data

    const [keyword, setKeyword] = useState('')
    const [brandIds, setBrandIds] = useState([])
    const [categoryId, setCategoryId] = useState(null)
    const [price, setPrice] = useState({min:"", max: ""})


    const filteredProducts = useMemo(()=>{
        return products?.filter(p => {
            const matchName = p.title.toLowerCase().startsWith(keyword.toLowerCase())
            const matchBrand = brandIds.length > 0 ? brandIds.includes(p.brand): true
            const matchCategory = categoryId ? p.category === Number(categoryId): true
            const matchPrice = (!price.min || p.price >= price.min) && (!price.max || p.price <= price.max)

            return matchName && matchBrand && matchCategory && matchPrice
        })
    }, [products, keyword, brandIds, categoryId, price])

    return (
        <ProductContext.Provider 
            value={{
                brands,
                categories,
                filteredProducts,

                keyword,
                brandIds,
                categoryId,
                price,

                setKeyword,
                setBrandIds,
                setCategoryId,
                setPrice
            }}>
            {children}
        </ProductContext.Provider>
    )
}

