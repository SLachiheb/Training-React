import "./App.css";
import React, { useState } from "react";
import Person from "./Person/Person";

const App = (props) => {
  const [p, setPersons] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 },
    ],
  });

  const switchNameHandler = () => {
    return setPersons({
      persons: [
        { name: "Maximilian", age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <Person name={p.persons[0].name} age={p.persons[0].age} />
      <Person name={p.persons[1].name} age={p.persons[1].age}>
        My hobbie: Racing
      </Person>
      <Person name={p.persons[2].name} age={p.persons[2].age} />
      <button onClick={switchNameHandler}>Switch Name</button>
    </div>
  );
};

export default App;
