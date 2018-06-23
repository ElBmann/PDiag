import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Components/Header/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
         <Header/>
        <header>
          <img src={logo} className="App-logo" alt="logo" />
         
        </header>
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
