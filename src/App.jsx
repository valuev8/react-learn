import React from 'react';
import './App.css';

import Functional from "./components/functional/Functional";
import Pure from "./components/pure/Pure";
import CreateElement from "./components/createElement/CreateElement";
import ClassComponent from "./components/class/Class";

function App() {
  return (
    <div className="App">
      { CreateElement }
      <ClassComponent/>
      <Pure/>
      <Functional/>
    </div>
  );
}

export default App;
