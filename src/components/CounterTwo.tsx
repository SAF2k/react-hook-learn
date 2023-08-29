import { useState } from "react";

const CounterTwo = () => {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);

  const incrementOne = () => setCount((prevCount) => prevCount + 1);
  const decrementOne = () =>
    count === 0 ? 0 : setCount((prevCount) => prevCount - 1);
  const reset = () => setCount(initialValue);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  const decrementFive = () => {
    for (let i = 0; i < 5; i++) {
      count <= 5 ? setCount(0) : setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <>
      <div className="flex justify-center h-screen p-6 bg-gradient-to-b from-orange-300 to-red-400">
        <div className="flex justify-center flex-col items-center gap-[50px] h-[calc(100vh-50px)] w-[calc(100vw-510px)] bg-gradient-to-r from-violet-200 to-pink-200 text-black rounded-full">
          <h1 className="text-5xl font-bold pb-12">Use State With Safety</h1>
          <div className="text-4xl flex items-center border rounded-xl border-black">
            <button
              className="border border-black shadow-sm px-4 rounded-l-xl"
              onClick={decrementFive}
            >
              -5
            </button>
            <button className="border-black border px-4" onClick={decrementOne}>
              -
            </button>
            <span className="px-4">{count}</span>
            <button className="border border-black px-4" onClick={incrementOne}>
              +
            </button>
            <button
              className="border border-black shadow-sm px-4 rounded-r-xl"
              onClick={incrementFive}
            >
              -5
            </button>
          </div>
          <button
            className="border border-black text-2xl px-6 py-2 rounded-xl bg-teal-500"
            onClick={reset}
          >
            Reset
          </button>
          <p className="text-xl w-[650px]">
            React Hooks using useState( ). In this section the counter can
            increment and decrement the value as well as Reset the value to "0"
          </p>
          <p className="text-lg font-semibold pt-3">
            Folder Location: src/components/CounterTwo.tsx
          </p>
        </div>
      </div>
      <div className="border-b-2 border-black"></div>
    </>
  );
};

export default CounterTwo;
