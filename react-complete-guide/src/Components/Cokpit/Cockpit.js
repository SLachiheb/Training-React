import React from 'react';

import style from './Cockpit.module.css';

const cockpit = props => {
  const classes = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = style.Red;
  }

  if (props.persons.length <= 2) {
    classes.push(style.red);
  }
  if (props.persons.length <= 1) {
    classes.push(style.bold);
  }

  return (
    <div className={style.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Click Here
      </button>
    </div>
  );
};

export default cockpit;
