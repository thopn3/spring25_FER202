import { useEffect, useState } from "react"

function Left(props) {
    const { dataSource } = props
    return (
        <div className="row">
            <div className="col">
                <h3>Brands:</h3>
                <ul style={{listStyle:"none"}}>
                    {
                        dataSource?.map(b => (
                            <li>
                                <input type="checkbox" key={b.id} value={b.id} />
                                <label style={{marginLeft:"5px"}}>{b.name}</label>
                            </li>
                        ))
                    }
                </ul>

            </div>
        </div>
    )
}

export default Left