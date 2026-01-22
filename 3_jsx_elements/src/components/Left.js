import React from "react";
import "./Left.css"

import data from '../database.json';
class Left extends React.Component{
    
    render(){
        return (
            <article
                className="col-12 col-sm-7 col-md-9" 
                style={{color:"red", fontSize:"20pt", border:"1px solid red"}}>
                {/* 
                    Q1. Hiển thị các sản phẩm gồm: Id, Title, Price, Rating, Stock (In Stock | Out Stock (Nếu Stock=0))
                    -> Hiển thị dạng table có định dạng css
                */}
                <h3 style={{background: "yellow", color:"red"}}>Q1</h3>
                

                {/* 
                    Q2. Hiển thị các sản phẩm theo thứ tự giảm dần của Price. Với mỗi sản phẩm gồm các thông tin:
                    Id, Title, Price, Rating, Stock (In Stock | Out Stock (Nếu Stock=0))
                    -> Hiển thị dạng table
                */}


                {/* 
                    Q3. Hiển thị các sản phẩm thuộc danh mục "smartphone" và của thương hiệu "apple"  
                */}


                {/* 
                    Q4. Hiển thị các sản phẩm, với mỗi sản phẩm gồm thông tin:
                        Id, Title, Price, Rating, Stock (In Stock | Out Stock (Nếu Stock=0)), CategoryName, BrandName
                */}
            </article>
        )
    }
}

export default Left