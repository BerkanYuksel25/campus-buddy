"use client";

import { useRouter } from "next/navigation";
import { Button } from "./button";

export const GetStartedButton = () => {
  const router = useRouter();

  return (
    <Button type="button" onClick={() => router.push("/sign-in")}>
      Get started
    </Button>
  );
};
