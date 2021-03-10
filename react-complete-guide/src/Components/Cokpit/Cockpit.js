import React, { useEffect, useRef } from 'react';

import style from './Cockpit.module.css';

const Cockpit = props => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // http request...
    // setTimeout(() => {
    //   alert('Change of attribute props.persons !');
    // }, 1000);

    toggleBtnRef.current.click();

    return () => {
      // clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');

    return () => {
      console.log('[Cockpit.js] 2nd cleanup work in useEffect');
    };
  }, []);

  const classes = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = style.Red;
  }

  if (props.personsLength <= 2) {
    classes.push(style.red);
  }
  if (props.personsLength <= 1) {
    classes.push(style.bold);
  }

  return (
    <div className={style.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Click Here
      </button>
      <button onClick={props.login}> Log in </button>
    </div>
  );
};

export default React.memo(Cockpit);
