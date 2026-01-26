import { useEffect, useState } from "react"

// Functional Component
function Left(props){
    // Khai báo 1 state có tên là count
    const [count, setCount] = useState(0)

    // Sử dụng useEffect() Hook để kiểm soát vòng đời của component
    useEffect(()=>{
        return () => {
            console.log('Thời điểm component được gắn vào DOM - mounting')
        }
    }, [])

    return (
        <div className="row">
            <div className="col">
                <h1>Count: {count}</h1>
                <button
                    onClick={()=>setCount(count+1)}
                >Thêm 1</button>
            </div>
        </div>
    )
}

export default Left