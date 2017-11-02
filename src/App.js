import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentContainer from './StudentContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <StudentContainer student="johann"/>

      </div>
    );
  }
}

export default App;
