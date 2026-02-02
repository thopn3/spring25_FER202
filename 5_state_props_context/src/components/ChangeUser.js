import { useUser } from "../hooks/useUser";

export default function ChangeUser(){
    const {user, setUser} = useUser();

    return (
        <h3>Tên bạn là: {user.name}</h3>
    )
}