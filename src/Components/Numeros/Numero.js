import React from "react";
import { Component } from "react/cjs/react.production.min";

class Numero extends Component{

    render(){
        return(
            <React.Fragment>
                <h1>{this.props.num}</h1>
                <button onClick={()=> this.props.sumaNumeros(this.props.num)}>Sumar {this.props.num}</button>
                <button onClick={()=> this.props.restaNumeros(this.props.num)}>Restar {this.props.num}</button>
            </React.Fragment>
        )
    }
}

export default Numero;