import React from 'react';

import style from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cokpit/Cockpit';

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
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

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
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
