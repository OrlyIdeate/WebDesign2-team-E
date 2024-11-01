import { useState } from 'react';

// Bさん

export function Square() {
  const [value, setValue] = useState(null);

  // handleClick関数はCさん
  function handleClick() {
    setValue('X');
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}