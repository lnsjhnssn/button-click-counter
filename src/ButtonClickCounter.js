import React, { useState } from "react";
const ButtonClickCounter = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <div>
      <h1>Button Click Counter</h1>
      <p>Count 1: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>Add</button>
      <p>Count 2: {count2}</p>
      <button onClick={() => setCount2(count2 + 1)}>Add</button>
    </div>
  );
};

export default ButtonClickCounter;
