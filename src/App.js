import React, { Component } from 'react';
import './App.css';
import CalGrid from './components/CalGrid';

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';
// library.add(faPencil);
// library.add(faPencil);

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
