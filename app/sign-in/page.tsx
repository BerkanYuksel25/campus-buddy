import { Metadata } from "next";
import Link from "next/link";
import { Field } from "../components/server/field";
import { Form } from "../components/server/form";
import { Title } from "../components/server/title";
import { SignInButton } from "./components/client/sign-in-button";
import { SocialSignInButtons } from "./components/client/social-sign-in-buttons";

export const metadata: Metadata = {
  title: "CampusBuddy - Sign in",
  description: "Sign into CampusBuddy to start exploring student services",
};

const SignInPage = () => (
  <Form>
    <Title>Sign in</Title>
    <Field type="email">Email address</Field>
    <Field type="password">Password</Field>
    <Link
      href="/"
      className="self-end uppercase text-neutral-300 text-xs font-normal hover:border-b-blue-500"
    >
      Forgot password?
    </Link>
    <SignInButton />
    <SocialSignInButtons />
    <div className="self-center uppercase text-xs font-semibold">
      Don&apos;t have an account?
      <Link href="/sign-up" className="text-blue-500 pl-1">
        Sign up
      </Link>
    </div>
  </Form>
);

export default SignInPage;
