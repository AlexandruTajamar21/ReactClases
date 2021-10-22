import { Component } from "react";
import logoCine from '../Assets/Cine.png'

class Cine extends Component{
    render(){
        return(
            <div>
                <h1> Estoy en el Cine</h1>
                <img src={logoCine} style={{width: "300px",height:"300px"}}></img>
            </div>
        )
    }
}
export default Cine;