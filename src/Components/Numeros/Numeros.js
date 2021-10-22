import { Component } from "react";
import Numero from './Numero';

class Numeros extends Component{

    state = {
        suma: 0,
        numeros: [4,5],
        estado: true
    }

    sumaNumeros = (num) =>{
        this.setState({
            suma: this.state.suma + num
        });
    }
    restaNumeros = (num) =>{
        this.setState({
            suma: this.state.suma - num
        });
        if (this.state.suma >= 0) {
            
        }
    }

    nuevoNumero = () =>{
        var newNum = parseInt(Math.random() * 100);
        this.state.numeros.push(newNum);
        console.log(newNum);
        this.setState({
            numeros: this.state.numeros
        });
    }

    reiniciaNumero = () =>{
        this.setState({
            suma: 0
        });
    }

    render(){
        return(
            <div>
                {this.state.suma >= 0 ?
                    <h1 style={{color:"green"}}>Resultado</h1>:
                    <h1 style={{color:"red"}}>Resultado</h1>}
                <h1 id={"titulo"} style={{color:"green"}}> La suma es: {this.state.suma}</h1>
                <button onClick={()=> this.nuevoNumero()}> Nuevo Numero</button>
                <button onClick={()=> this.reiniciaNumero()}>Reinicia Numero</button>
                {this.state.numeros.map((numero,index) => {
                    return(<Numero num={numero} key={index} sumaNumeros={this.sumaNumeros} restaNumeros={this.restaNumeros}></Numero>)
                })}
            </div>
            
        )
    }
}
export default Numeros;