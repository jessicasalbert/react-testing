import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  const [count, setCount] = React.useState(0)
  const [error, setError] = React.useState(false)
  return (
    <div data-test='component-app'>
      <h1 
      data-test='counter-display'>The count is currently&nbsp;
        <span data-test="count">{count}</span>
      </h1>
      { error ? <h2 data-test='error-msg'>Cannot go below 0</h2> : null}
      <button onClick={ () => {setCount(count + 1); setError(false)}} data-test='increment-button'>Increment counter</button>
      <button data-test='decrement-button' onClick={ () => count > 0 ? setCount(count - 1) : setError(true) }>Decrement counter</button>
    </div>
    
  );
}

export default App;
