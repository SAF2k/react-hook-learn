import { useState } from "react";

const Name = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <>
      <div className="flex justify-center h-screen p-6 bg-gradient-to-t from-gray-400 via-orange-100 to-red-400">
        <div className="flex justify-center flex-col items-center text-black rounded-3xl gap-[50px] h-[calc(100vh-50px)] w-[calc(100vw-510px)] bg-gradient-to-r from-slate-300 to-slate-500">
          <h1 className="text-5xl font-bold pb-12">useState With Object</h1>
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
            Your Last Name is -{" "}
            <span className="font-bold">{name.lastName}</span>
          </p>

          <p className="text-xl w-[650px]">
            React Hooks using useState( ). In this section the counter can
            increment and decrement the value as well as Reset the value to "0"
          </p>
          <p className="text-lg font-semibold pt-3">
            Folder Location: src/components/CounterTwo.tsx
          </p>
        </div>
      </div>
      <div className="border-b-2 border-black"></div>
    </>
  );
};

export default Name;
