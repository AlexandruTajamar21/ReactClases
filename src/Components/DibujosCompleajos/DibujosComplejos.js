import { Component } from "react";

class DibujosComplejos extends Component{

    state = {
        nombres: ["Marcos", "Antonio", "Jose"]
    }

    insertarNombre = () =>{

        this.state.nombres.push("Nuevo");
        
        this.setState({
            nombres: this.state.nombres
        });
    }

    render(){
        return(
            <div>
                <h1>Dibujos en bucles</h1>
                {this.state.nombres.map((name, index) =>{
                    return(<h2>{name}</h2>)
                })}
                <button onClick={()=> this.insertarNombre()}>añade nombre</button>
            </div>
        )
    }
}

export default DibujosComplejos;