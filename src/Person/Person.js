import React from 'react';
import './Person.css'
import Radium from 'radium'
const person = (props) => {
    return(
        <div className="Person">
            <span onClick={props.delete}>&#10006;</span>
            <p onClick = {props.click}>I'm {props.name} and I am {Math.floor(Math.random() * 100)} years old</p>
            <input type="text" onChange={props.changeName}/>
        </div>
        
    ) 
}

export default Radium(person);