import { useState } from "react";
interface ItemType {
  id: number;
  item: string;
}

const AddItem = () => {
  const [items, setItems] = useState<ItemType[]>([]);
  const [itemName, setItemName] = useState<string>(""); // Provide a type for itemName

  const addItem = () => {
    if (items.length < 5) {
      const newItem: ItemType = {
        id: items.length,
        item: itemName,
      };

      setItems([...items, newItem]);
          setItemName("");
    } else {
      alert("You can only add 5 items");
    }
  };

  const clearItems = () => {
    setItems([]);
  };

  return (
    <>
      <div className="flex justify-center h-screen p-6 bg-gradient-to-t from-pink-500 via-fuchsia-300 to-gray-400">
        <div className="flex justify-center flex-col items-center text-white rounded-3xl gap-[50px] h-[calc(100vh-50px)] w-[calc(100vw-510px)] bg-gradient-to-r from-slate-500 to-slate-800">
          <h1 className="text-5xl font-bold pb-12">useState With Object</h1>
          <div className="flex items-center flex-col gap-5 rounded-xl">
            <label className="text-2xl font-bold" htmlFor="AddItem">
              Item name
            </label>
            <input
              className="border-2 border-black rounded-xl px-6 py-1 text-2xl text-black"
              type="text"
              id="AddItem"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
          </div>
          <div className="space-x-4">
            <button
              className="border px-5 py-2 rounded-xl bg-green-500 text-black hover:bg-opacity-75"
              onClick={addItem}
            >
              Add Item
            </button>

            <button
              className="border px-5 py-2 rounded-xl bg-red-500 text-black hover:bg-opacity-75"
              onClick={clearItems}
            >
              Clear
            </button>
          </div>

          <ul className="text-2xl">
            {items.map((item) => (
              <li key={item.id}>
                {item.id + 1} : {item.item}
              </li>
            ))}
          </ul>

          <p className="text-xl w-[650px]">
            React Hooks using useState( ). In this section the counter can
            increment and decrement the value as well as Reset the value to "0"
          </p>
          <p className="text-lg font-semibold pt-3">
            Folder Location: src/components/AddItem.tsx
          </p>
        </div>
      </div>
      <div className="border-b-2 border-black"></div>
    </>
  );
};

export default AddItem;
