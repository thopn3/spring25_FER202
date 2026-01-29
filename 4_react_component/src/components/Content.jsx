import { useEffect, useState } from 'react'

const Content = ({ products, categories, brands }) => {
    const [productsData, setProductsData] = useState([])
    const [search, setSearch] = useState("")
    const [msgNotFound, setMsgNotFound] = useState('')

    useEffect(() => {
        if (search) { // Search đã có dữ liệu do người dùng gõ vào text field
            const searchResult = [...products].filter(p => p.title.toLowerCase().startsWith(search.toLowerCase()))
            if (searchResult.length > 0){
                setMsgNotFound('')
                setProductsData(searchResult)
            }
            else
                setMsgNotFound('Product not found!')
        } else {
            setProductsData([...products])
        }
    }, [search])


    return (
        <div className="row">
            <div className="col">
                <h1>List of Products</h1>
                <div>
                    <input
                        onChange={e => setSearch(e.target.value)}
                        placeholder='Enter title to search' />
                </div>
                {
                    msgNotFound ? <>{msgNotFound}</> :
                        <table className="table table-bordered table-stripped">
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Price</th>
                            </tr>
                            {
                                productsData?.map(p => (
                                    <tr key={p.id}>
                                        <td>{p.id}</td>
                                        <td>{p.title}</td>
                                        <td>{p.price}</td>
                                    </tr>
                                ))
                            }
                        </table>
                }

            </div>
        </div>
    )
}

export default Content