"use client";

import Link from "next/link";

import Field from "@/components/field";
import Button from "@/components/button";
import CircularButton from "@/components/circular-button";

const SignInPage = () => {
  const ForgotPasswordLink = (
    <Link
      href="/"
      className="self-end uppercase text-neutral-300 text-xs font-normal hover:border-b-blue-500"
    >
      Forgot password?
    </Link>
  );

  const SocialSignOnButtons = (
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

  const SignUpLink = (
    <div className="self-center uppercase text-xs font-semibold">
      Don&apos;t have an account?
      <Link href="/" className="text-blue-500 pl-1">
        Sign up
      </Link>
    </div>
  );

  return (
    <>
      <Field type="email" label="Email address" />
      <Field type="password" label="Password" />
      {ForgotPasswordLink}
      <Button type="submit">Sign in</Button>
      {SocialSignOnButtons}
      {SignUpLink}
    </>
  );
};

export default SignInPage;
