import { useState } from "react";

const Counter = () => {
  const initialValue = 0
  const [count, setCount] = useState(initialValue);

  const increment = () => (count === 10 ? 10 : setCount(count + 1));
  const decrement = () => (count === 0 ? 0 : setCount(count - 1));
  const reset = () => setCount(initialValue);

  return (
    <>
      <div className="flex justify-center p-6 bg-gradient-to-b from-gray-400 to-orange-300 h-screen">
        <div className="flex justify-center flex-col items-center gap-[50px] h-[calc(100vh-50px)] w-[calc(100vw-510px)] bg-gradient-to-r from-slate-900 to-slate-700 text-white rounded-full">
          <h1 className="text-5xl font-bold underline">Use State</h1>
          <div className="text-4xl space-x-6 flex items-center border rounded-xl ">
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
          <button
            className="border text-2xl px-6 py-2 rounded-xl bg-teal-500"
            onClick={reset}
          >
            Reset
          </button>
          <p className="text-xl w-[650px]">
            React Hooks using useState( ). In this section the counter can
            increment and decrement the value as well as Reset the value to "0"
          </p>
          <p className="text-lg font-semibold pt-3">
            Folder Location: src/components/Counter.tsx
          </p>
        </div>
      </div>
    </>
  );
};

export default Counter;
