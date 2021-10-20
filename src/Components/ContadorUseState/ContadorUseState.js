import {Component} from "react";

function miFuncion(){
    console.log("soy una funcion de la clase")
}

 class ContadorUseState extends Component{
    //Para declarar variables o metodos no se utiliza ni var ni const ni nada
    
    state= {valor:1};
    cont = 1;
    incrementarContador = () =>{
        this.cont++;
        console.log("Contador: " + this.cont);
    }
    incrementarValor = () =>{
        this.setState({valor: this.state.valor+1});
    }

    render(){

        var valor = 14;
        const miMetodo = () =>{
            valor +=1;
            console.log("soy el metodo render con el valor " + valor);
        }

        

        return(
            <div>
                <h1>Primer Componente JSX</h1>
                <h2 style={{color:"blue"}}>Inicio: {this.props.Inicio}</h2>
                <h2 style={{color:"blue"}}> Valor: {this.state.valor}</h2>
                <button onClick={()=>{
                    miMetodo();
                    miFuncion();
                    this.incrementarContador()}}
                    //Si el metodo esta en render()
                    //La llamada se realiza como siempre
                >Pulsa</button>
                <button onClick={()=> this.incrementarValor()}>Incrementar Valor</button>
            </div>
        );
    }
 }
export default ContadorUseState;