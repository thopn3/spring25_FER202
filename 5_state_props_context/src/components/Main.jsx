import { useProduct } from "../hooks/useProduct";

export default function Main() {
    const { filteredProducts } = useProduct()

    return (
        <>
            {
                filteredProducts.length === 0 ? <p>No products found</p> :
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredProducts.map(p => <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.title}</td>
                                <td>{p.price}</td>
                                <td>{p.rating}</td>
                            </tr>)}
                        </tbody>
                    </table>
            }
        </>
    )
}