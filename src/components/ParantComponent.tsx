import Container from "./Container";
import { useState, useCallback } from "react";
import Counter from "./childComponents/Counter";
import Button from "./childComponents/Button";

const ParentComponent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(5000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <>
      <Container
        BackgroundColor="bg-gradient-to-t from-gray-400 via-orange-100 to-red-400"
        ContainerColor="bg-gradient-to-r from-slate-300 to-slate-500"
        header="useCallback Hook"
      >
        <div className="text-4xl flex items-center justify-center flex-col gap-y-3 p-6 border rounded-xl border-black">
          <Counter text="Age" count={age} />
          <Button handleClick={incrementAge}>Increment Age</Button>
          <Counter text="Salary" count={salary} />
          <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
        <p className="text-xl w-[650px]">
          React Hooks using useReducer( ). In this section the counter can
          increment and decrement the value as well as Reset the value to "0"
        </p>
        <p className="text-lg font-semibold pt-3">
          Folder Location: src/components/ParentComponent.tsx.tsx
        </p>
      </Container>
    </>
  );
};

export default ParentComponent;
