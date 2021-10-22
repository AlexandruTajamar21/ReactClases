import React, { Component } from "react";

class Deporte extends Component{

    //necesitamos un metodo para poder llamar al metodo del padre

    seleccionarFavorito = () =>{
        //Aqui llamamos de manera explicita al metodo de props del padre
        var depor = this.props.nombre;
        this.props.mostrarFavorito(depor);
    }

    render(){
        return(
            <React.Fragment>
                <li style={{color:"blue"}}>
                    {this.props.nombre}
                    <button onClick={()=> this.seleccionarFavorito()}> Selecciona Favorito </button></li>
            </React.Fragment>
        );
    }

}
export default Deporte;