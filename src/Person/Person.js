import React from 'react';

const person = (props) => {
    return(
        <div>
            <p onClick = {props.click}>I'm {props.name} and I am {Math.floor(Math.random() * 100)} years old</p>
            <input type="text" onChange={props.changeName} />
        </div>
        
    ) 
}

export default person;