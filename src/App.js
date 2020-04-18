import React, { useState, useMemo } from 'react';
import './App.css';
import Child from "./components/Child";

function App() {
  const [i, setI] = useState(0);

  const onClickHandle = () => {
    setI(i + 1);
  };

  const memoChild = useMemo(() => {
    return <Child />
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h3>Use Memo</h3>
        <h2>i: {i}</h2>
        <button onClick={onClickHandle}>Increment I</button>
        <h3>Normal render</h3>
        <Child />
        <h3>Memo render</h3>
        {memoChild}
      </header>
    </div>
  );
}

export default App;
