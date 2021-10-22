import { Component } from "react/cjs/react.production.min";
import Cine from "./Rutas/Cine";
import Home from "./Rutas/Home";
import Musica from "./Rutas/Musica";
import Television from "./Rutas/Television";
import {BrowserRouter,Route,Switch} from 'react-router-dom';

class Router extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/cine" component={Cine}></Route>
                    <Route path="/musica" component={Musica}></Route>
                    <Route path="/television" component={Television}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
export default Router;