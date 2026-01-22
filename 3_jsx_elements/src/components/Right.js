import React from "react";

// Khai báo tập dữ liệu ban đầu
const brands = ["IPhone", "Samsung Galaxy", "Oppo Reno", "Xiaome ABC"]
const suppliers = {
    Apple: 1000,
    Samsung: 5000,
    Oppo: 500
}

class Right extends React.Component {
    render() {
        return (
            <aside className="col-12 col-sm-5 col-md-3">
                <h3>Brands:</h3>
                <ul>
                    {
                        brands?.map((item, index) => <li key={index}>{item}</li>)
                    }
                </ul>
                <h3>Suppliers</h3>
                <ol>
                    {
                        Object.keys(suppliers)?.map(key => {
                            suppliers[key] += 5
                            return <li key={key}>{key} - {suppliers[key]}</li>
                        })
                    }
                </ol>
            </aside>
        )
    }
}

export default Right