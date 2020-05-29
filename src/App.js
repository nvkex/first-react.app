import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'A' },
      { name: 'B' },
      { name: 'C' }
    ]
  }
  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'A' },
        { name: 'D' },
        { name: 'E' }
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>First React App</h1>
        <button onClick={this.switchNameHandler}>Switch Names</button>
        <Person name={this.state.persons[0].name} />
        <Person name={this.state.persons[1].name} />
        <Person name={this.state.persons[2].name} />
      </div>
    );
  }
}

export default App;
