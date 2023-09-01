import React from "react";

interface ButtonProps {
  handleClick: () => void;
  children: string;
}

const Button: React.FC<ButtonProps> = ({ handleClick, children }) => {
  console.log(`Rendering button - ${children}`);

  return (
    <div>
      <button
        className="border border-black text-2xl px-6 py-2 rounded-xl bg-teal-500"
        onClick={handleClick}
      >
        {children}
      </button>
    </div>
  );
};

const MemoizedButton = React.memo(Button);

export default MemoizedButton;
