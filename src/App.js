import React, { useState } from 'react';
import './App.css';


function App() {

  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(input + e.target.value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const clear = () => {
    setInput("");
  };

  return (
    <>
      <div className="header">
      <a href="https://gangforcode.com/" target="_blank" rel="noreferrer noopener" class="button-style">
          Back to Tutorial
        </a>
      </div>
      <div className="calculator">
        <div className="display">{input}</div>
        <div className="keypad">
          <button onClick={clear}>Clear</button>
          <button onClick={handleInput} value="/">/</button>
          <button onClick={handleInput} value="*">*</button>
          <button onClick={handleInput} value="-">-</button>
          <button onClick={handleInput} value="+">+</button>
          <button onClick={handleInput} value="9">9</button>
          <button onClick={handleInput} value="8">8</button>
          <button onClick={handleInput} value="7">7</button>
          <button onClick={handleInput} value="6">6</button>
          <button onClick={handleInput} value="5">5</button>
          <button onClick={handleInput} value="4">4</button>
          <button onClick={handleInput} value="3">3</button>
          <button onClick={handleInput} value="2">2</button>
          <button onClick={handleInput} value="1">1</button>
          <button onClick={handleInput} value="0">0</button>
          <button onClick={handleInput} value=".">.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </>
  );
}

export default App;
