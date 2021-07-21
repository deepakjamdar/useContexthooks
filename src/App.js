import React, { useState } from 'react';
import ChildComponent from './ChildComponent';
import './App.css';

// Create a Context
export var userDetailContext = React.createContext(null);

// It returns an object with 2 values:
// { Provider, Consumer }

function App() {

  var [userDetails, setUserDetails] = useState({
    name: "Deepak",
    age: 27
  });

  return (
    <userDetailContext.Provider value={userDetails}>
      <div className="App">
        <h1>This is the Parent Component</h1><hr />
        <ChildComponent />
      </div>
    </userDetailContext.Provider>
  );


}

export default App;
