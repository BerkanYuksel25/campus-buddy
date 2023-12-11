import { ReactNode } from "react";

export const Form = ({ children }: { children: ReactNode }) => {
  return (
    <form className="flex flex-col text-white leading-normal tracking-wider gap-4">{children}</form>
  );
};
