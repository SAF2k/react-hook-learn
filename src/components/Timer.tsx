import { useState, useEffect } from "react";
import Container from "./Container";

const Timer = () => {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);

  useEffect(() => {
    setTimeout(() => {
        if(sec === 60) {
            setSec(0);
            setMin((prevMin) => prevMin + 1);
        } else {
            setSec((prevSec) => prevSec + 1);
        }
        if(min === 60) {
            setMin(0);
            setHour((prevHour) => prevHour + 1);
        }
    }, 1000);
  }, [sec, min, hour]);

  return (
    <>
      <Container
        BackgroundColor="bg-gradient-to-b from-rose-100 via-gray-400 to-slate-800"
        ContainerColor="text-black bg-gradient-to-r from-violet-200 to-pink-200"
        header="UseEffect"
      >
        <div className="flex items-center flex-col gap-5 rounded-xl">
          <h2 className="text-4xl font-semibold">
            Timer {hour} : {min} : {sec}
          </h2>
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
          Folder Location: src/components/Timer.tsx
        </p>
      </Container>
      <div className="border-b-2 border-black"></div>
    </>
  );
};

export default Timer;
