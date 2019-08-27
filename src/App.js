import React from 'react';
import './App.css';
import CatContainer from './CatContainer';

function App() {
  return (
    <div className="App">
      <h1>React Testing with Cats</h1>
      <CatContainer size={6}/>
    </div>
  );
}

export default App;
