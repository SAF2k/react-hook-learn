import CounterOne from "./components/CounterOne";
import Name from "./components/Name";
import CounterTwo from "./components/CounterTwo";
import Home from "./components/Home";
import AddItem from "./components/AddItem";
import AutoCounter from "./components/AutoCounter";
import Timer from "./components/Timer";

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
      </div>
    </>
  );
}

export default App;
