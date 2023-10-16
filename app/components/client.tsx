"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { ButtonHTMLAttributes } from "react";

export const BackButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  const invalidRoutes = ["/", "/sign-in"];

  if (invalidRoutes.some((route) => route === pathname)) {
    return null;
  }

  return (
    <button onClick={() => router.back()}>
      <Image src="/back-button.svg" alt="Go back" width={25} height={25} />
    </button>
  );
};

export const CircularButton = ({
  imgSrc,
  altText,
  width,
  height,
  onClick,
}: {
  imgSrc: string;
  altText: string;
  width: number;
  height: number;
  onClick?: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="h-14 w-14 bg-zinc-300 flex rounded-full p-2 items-center justify-center"
    >
      <Image src={imgSrc} alt={altText} width={width} height={height} />
    </button>
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
