import React from 'react';

import style from './App.module.css';
import Person from '../components/Persons/Person/Person';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

class App extends React.Component {
  state = {
    persons: [
      { id: 'iugzef', name: 'Max', age: 28 },
      { id: 'lzjdad', name: 'Manu', age: 29 },
      { id: 'ldlzje', name: 'Stephanie', age: 26 },
    ],
    showPerson: false,
  };

  nameChangeHandler = (e, id) => {
    const personId = this.state.persons.findIndex(person => person.id === id);
    const person = {
      ...this.state.persons[personId],
    };
    person.name = e.target.value;
    const persons = [...this.state.persons];
    persons[personId] = person;
    this.setState({
      persons: persons,
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonsHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    let persons = null;
    let btnStyles = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  name={person.name}
                  age={person.age}
                  click={() => this.deletePersonsHandler(index)}
                  changed={e => this.nameChangeHandler(e, person.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );

      btnStyles = style.Red;
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(style.red);
    }
    if (this.state.persons.length <= 1) {
      classes.push(style.bold);
    }

    return (
      <div className={style.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button className={btnStyles} onClick={this.togglePersonsHandler}>
          Click Here
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
