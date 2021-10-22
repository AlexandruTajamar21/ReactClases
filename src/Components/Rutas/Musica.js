import { Component } from "react";
import logoMusica from './../Assets/Musica.png'

class Musica extends Component{
    render(){
        return(
            <div>
                <h1> Estoy tocando musica</h1>
                <img src={logoMusica} style={{width: "300px",height:"300px"}}></img>
            </div>
        )
    }
}
export default Musica;