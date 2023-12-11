"use client";

import { Button } from "@/app/components/client/button";

export const SignUpButton = () => (
  <Button
    onClick={(event) => {
      event.preventDefault();
      console.log("Sign up clicked");
    }}
  >
    Sign up
  </Button>
);
