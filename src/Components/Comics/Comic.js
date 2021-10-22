import React from "react";
import { Component } from "react/cjs/react.production.min";
import './Comic.css'

class Comic extends Component{

    render(){
        return(
            <div>
                <h1 style={{color:"blue"}}>
                    {this.props.comic.titulo}
                </h1>
                <button onClick={()=> {
                    var seleccionado = this.props.comic;
                    this.props.seleccionarFavorito(seleccionado);
                }}>seleccionar favorito</button>
                <button onClick={()=> this.props.eliminarComic(this.props.posicion)} style={{backgroundColor:"red"}}> Eliminar comic</button>
                <button onClick={()=> this.props.modificarComic(this.props.posicion)} style={{backgroundColor:"orange"}}> Modificar comic</button>
                <h2 style={{color:"orange"}}>
                    {this.props.comic.descripcion}
                </h2>
                <img src={this.props.comic.imagen}></img>
            </div>
        )
    }
}

export default Comic;