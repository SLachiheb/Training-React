import "./App.css";
import React from "react";
import Person from "./Person/Person";

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <Person name="Max" age="28" />
      <Person name="Manu" age="29">
        My hobbie: Racing
      </Person>
      <Person name="Stephanie" age="26" />
    </div>
  );
}

export default App;
