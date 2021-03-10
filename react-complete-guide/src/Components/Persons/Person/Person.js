import React, { Component, Fragment } from 'react';
import style from './Person.module.css';
import withClass from './../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log(this.context);
  }

  render() {
    console.log('[Person.js] rendering...');
    return (
      <Fragment>
        {this.context.authenticated ? (
          <p>Authenticated !</p>
        ) : (
          <p>Please log in</p>
        )}
        <p onClick={this.props.click}>
          I'm a {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          // ref={inputEl => {
          //   this.inputElement = inputEl;
          // }}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
        ></input>
      </Fragment>
    );
  }
}

Person.proptype = {
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
