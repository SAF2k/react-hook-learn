import { useState } from "react";
import Container from "./Container";

const Name = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <>
      <Container
        BackgroundColor="bg-gradient-to-t from-gray-400 via-orange-100 to-red-400"
        ContainerColor="bg-gradient-to-r from-slate-300 to-slate-500"
        header="useState With Object"
      >
        <div className="flex items-center flex-col gap-5 rounded-xl">
          <label className="text-2xl font-bold" htmlFor="firstName">
            First Name
          </label>
          <input
            className="border-2 border-black rounded-xl px-6 py-1 text-2xl"
            type="text"
            id="firstName"
            value={name.firstName}
            onChange={(e) => setName({ ...name, firstName: e.target.value })}
          />
          <label className="text-2xl font-bold" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="border-2 border-black rounded-xl px-6 py-1 text-2xl"
            type="text"
            id="lastName"
            value={name.lastName}
            onChange={(e) => setName({ ...name, lastName: e.target.value })}
          />
        </div>
        <p className="text-2xl">
          Your First Name is -{" "}
          <span className="font-bold">{name.firstName}</span>
        </p>
        <p className="text-2xl">
          Your Last Name is - <span className="font-bold">{name.lastName}</span>
        </p>

        <p className="text-xl w-[650px]">
          React Hooks using useState( ). In this section the counter can
          increment and decrement the value as well as Reset the value to "0"
        </p>
        <p className="text-lg font-semibold pt-3">
          Folder Location: src/components/Name.tsx
        </p>
      </Container>
    </>
  );
};

export default Name;
