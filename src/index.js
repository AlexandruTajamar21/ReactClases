import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import ContadorUseState from './Components/ContadorUseState/ContadorUseState';
import DibujosComplejos from './Components/DibujosCompleajos/DibujosComplejos';
import Deporte from './Components/Deporte/Deporte';
import Deportes from './Components/Deporte/Deportes';
import Numeros from './Components/Numeros/Numeros';
import Comics from './Components/Comics/Comics';
import Home from './Components/Rutas/Home';
import Cine from './Components/Rutas/Cine';
import Musica from './Components/Rutas/Musica';
import Television from './Components/Rutas/Television';
import MenuRutas from './Components/Rutas/MenuRuta';
import Router from './Components/Router'
import FormularioSimple from './Components/Formularios/FormularioSimple';
import Collatz from './Components/Formularios/Collatz';
import TablaMultiplicar from './Components/Formularios/TablaMultiplicar';
import TablaSelect from './Components/Formularios/TablaSelect';
import SeleccionMultiple from './Components/SeleccionMultiple/SeleccionMultiple';

ReactDOM.render(
  <div className="App">
    <MenuRutas/>
    <Router/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
