"use client";

import { ButtonHTMLAttributes, FormEvent } from "react";

export const Button = ({
  children,
  type,
  onClick,
}: {
  children: string;
  type?: ButtonHTMLAttributes<any>["type"];
  onClick?: (event: FormEvent) => void;
}) => {
  return (
    <button
      id={children}
      type={type}
      onClick={onClick}
      className="my-4 uppercase text-lg font-semibold leading-5 bg-blue-500 py-5 rounded-full border-zinc-600 hover:bg-blue-400 active:bg-blue-500"
    >
      {children}
    </button>
  );
};
