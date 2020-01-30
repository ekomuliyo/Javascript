import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// penggunaan dengan cara method
// function Clicker (){

//   function handleClick(e){
//     e.preventDefault()
//     alert("berhasil di click")
//   }

//   return(
//     <a href="" onClick={handleClick}> Klik </a>
//   )
// }

// penggunaan dengan cara komponent
class Clicker extends Component{
  constructor(props){
    super(props)
    this.state = {
      status : true
    }

    // harus binding method setiap penggunaan this di dalam event
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState(state => ({
      status : !state.status
    }))
  }

  render(){
    return (
      <button onClick={this.handleClick}>
        {this.state.status ? 'ON' : 'OFF'}
      </button>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <Clicker/>
    </div>
  );
}

export default App;
