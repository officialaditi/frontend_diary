import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const incHandler = () => {
    setCount(count + 1);
  };
  const decHandler = () => {
    if (count <= 0) {
      alert("do negative number");
    } else {
      setCount(count - 1);
    }
  };
  const resetHandler = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h3>{count}</h3>
      <button onClick={incHandler}>Increment</button>
      <button onClick={decHandler}>Decrement</button>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};
