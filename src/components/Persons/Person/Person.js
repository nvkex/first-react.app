import React from 'react';
//import './Person.css';
import styled from 'styled-components';

const StyledDiv = styled.div`
    transition: 0.2s;
    padding: 10px;
    width: 20%;
    min-width:100px;
    margin:20px auto;
    background-color: white;
    border-radius:4px;
    box-shadow: 0 0 6px 1px rgb(214, 214, 214);
    color:rgb(75, 75, 75);


&:hover{
    box-shadow: 0 0 8px 5px rgb(214, 214, 214);
}

span{
    cursor: pointer;
    color:grey;
}

span:hover{
    color:black;
}`;

const person = (props) => {
    
    return(
        //<div className="Person">
            <StyledDiv>
            <span onClick={props.delete}>&#10006;</span>
            <p onClick = {props.click}>I'm {props.name} and I am {Math.floor(Math.random() * 100)} years old</p>
            <input type="text" onChange={props.changeName}/>
            </StyledDiv>
        //</div>
        
    ) 
}

export default person;