import { Component } from "react";

// Class component
class Header extends Component{
    constructor(props){ // props là thuộc tính của đối tượng -> Chứa dữ liệu ban đầu
        super(props)
        // Khái báo 1 biến state -> quản lý trạng thái dữ liệu của component
        this.state = {count: 0}
    }

    // Hàm được gọi tự động khi component này được gắn vào DOM
    componentDidMount(){
        console.log('Được gọi khi component được gắn vào DOM')
    }

    // Được gọi khi count được thay đổi
    componentDidUpdate(){
        console.log('Được gọi khi state: count được thay đổi giá trị')
    }

    componentWillUnmount(){

    }

    increment = () => {
        // Tăng giá trị của count lên 1 đơn vị
        this.setState(prevState => ({count: prevState.count + 1}))
    }
    decrement = () => {
        // Tăng giá trị của count lên 1 đơn vị
        this.setState(prevState => ({count: prevState.count - 1}))
    }

    render(){
        return (
            <div className="row">
                <div className="col">
                    <h1>Count: {this.state.count}</h1>
                    <button
                        onClick={this.increment}
                        >Tăng thêm 1</button>
                    <button
                        onClick={this.decrement}
                        >Giảm đi 1</button>

                </div>
            </div>
        )
    }
}

export default Header