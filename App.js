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
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: 'A' },
        { name: newName },
        { name: 'E' }
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>First React App</h1>
        <button onClick={ () => this.switchNameHandler('D')}>Switch Names</button>
        <Person 
          name={this.state.persons[0].name} 
          click = {this.switchNameHandler.bind(this, 'F')}
        />
        <Person 
          name={this.state.persons[1].name} 
        />
        <Person 
          name={this.state.persons[2].name} 
        />
      </div>
    );
  }
}

export default App;
