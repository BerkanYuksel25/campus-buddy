"use client";

import Image from "next/image";

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
