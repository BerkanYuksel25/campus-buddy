import { HTMLInputTypeAttribute } from "react";

const Field = ({ type, label }: { type: HTMLInputTypeAttribute; label: string }) => {
  return (
    <>
      <label htmlFor={label} className="font-bold">
        {label}
      </label>
      <input
        id={label}
        type={type}
        className="bg-transparent border-b-2 outline-none focus-visible:border-b-blue-500"
      />
    </>
  );
};

export default Field;
