import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState();
  return (
    <>
      <div>
        <h2>{count}</h2>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          전구
        </button>
      </div>
    </>
  );
};

export default Counter;
