import React from 'react';

const authContext = React.createContext({
  authenticated: false,
  login: () => {},
});

console.log(authContext);

export default authContext;
