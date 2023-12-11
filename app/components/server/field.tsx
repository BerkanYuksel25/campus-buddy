import { HTMLInputTypeAttribute } from "react";

export const Field = ({ type, children }: { type: HTMLInputTypeAttribute; children: string }) => {
  return (
    <>
      <label htmlFor={children} className="font-bold">
        {children}
      </label>
      <input
        id={children}
        type={type}
        className="bg-transparent border-b-2 outline-none focus-visible:border-b-blue-500"
      />
    </>
  );
};
