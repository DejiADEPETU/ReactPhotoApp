import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, NavLink, Redirect, Prompt} from 'react-router-dom';
// import Header from './components/layout/Header';
import About from './components/pages/About';
import './App.css';

const User = (params)=>{
  return <h1> Welcome {params.username}</h1>
}

class App extends Component{
  state ={
    loggedIn:false
  }

  loginHandle = () => {
    this.setState (prevState => ({
      loggedIn: !prevState.loggedIn
    }))
  }

    render() {
      return (
        <Router>
          <div className="App">
            <ul>
              <li>
                <NavLink to ="/" exact activeStyle={
                  {color:'green'}
                }> Home</NavLink>
              </li>
              <li>
              <NavLink to ="/about" exact activeStyle={
                  {color:'green'}
                }> About</NavLink>
              </li>
              <li>
              <NavLink to ="/user/contact" exact activeStyle={
                  {color:'green'}
                }> Contact</NavLink>
              </li>
              <li>
              <NavLink to ="/SignIn" exact activeStyle={
                  {color:'green'}
                }> SignIn</NavLink>
              </li>
            </ul>

            <Prompt
              when={!this.state.loggedIn}
              message= {(location)=>{
                return location.pathname.startsWith('/user') ? "Unthotorized: Are  you Sure?" : true
              }}
              />

            <input type="button" value= {this.state.loggedIn ? 'log out' : 'log in'} onClick={this.loginHandle.bind(this)}/>
 
              <Route path="/" exact strict render={
                () =>{
                  return (<h1> Welcome Home</h1>);
                }
              }/>
              <Route path="/about" exact strict render={
                () =>{
                  return (<h1> This Is AboutUs</h1>);
                }
              }/>

              <Route path="/user/:username" exact strict render={({match})=>(this.state.loggedIn ? ( <User username={match.params.username}/>) : (<Redirect to='/'/>)
            )}/>
          </div>
        </Router>
    );
  }
}

export default App;

