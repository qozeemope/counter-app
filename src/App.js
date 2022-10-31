import React from "react";

function App() {
  const [count, setCount] = React.useState(0);

  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function minus() {
    setCount((prevCount) => prevCount - 1);
  }

  function reset() {
    setCount(0);
  }
  return (
    <div className="counter--app">
      <div className="counter">
        <button className="btn-1" onClick={minus}>
          -
        </button>
        <div>
          <h1 className="count">{count}</h1>
        </div>
        <button className="btn-2" onClick={add}>
          +
        </button>
      </div>
      <button className="reset" type="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default App;
