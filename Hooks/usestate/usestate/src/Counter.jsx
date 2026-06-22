import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(500);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>
        <h1>{count}</h1>
      </div>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
};

export default Counter;