import { useUser } from "../hooks/useUser";

export default function Profile(){
    const {user, setUser} = useUser()

    return (
        <>
            <h2>Xin chào: {user.name}</h2>
            <button onClick={()=>setUser({...user, name: 'Phạm Ngọc Thọ'})}>Đổi tên</button>
        </>
    )
}