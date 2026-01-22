import React from "react";

class Header extends React.Component{
    render(){
        return (
            <header className="row" style={{border:"1px solid blue"}}>
                <div className="col-12 col-sm-3 col-md-4" style={{border:"1px solid blue"}}>Header Left</div>
                <div className="col-12 col-sm-6 col-md-4" style={{border:"1px solid blue"}}>Header Main</div>
                <div className="col-12 col-sm-3 col-md-4" style={{border:"1px solid blue"}}>Header Right</div>
            </header>
        )
    }
}

export default Header