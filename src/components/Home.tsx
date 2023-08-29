import { motion } from "framer-motion";
import { ReactElement, useContext, useEffect, useRef } from "react";
import { HiOutlineArrowNarrowDown } from "react-icons/hi";
import { renderCanvas } from "../providers/renderCanvas";
import { ScrollContext } from "../providers/ScrollProvider";


export default function Home(): ReactElement {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <>
      <div className="h-screen bg-gradient-to-b from-gray-900 to-gray-600">
        <motion.div
          className="relative z-10 flex h-screen items-center md:h-[calc(100vh-116px)]"
          animate={{
            transform: `translateY(${progress * 20}vh)`,
          }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <div className="mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
            <div className="-mt-36">
              <div ref={ref} className="flex cursor-default flex-col space-y-2">
                <h1 className="text-5xl font-semibold sm:text-7xl md:text-8xl xl:text-9xl bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
                  React Hooks
                </h1>
                <h2 className="text-3xl font-medium opacity-80 sm:text-6xl md:text-6xl xl:text-7xl">
                  Discover the power and simplicity
                </h2>
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform md:bottom-8">
                <div
                  role="presentation"
                  className="flex cursor-pointer flex-col items-center justify-center"
                  onClick={() => {
                    const intro = document.querySelector("#intro");

                    intro?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <HiOutlineArrowNarrowDown size={20} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <p className="text-center text-base font-semibold">
          Folder Location: src/components/Home.tsx
        </p>
        <canvas
          className="bg-skin-base pointer-events-none absolute inset-0"
          id="canvas"
        ></canvas>
      </div>
      <div className="border-b-2 border-black"></div>
    </>
  );
}
