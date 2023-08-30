import { useState, useEffect } from "react";
import Container from "./Container";

const MouseTracker = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const logMousePosition = (e: any) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition);
  }, []);

  return (
    <>
      <Container
        BackgroundColor="bg-gradient-to-b from-slate-800 via-cyan-600 to-purple-100"
        ContainerColor="text-white bg-gradient-to-r from-stone-500 to-stone-700"
        header="Run useEffect only once"
      >
        <div className="flex items-center flex-col gap-5 rounded-xl">
          <h2 className="text-4xl font-semibold">
            X - {x} Y - {y}
          </h2>
        </div>

        <p className="text-xl max-w-[calc(100%-20%)]">
          As you can see, the counter is incrementing by 1 every second. This is
          done by using the useEffect hook. The useEffect hook is used to
          perform side effects in a functional component. Side effects are
          anything that affects something outside of the scope of the component,
          such as fetching data, setting up a subscription, or manually changing
          the DOM.
        </p>
        <p className="text-lg font-semibold pt-3">
          Folder Location: src/components/MouseTracker.tsx
        </p>
      </Container>
    </>
  );
};

export default MouseTracker;
