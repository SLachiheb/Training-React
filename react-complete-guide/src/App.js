import React from 'react';
import styled from 'styled-components';

import './App.css';
import Person from './Person/Person';

const StyleButton = styled.button`
  background-color: ${props => (props.alts ? 'red' : 'green')};
  color: white;
  font: inherite;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.alts ? 'salmon' : 'lightgreen')};
    color: black;
  }
`;

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
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => this.deletePersonsHandler(index)}
                key={person.id}
                changed={e => this.nameChangeHandler(e, person.id)}
              />
            );
          })}
        </div>
      );
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <StyleButton
          alts={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Click Here
        </StyleButton>
        {persons}
      </div>
    );
  }
}

export default App;
