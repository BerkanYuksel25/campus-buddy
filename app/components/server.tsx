import { HTMLInputTypeAttribute } from "react";
import { ReactNode } from "react";

export const CampusBuddySplash = () => (
  <h1 className="animate-bounce text-white text-4xl text font-bold self-center drop-shadow-lg">
    CampusBuddy
  </h1>
);

export const Title = ({ children }: { children: string }) => (
  <h1 className="text-white text-4xl text drop-shadow-lg font-bold pb-10">{children}</h1>
);

export const Form = ({ children }: { children: ReactNode }) => {
  return (
    <form className="flex flex-col text-white leading-normal tracking-wider gap-4">{children}</form>
  );
};

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
