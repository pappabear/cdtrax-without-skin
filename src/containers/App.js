import React, { Component } from 'react';
import logo from './../logo.svg';
import './App.css';
import Banks from './Banks'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to CDTrax</h1>
          <h3>Mortagage Banking and Lending Compliance Will Blow Your MIND</h3>
        </header>
        <p className="App-intro">&nbsp;</p>

        <div>
          <Banks />
        </div>

      </div>
    );
  }
}

export default App;
