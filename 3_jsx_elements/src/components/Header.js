import React from "react";

class Header extends React.Component{
    render(){
        return (
            <header>
                {/* Nhũng mã JS để đọc nội dung của component khi gọi */}
                {this.props.children}
            </header>
        )
    }
}

export default Header