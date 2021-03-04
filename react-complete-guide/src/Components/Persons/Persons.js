import React, { Component } from 'react';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Person from './Person/Person';

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Person.js] getDerivedStateFromProps');
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Person.js] shouldComponentUpdate...');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Person.js] getSnapshotBeforeUpdate...');
    return { message: 'Snapshot' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Person.js] componentDidUpdate...');
    console.log(snapshot);
  }

  render() {
    console.log('[Person.js] rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <ErrorBoundary key={person.id}>
          <Person
            name={person.name}
            age={person.age}
            click={() => this.props.clicked(index)}
            changed={e => this.props.changed(e, person.id)}
          />
        </ErrorBoundary>
      );
    });
  }
}

export default Persons;
