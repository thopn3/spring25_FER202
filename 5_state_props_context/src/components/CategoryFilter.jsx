import { useProduct } from "../hooks/useProduct";

export default function CategoryFilter(){
    const {categories, categoryId, setCategoryId} = useProduct()

    return (
        <>
            <h3>Category:</h3>
            <select value={categoryId || ""}
                onChange={e => setCategoryId(e.target.value || null)}>
                    <option value="">All Categories</option>
                    {
                        categories.map(c => <option value={c.id} key={c.id}>
                            {c.name}
                        </option>)
                    }
            </select>
            <hr/>
        </>
    )
}