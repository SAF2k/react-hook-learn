import { useState, useEffect, } from "react";
import Container from "./Container";


const AutoCounter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
     setTimeout(() => {
         setCount((prevCount) => prevCount + 1);
     }, 1000);
    }, [count])
    
  return (
    <>
      <Container
        BackgroundColor="bg-gradient-to-b from-pink-500 via-fuchsia-400 to-rose-100"
        ContainerColor="text-white bg-gradient-to-r from-blue-800 to-indigo-900"
        header="UseEffect"
      >
        <div className="flex items-center flex-col gap-5 rounded-xl">
          <h2 className="text-4xl font-semibold">Increment by 1 : {count}</h2>
        </div>

        <p className="text-xl w-[calc(100%-20%)]">
          As you can see, the counter is incrementing by 1 every second. This is
          done by using the useEffect hook. The useEffect hook is used to
          perform side effects in a functional component. Side effects are
          anything that affects something outside of the scope of the component,
          such as fetching data, setting up a subscription, or manually changing
          the DOM.
        </p>
        <p className="text-lg font-semibold pt-3">
          Folder Location: src/components/AutoCounter.tsx
        </p>
      </Container>
      <div className="border-b-2 border-black"></div>
    </>
  );
};

export default AutoCounter;
