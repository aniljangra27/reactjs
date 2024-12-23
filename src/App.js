import './App.css';
import React from 'react';
import customhook from './customhook';

function App() {
  const[count, setCount] = React.useState(0);
  customhook(count);
  const increment = () => {
    setCount(count + 1);
    
  }

  return (
    <div className="App">
      <h1>count: {count}</h1>
      <button onClick={increment} >increment</button>

    </div>
  );
}

export default App;
