import { useProduct } from "../hooks/useProduct";

export default function Search(){
    const {keyword, setKeyword} = useProduct()

    return <input
                type="text"
                placeholder="Search product ..."
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
                />
}