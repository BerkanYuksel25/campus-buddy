"use client";

import { Button, CircularButton } from "@/app/components/client";

export const SignInButton = () => <Button type="submit">Sign in</Button>;

export const SocialSignOnButtons = () => (
  <div className="flex flex-col items-center uppercase font-semibold gap-4">
    Or
    <div className="flex gap-10">
      <CircularButton
        imgSrc="/g-icon.svg"
        altText="Sign in with Google"
        onClick={() => console.log("Google clicked")}
        width={100}
        height={100}
      />
      <CircularButton
        imgSrc="/x-icon.svg"
        altText="Sign in with X"
        onClick={() => console.log("X clicked")}
        width={100}
        height={100}
      />
      <CircularButton
        imgSrc="/fb-icon.svg"
        altText="Sign in with Facebook"
        onClick={() => console.log("Facebook clicked")}
        width={100}
        height={100}
      />
    </div>
  </div>
);
