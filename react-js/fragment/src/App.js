import React, { Component } from 'react';

class App extends Component{
  render(){
    return (
      <table>
        <tr>
          <Column />
        </tr>
      </table>
    )
  }
}

class Column extends Component{
  render(){
    return(
      <React.Fragment>
        <td>No</td>
        <td>Nama</td>
        <td>TTL</td>
      </React.Fragment>
    )
  }
}

export default App;
