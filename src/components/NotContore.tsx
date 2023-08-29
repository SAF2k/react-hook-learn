import { useState } from "react";

const NotCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => (count === 10 ? 10 : setCount(count + 1));
  const decrement = () => (count === 0 ? 0 : setCount(count - 1));

  return (
    <>
      <div className="h-screen">
        <div className="text-4xl space-x-6 flex items-center border rounded-xl">
          <button
            className="border shadow-sm px-5 rounded-l-xl"
            onClick={decrement}
          >
            -
          </button>
          <span>{count}</span>
          <button
            className="border shadow-sm px-5 rounded-r-xl"
            onClick={increment}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default NotCounter;
