import React, { useState, useEffect } from 'react';

const Example1 = props => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('[Example1.js] useEffect');
    document.title = `${count} fois`;
  });

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  );
};

export default Example1;
