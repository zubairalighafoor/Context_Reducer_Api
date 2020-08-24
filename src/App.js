import React, { useState } from 'react';
import './App.css';
import Parent from './Parent.js';
import ProjectOwner from './ProjectOwner';
import CounterContext from './CounterContext.js'

function App() {
  let countState=useState(0);
  return (
    <CounterContext.Provider value={countState}>
      <div className="App">
        <header className="App-header">
          <Parent />
          <ProjectOwner />
        </header>
      </div>
    </CounterContext.Provider>
  );
}

export default App;
