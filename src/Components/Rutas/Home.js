import { Component } from "react";
import logohome from './../Assets/Home.png'


class Home extends Component{
    render(){
        return(
            <div>
                <h1> Estoy en casa</h1>
                <img src={logohome} style={{width: "300px",height:"300px"}}></img>
            </div>
        )
    }
}
export default Home;