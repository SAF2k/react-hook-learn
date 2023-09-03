import { useState, useMemo } from "react";
import Container from "./Container";

const CounterSix = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const incrementOne = () => {
    setCountOne(countOne + 1);
  };

  const incrementTwo = () => {
    setCountTwo(countTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i++;
    return countOne % 2 === 0;
  }, [countOne]);

  return (
    <>
      <Container
        BackgroundColor="bg-gradient-to-b from-orange-300 to-red-400"
        ContainerColor="bg-gradient-to-b from-cyan-400 via-gray-400 to-orange-200"
        header="useMemo Hook"
      >
        <div className="text-4xl flex items-center border rounded-xl border-black">
          <div className="flex flex-col items-center justify-center p-6">
            <h1 className="text-3xl">Count One - {countOne}</h1>
            <span>{isEven ? "Even" : "Odd"}</span>
            <button
              className=" text-xl p-2 m-2 bg-blue-400 rounded-md"
              onClick={incrementOne}
            >
              Increment One
            </button>
          </div>
        </div>
        <div className="text-4xl flex items-center border rounded-xl border-black">
          <div className="flex flex-col items-center justify-center p-6">
            <h1 className="text-3xl">Count Two - {countTwo}</h1>
            <button
              className=" text-xl p-2 m-2 bg-blue-400 rounded-md"
              onClick={incrementTwo}
            >
              Increment One
            </button>
          </div>
        </div>
        <p className="text-xl w-[650px]">
          React Hooks using useReducer( ). In this section the counter can
          increment and decrement the value as well as Reset the value to "0"
        </p>
        <p className="text-lg font-semibold pt-3">
          Folder Location: src/components/CounterSix.tsx
        </p>
      </Container>
    </>
  );
};

export default CounterSix;
