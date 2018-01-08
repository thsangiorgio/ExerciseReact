import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
  render() {
    var courses = [
      {name: 'iOS10 dev course', price: 199},
      {name: 'Reactjs', price: 199},
      {name: 'Javascript', price: 199},
      {name: 'Bootstrap', price: 199},
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Course Purchase page</h2>
        </header>
        <Coursesales items={courses}/>

      </div>
    );
  }
}

export default App;
