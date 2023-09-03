import { useReducer } from "react";
import Container from "./Container";

type Action =
  | { type: "increment", value: number }
  | { type: "decrement", value: number }
  | { type: "reset" };

const reducer = (state: number, action: Action) => {
  switch (action.type) {
    case "increment":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const initialState = 0;

const CounterFour: React.FC = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Container
        BackgroundColor="bg-gradient-to-b from-orange-200 via-red-500 to-rose-800"
        ContainerColor="text-white bg-gradient-to-r from-stone-500 to-stone-700"
        header="Complex useReducer"
      >
        <div className="text-4xl flex items-center border rounded-xl border-white">
          <button
            disabled={count < 5}
            className="border border-white shadow-sm px-4 rounded-l-xl disabled:opacity-50"
            onClick={() => dispatch({ type: "decrement", value: 5 })}
          >
            -5
          </button>
          <button
            disabled={count <= 0}
            className="border-white border px-4 disabled:opacity-50"
            onClick={() => dispatch({ type: "decrement", value: 1 })}
          >
            -
          </button>
          <span className="px-4">{count}</span>
          <button
            className="border border-white px-4"
            onClick={() => dispatch({ type: "increment", value: 1 })}
          >
            +
          </button>
          <button
            className="border border-white shadow-sm px-4 rounded-r-xl"
            onClick={() => dispatch({ type: "increment", value: 5 })}
          >
            -5
          </button>
        </div>
        <button
          className="border border-white text-2xl px-6 py-2 rounded-xl bg-teal-500"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
        <p className="text-xl w-[650px]">
          React Hooks using useReducer( ). In this section the counter can
          increment and decrement the value as well as Reset the value to "0"
        </p>
        <p className="text-lg font-semibold pt-3">
          Folder Location: src/components/CounterFour.tsx
        </p>
      </Container>
    </>
  );
};

export default CounterFour;
