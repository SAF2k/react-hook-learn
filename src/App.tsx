import CounterOne from "./components/CounterOne";
import Name from "./components/Name";
import CounterTwo from "./components/CounterTwo";
import Home from "./components/Home";
import AddItem from "./components/AddItem";
import AutoCounter from "./components/AutoCounter";

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
      </div>
    </>
  );
}

export default App;
