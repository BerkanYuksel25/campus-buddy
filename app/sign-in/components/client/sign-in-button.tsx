"use client";

import { Button } from "@/app/components/client/button";

export const SignInButton = () => (
  <Button
    onClick={(event) => {
      event.preventDefault();
      console.log("Sign in clicked");
    }}
  >
    Sign in
  </Button>
);
