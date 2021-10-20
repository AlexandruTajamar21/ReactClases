import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import ContadorUseState from './Components/ContadorUseState/ContadorUseState';

ReactDOM.render(
  <div className="App">
    <ContadorUseState Inicio="25"/>
    <ContadorUseState Inicio="13"/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
