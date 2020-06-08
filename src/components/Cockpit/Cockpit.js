import React from 'react';

const cockpit = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <button
        style={props.styles}
        onClick={props.showPersons}
      >Toggle Persons</button>
    </div>
  );

};

export default cockpit;