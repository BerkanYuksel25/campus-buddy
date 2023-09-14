import { Field } from "@/app/components/server";
import Link from "next/link";

export const Title = () => (
  <h1 className="text-white text-4xl text drop-shadow-lg font-bold pb-10">
    Sign in
  </h1>
);

export const EmailField = () => <Field type="email" label="Email address" />;

export const PasswordField = () => <Field type="password" label="Password" />;

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
    <Link href="/" className="text-blue-500 pl-1">
      Sign up
    </Link>
  </div>
);
