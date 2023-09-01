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
        header="useState With Object"
      >
        <div className="text-4xl flex items-center justify-center flex-col gap-y-3 p-6 border rounded-xl border-black">
          <Counter text="Age" count={age} />
          <Button handleClick={incrementAge}>Increment Age</Button>
          <Counter text="Salary" count={salary} />
          <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
      </Container>
    </>
  );
};

export default ParentComponent;
