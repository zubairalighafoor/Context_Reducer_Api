import React, { useState } from 'react';
import './App.css';
import Parent from './Parent.js';
import CounterContext from './CounterContext.js'

function App() {
  let countState=useState(0);
  return (
    <CounterContext.Provider value={countState}>
      <div className="App">
        <header className="App-header">
          <Parent />
        </header>
      </div>
    </CounterContext.Provider>
  );
}

export default App;
