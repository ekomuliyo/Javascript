import React from 'react';
import logo from './logo.svg';
import './App.css';

// komponen dan properti

function Biodata(props){
  return <span>{props.umur}</span>
}

function Sapaan(props){
  return <h1>Haii {props.nama}, umur <Biodata umur={props.umur}/></h1>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Sapaan nama="Andi" umur="21"/>
        <Sapaan nama="Budi" umur="22"/>
        <Sapaan nama="Aan" umur="23"/>

      </header>
    </div>
  );
}

export default App;
