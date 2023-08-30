import { ReactNode } from "react";

const Form = ({ children }: { children: ReactNode }) => {
  return (
    <form className="flex flex-col text-white leading-normal tracking-wider gap-4">{children}</form>
  );
};

export default Form;
