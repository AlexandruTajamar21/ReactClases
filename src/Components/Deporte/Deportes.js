import { Component } from "react";
import Deporte from "./Deporte";

class Deportes extends Component{

    //Aqui habra un list con los diferentes deportes y sera estatico

    state = {
        seleccionado: ""
        ,deportes:["Padel","Petanca","Futbol","Tenis","Canicas","Curling"]
    };

    

    //Tenemos el metodo del parent
    mostrarFavorito = (deporteFavorito)=> {
        //Tengo que recibir algo del hijo
        console.log("Favorito: " + deporteFavorito);
        {this.setState({
            seleccionado : deporteFavorito
        })}
    };

    insertarDeporte = () =>{
        this.state.deportes.push("Poker");
        this.setState({
            deportes: this.state.deportes
        });
    };

    render(){
        return(
            <div>
                <h2>
                    Su deporte favorito es: 
                    <span style={{color:"red"}}>
                        {this.state.seleccionado}
                    </span>
                </h2>
                <button onClick={this.insertarDeporte}>Nuevo Deporte</button>
                <ul>
                    {this.state.deportes.map((deporte,index) =>{
                        return(<Deporte nombre={deporte} key={index} mostrarFavorito={this.mostrarFavorito}></Deporte>)
                    })}
                </ul>
            </div>
        );
    }

}
export default Deportes;