import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'

function Home(){
  return <h1>ini halaman Home</h1>
}

function ListUsers(){
  return (
    <div>
      <h1>ini halaman Users</h1>

      <Link to="users/eko">Eko</Link> <br/>
      <Link to="users/andi">Andi</Link>
    </div>
  )
}

function NotFound(){
  return <h1>404, Not Found</h1>
}

function DetailUser({ match }){
  return <h1>ini halaman {match.params.name}</h1>
}

class App extends Component{

  render(){
    return(
      <BrowserRouter>
        <div>
          <nav>
            <li> <Link to='/'>Home</Link></li>
            <li> <Link to='/users'>Users</Link></li>
          </nav>

          <main>
            <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/users' exact component={ListUsers}/>
            <Route path='/users/:name' exact component={DetailUser}/>
            <Route component={NotFound}/>
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
