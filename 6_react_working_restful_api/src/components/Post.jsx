import axios from 'axios'
import { useEffect, useState } from 'react'

function Post() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
                setPosts(response.data)
            } catch (error) {
                console.log(error.message)
            }
        }

        getPosts()
    }, [])

    return (
        <table border={1}>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
            {
                posts?.map(p => (
                    <tr key={p.id}>
                        <td>{p.id}</td>
                        <td>{p.title}</td>
                        <td>{p.body}</td>
                    </tr>
                ))
            }
        </table>
    )
}

export default Post