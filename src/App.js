import React from 'react';
import Name from './Name';
import Surname from './Surname';

function App() {
  const names = ['Alex', 'Tomas', 'Henry'];
  const surnames = ['Green', 'Anderson', 'Wood'];

  return (
    <div className="App">
      {names.map((item) => (
        <Name name={item}/>
      ))}      
      {surnames.map((item) => (
        <Surname surname={item}/>
      ))}      
    </div>
  );
}

export default App;
