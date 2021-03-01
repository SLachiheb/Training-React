import "./App.css";
import React from "react";

import UserOutput from "./Exercices/UserOutput";

class App extends React.Component {
  state = {
    name: "Sarah",
  };

  changeName(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <UserOutput name={this.state.name} changeName={this.changeName} />
      </div>
    );
  }
}

export default App;

// import "./App.css";
// // import "./Person/Person.css";
// import React from "react";
// import Person from "./Person/Person";

// class App extends React.Component {
//   state = {
//     persons: [
//       { name: "Max", age: 28 },
//       { name: "Manu", age: 29 },
//       { name: "Stephanie", age: 26 },
//     ],
//   };

//   switchNameHandler = (newName) => {
//     this.setState({
//       persons: [
//         { name: newName, age: 28 },
//         { name: "Manu", age: 29 },
//         { name: "Stephanie", age: 27 },
//       ],
//     });
//   };

//   nameChangeHandler = (e) => {
//     console.log(e);
//     this.setState({
//       persons: [
//         { name: "Max", age: 28 },
//         { name: e.target.value, age: 29 },
//         { name: "Stephanie", age: 26 },
//       ],
//     });
//   };

//   render() {
//     const style = {
//       backgroundColor: "white",
//       font: "inherite",
//       border: "3px solid blue",
//       borderRadius: "40px",
//       padding: "8px",
//       cursor: "pointer",
//     };

//     return (
//       <div className="App">
//         <h1>Hi, I'm a React App</h1>
//         <p>This is really working!</p>
//         <button style={style} onClick={() => this.switchNameHandler("Paula")}>
//           Click Here{" "}
//         </button>
//         <Person
//           name={this.state.persons[0].name}
//           age={this.state.persons[0].age}
//           // click={(e) => switchNameHandler}
//           // click={() => this.switchNameHandler("Paul")}
//           click={() => this.switchNameHandler("Paul")}
//           // click={(e) => switchNameHandler("Paul", e)}
//           // click={switchNameHandler.bind(this, "PAUL")}
//         />
//         <Person
//           name={this.state.persons[1].name}
//           age={this.state.persons[1].age}
//           changed={this.nameChangeHandler}
//         >
//           My hobbie: Racing
//         </Person>
//         <Person
//           name={this.state.persons[2].name}
//           age={this.state.persons[2].age}
//         />
//       </div>
//     );
//   }
// }

// export default App;
