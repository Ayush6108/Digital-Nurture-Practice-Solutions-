import React from 'react';
import './App.css'; // You can keep or remove this if you don't use it
import GetUser from './Getuser'; // Import your GetUser component

function App() {
  return (
    <div className="App">
      <GetUser /> {/* Render your GetUser component */}
    </div>
  );
}

export default App;