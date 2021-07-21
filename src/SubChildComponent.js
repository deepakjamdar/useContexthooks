import React  from 'react';
import { userDetailContext } from './App';
 
function SubChildComponent(props) {
  
    var contextData = React.useContext(userDetailContext);
  
    const {name,age} = contextData;
  
    return (
      <div>
        <h3>This is Sub Child Component</h3>
        <h4>User Name: {name}</h4>
        <h4>User Age: {age}</h4>
      </div>
    )
  }

  export default SubChildComponent;