// Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react function component
const App = () => {
  const buttonText = 'Submit';
  const labelText = 'Enter name:';
  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.getElementById('root'));
