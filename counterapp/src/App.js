import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState('white');

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    } else {
      alert("Count cannot be negative!");
    }
  };

  const reset = () => {
    setCount(0);
  };

  const changeColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBgColor(randomColor);
  };

  return (
    <div className="App">
      <div style={{ backgroundColor: bgColor, minHeight: '100vh', padding: '20px' }}>
        <h1>Counter: {count}</h1>
        <div>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
        <div>
          <button onClick={changeColor}>Change Background Color</button>
        </div>
      </div>
    </div>
  );
}

export default App;