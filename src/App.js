import React, { Component } from 'react';
import './App.css';
import CalGrid from './components/CalGrid';
import Header from './components/Header';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Header />
        <div className="main">
        <CalGrid />
        </div>
      </div>
    );
  }
}

export default App;
