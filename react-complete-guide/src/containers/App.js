import React from 'react';

import style from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cokpit/Cockpit';
import Example1 from '../components/ExampleReact/Example1';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 'iugzef', name: 'Max', age: 28 },
      { id: 'lzjdad', name: 'Manu', age: 29 },
      { id: 'ldlzje', name: 'Stephanie', age: 26 },
    ],
    showPerson: false,
    showCockpit: true,
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate...');
    return true;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate...');
  }

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
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonsHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <div className={style.App}>
        <Example1 />
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
          />
        ) : null}
        {persons}
      </div>
    );
  }
}

export default App;
