import React, { Component, Fragment } from 'react';
import style from './Person.module.css';
import withClass from './../../hoc/withClass';
import PropTypes from 'prop-types';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    return (
      <Fragment className={style.Person}>
        <p onClick={this.props.click}>
          I'm a {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed}></input>
      </Fragment>
    );
  }
}

Person.prototype = {
  name: PropTypes.string,
  age: PropTypes.number,
  click: PropTypes.func,
  changed: PropTypes.func,
};

export default withClass(Person, style.Person);

// return [
//   <p onClick={this.props.click}>
//     I'm a {this.props.name} and I am {this.props.age} years old!
//   </p>,
//   <p>{this.props.children}</p>,
//   <input type="text" onChange={this.props.changed}></input>,
// ];

// return (
//   <div className={style.Person}>
//     <p onClick={this.props.click}>
//       I'm a {this.props.name} and I am {this.props.age} years old!
//     </p>
//     <p>{this.props.children}</p>
//     <input type="text" onChange={this.props.changed}></input>
//   </div>
// );
