import { useEffect, useState } from "react"

function User(){
    const [users, setUsers] = useState([]);
    
    useEffect(()=>{
        // Gửi yêu cầu tới Back-End: GET /users
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(result => setUsers(result))
    }, [])

    return (
        <ul>
            {
                users?.map(u => <li key={u.id}>{u.name}</li>)
            }
        </ul>
    )
}

export default User