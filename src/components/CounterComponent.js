// CounterComponent.js
import React, { useState } from 'react';

function CounterComponent() {
  // 初始化状态
  const [count, setCount] = useState(0);

  // 增加计数的函数
  const increment = () => {
    setCount(count + 1);
  };

  // 减少计数的函数
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
}

export default CounterComponent;
