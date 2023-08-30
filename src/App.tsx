import CounterOne from "./components/CounterOne";
import Name from "./components/Name";
import CounterTwo from "./components/CounterTwo";
import Home from "./components/Home";
import AddItem from "./components/AddItem";
import AutoCounter from "./components/AutoCounter";
import Timer from "./components/Timer";
import MouseTracker from "./components/MouseTracker";

function App() {
  return (
    <>
      <div className="">
        <Home />
        <CounterOne />
        <CounterTwo />
        <Name />
        <AddItem />
        <AutoCounter />
        <Timer />
        <MouseTracker />
      </div>
    </>
  );
}

export default App;
