import React from 'react';
import Person from './Person/Person';

const persons = (props) =>  props.persons.map( (person, index) =>{
        return <Person 
          delete = {() => props.crossed(index)}
          name = {person.name}
          key = {person.id}
          />
      });

export default persons;