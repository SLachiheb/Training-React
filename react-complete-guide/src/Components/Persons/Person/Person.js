import React, { Component } from 'react';
import style from './Person.module.css';
import Aux from '../../hoc/Aux';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    return (
      <Aux className={style.Person}>
        <p onClick={this.props.click}>
          I'm a {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed}></input>
      </Aux>
    );
  }
}

export default Person;

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
