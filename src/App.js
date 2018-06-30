import React, { Component } from 'react';
import './App.css';
import CalGrid from './components/CalGrid';

class App extends Component {

  render() {
    return (
      <div className="app">
        <h1> Hello, Spotify! </h1>
        <CalGrid />
      </div>
    );
  }
}

export default App;
