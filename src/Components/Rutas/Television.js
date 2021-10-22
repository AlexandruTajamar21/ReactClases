import { Component } from "react";
import logoTv from './../Assets/TV.png'

class Television extends Component{
    render(){
        return(
            <div>
                <h1> Estoy viendo la tele</h1>
                <img src={logoTv} style={{width: "300px",height:"300px"}}></img>
            </div>
        )
    }
}
export default Television;