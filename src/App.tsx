import React from 'react';
import './App.css';
import{Counter} from "./counter";
import{GreetingList} from "./greetingList";

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <Counter />
      <GreetingList/>
    </div>
  );
}

export default App;

