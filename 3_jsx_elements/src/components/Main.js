import React from "react";
import Left from "./Left";
import Right from "./Right";

class Main extends React.Component{
    render(){
        return (
            <section className="container-fluid">
                <div className="row">
                    {this.props.children}
                </div>
            </section>
        )
    }
}

Main.Left = Left
Main.Right = Right

export default Main