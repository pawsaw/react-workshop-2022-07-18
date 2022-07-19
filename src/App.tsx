import { useState } from 'react';
import './App.css';
import { Counter, OnValueChanged } from './components/Counter';
import { SimpleName } from './components/SimpleName';
import { Tabs, Tab } from './components/Tabs';




function App() {

  

  return (
    <div className="App">
      <Tabs>
        <Tab label="Foo">
          Here comes foo
        </Tab>
        <Tab label="Bar">
          Here comes bar
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
