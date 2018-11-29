import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import countries from './countries.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
        <div className='country-list'>
        
        </div>
      </div>
    );
  }
}

export default App;
