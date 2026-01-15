import React from "react";

class Footer extends React.Component{
    render(){
        return (
            <footer>
                {/* Nhũng mã JS để đọc nội dung của component khi gọi */}
                {this.props.children}
            </footer>
        )
    }
}

export default Footer