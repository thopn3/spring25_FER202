import { useState } from 'react'
import data from '../database.json'

const Content = () => {
    // Phân rã dữ liệu từ database.json
    const {product, brand, category} = data
    const [products, setProducts] = useState(product)

    return (
        <div className="row">
            <div className="col">
                <h1>List of Products</h1>
                <table className="table table-bordered table-stripped">
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Price</th>
                    </tr>
                    {
                        products?.map(p => (
                            <tr key={p.id}>
                                <td>{p.id}</td>
                                <td>{p.title}</td>
                                <td>{p.price}</td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </div>
    )
}

export default Content