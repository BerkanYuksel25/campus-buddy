"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export const BackButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  const invalidRoutes = ["/"];

  if (invalidRoutes.some((route) => route === pathname)) {
    return null;
  }

  return (
    <div className="pb-8">
      <button onClick={() => router.back()}>
        <Image src="/back-button.svg" alt="Go back" width={25} height={25} />
      </button>
    </div>
  );
};
