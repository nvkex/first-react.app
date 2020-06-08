import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
    persons: [
      { name: 'A', id: 'asedf'},
      { name: 'B', id: 'hubjj' },
      { name: 'C', id: 'rtyhn' },
      { name: 'D', id: 'uigjk' }
    ],
    showPersons: false
  }

  togglePersonsDisplay = () => {
    let display = this.state.showPersons;
    this.setState({
      showPersons: !display
    });
  }

  deletePerson = (index) => {
    const personsArr = [...this.state.persons];
    personsArr.splice(index, 1);
    this.setState({persons: personsArr});
  }

  render() {

    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: 'none',
      borderRadius: '4px',
      padding: '10px',
      color : 'white',
      cursor: 'pointer',
      boxShadow: '0 0 10px 6px rgb(214, 214, 214)',
      ':hover':{
        backgroundColor:'lightgrey',
        color: 'black'
      }
    };

    let persons = null;
    if( this.state.showPersons ){
      persons = (
        <div>
          <Persons persons = {this.state.persons}
          crossed = {this.deletePerson}/>
        </div>
      );

      style.backgroundColor = 'red';
    }

    return (
      <div className="App">
        <h1>First React App</h1>
        <button
          style = {style}
          onClick={this.togglePersonsDisplay}
        >Toggle Persons</button>
        {persons}
      </div>
      
    );
  }
}

export default App;
