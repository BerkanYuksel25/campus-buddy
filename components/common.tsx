import Image from "next/image";
import { ButtonHTMLAttributes, HTMLInputTypeAttribute, ReactNode } from "react";

export const Field = ({ type, label }: { type: HTMLInputTypeAttribute; label: string }) => {
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

export const Button = ({
  children,
  type,
  onClick,
}: {
  children: string;
  type: ButtonHTMLAttributes<any>["type"];
  onClick?: () => void;
}) => {
  return (
    <button
      id={children}
      type={type}
      onClick={onClick}
      className="my-8 uppercase text-lg font-semibold leading-5 bg-blue-500 py-5 rounded-full border-zinc-600 hover:bg-blue-400 active:bg-blue-500"
    >
      {children}
    </button>
  );
};

export const CircularButton = ({
  imgSrc,
  altText,
  onClick,
}: {
  imgSrc: string;
  altText: string;
  onClick?: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="h-14 w-14 bg-zinc-300 flex rounded-full p-2 items-center justify-center"
    >
      <Image src={imgSrc} alt={altText} />
    </button>
  );
};

export const Form = ({ children }: { children: ReactNode }) => {
  return (
    <form className="flex flex-col text-white leading-normal tracking-wider gap-4">{children}</form>
  );
};
