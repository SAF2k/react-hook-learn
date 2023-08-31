import { useReducer } from "react";
import Container from "./Container";

const initialState = 0;

const reducer = (state: number, action: string) => {
  if (action === "increment") {
    return state + 1;
  } else if (action === "decrement") {
    return state - 1;
  } else if (action === "reset") {
    return initialState;
  } else {
    return state; 
  }
};

const CounterThree = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Container
        BackgroundColor="bg-gradient-to-b from-orange-300 to-red-400"
        ContainerColor="text-black bg-gradient-to-r from-violet-200 to-pink-200"
        header="useState With Safety"
      >
        <div className="text-4xl flex items-center border rounded-xl border-black">
          <button
            disabled={count === 0}
            className="border border-black shadow-sm px-4 rounded-l-xl disabled:opacity-50"
            onClick={() => dispatch("decrement")}
          >
            -
          </button>
          <span className="px-4">{count}</span>
          <button
            className="border border-black shadow-sm px-4 rounded-r-xl"
            onClick={() => dispatch("increment")}
          >
            +
          </button>
        </div>
        <button
          className="border border-black text-2xl px-6 py-2 rounded-xl bg-teal-500"
          onClick={() => dispatch("reset")}
        >
          Reset
        </button>
        <p className="text-xl w-[650px]">
          React Hooks using useReducer( ). In this section the counter can
          increment and decrement the value as well as Reset the value to "0"
        </p>
        <p className="text-lg font-semibold pt-3">
          Folder Location: src/components/CounterThree.tsx
        </p>
      </Container>
    </>
  );
};

export default CounterThree;
