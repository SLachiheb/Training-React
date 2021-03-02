import "./App.css";
// import "./Person/Person.css";
import React from "react";
import Person from "./Person/Person";

class App extends React.Component {
  state = {
    persons: [
      { id: "iugzef", name: "Max", age: 28 },
      { id: "lzjdad", name: "Manu", age: 29 },
      { id: "ldlzje", name: "Stephanie", age: 26 },
    ],
    showPerson: false,
  };

  nameChangeHandler = (e) => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: e.target.value, age: 29 },
        { name: "Stephanie", age: 26 },
      ],
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonsHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherite",
      border: "3px solid blue",
      borderRadius: "40px",
      padding: "8px",
      cursor: "pointer",
    };

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
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Click Here
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
