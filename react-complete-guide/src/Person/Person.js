import React from 'react';
// import './Person.css';
import styled from 'styled-components';

const StyleDiv = styled.div`
  width: 60%;
  margin: auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (max-width: 500px) {
    width: 450px;
  }
`;

const person = props => {
  return (
    <StyleDiv>
      <p onClick={props.click}>
        I'm a {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed}></input>
    </StyleDiv>
  );
};

export default person;

// <div className="Person" style={style}>
//   <p onClick={props.click}>
//     I'm a {props.name} and I am {props.age} years old!
//   </p>
//   <p>{props.children}</p>
//   <input type="text" onChange={props.changed}></input>
// </div>
