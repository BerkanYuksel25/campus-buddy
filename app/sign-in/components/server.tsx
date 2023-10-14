import { Field, Title } from "@/app/components/server";
import Link from "next/link";

export const SignInTitle = () => <Title>Sign in</Title>;

export const EmailField = () => <Field type="email">Email address</Field>;

export const PasswordField = () => <Field type="password">Password</Field>;

export const ForgotPasswordLink = () => (
  <Link
    href="/"
    className="self-end uppercase text-neutral-300 text-xs font-normal hover:border-b-blue-500"
  >
    Forgot password?
  </Link>
);

export const SignUpLink = () => (
  <div className="self-center uppercase text-xs font-semibold">
    Don&apos;t have an account?
    <Link href="/sign-up" className="text-blue-500 pl-1">
      Sign up
    </Link>
  </div>
);
