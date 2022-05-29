import React, { useState } from 'react';

export default function NewCounter() {
  const [count, setCount] = useState(0);
  const [previusClicks, setPreviusClicks] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const inputChange = (event) => {
    setPreviusClicks(Number(event.target.value));
  };

  return (
    <div>
      <label>
        Previus clicks:
        <input type="text" value={previusClicks} onChange={inputChange}></input>
      </label>
      <p>You clicked {previusClicks + count} times</p>
      <button onClick={increase}>Click Me</button>
    </div>
  );
}
