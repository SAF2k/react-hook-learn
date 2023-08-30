import { useState, useEffect } from "react";
import Container from "./Container";

const MouserEventToggle = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [display, setDisplay] = useState(true);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const logMousePosition = (e: any) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  const toggleDisplay = () => {
    setDisplay(!display);
  };

  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition);

    return () => {
        window.removeEventListener("mousemove", logMousePosition);
        }
  }, []);

  return (
    <>
      <Container
        BackgroundColor="bg-gradient-to-b from-purple-100 via-yellow-400 to-red-500"
        ContainerColor="text-black bg-gradient-to-r from-emerald-400 to-cyan-400"
        header="useEffect with cleanup"
      >
        <div className="flex items-center flex-col gap-5 rounded-xl">
          <button
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-2 px-4 rounded"
            onClick={toggleDisplay}
          >
            Toggle Display
          </button>
          {display && (
            <h2 className="text-4xl font-semibold">
              X - {x} Y - {y}
            </h2>
          )}
        </div>

        <p className="text-xl w-[650px]">
          As you can see, the counter is incrementing by 1 every second. This is
          done by using the useEffect hook. The useEffect hook is used to
          perform side effects in a functional component. Side effects are
          anything that affects something outside of the scope of the component,
          such as fetching data, setting up a subscription, or manually changing
          the DOM.
        </p>
        <p className="text-lg font-semibold pt-3">
          Folder Location: src/components/MouserEventToggle.tsx
        </p>
      </Container>
    </>
  );
};

export default MouserEventToggle;
