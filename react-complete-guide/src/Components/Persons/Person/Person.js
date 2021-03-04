import React from 'react';
import style from './Person.module.css';

const person = props => {
  return (
    <div className={style.Person}>
      <p onClick={props.click}>
        I'm a {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed}></input>
    </div>
  );
};

export default person;
