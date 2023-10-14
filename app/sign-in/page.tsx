import { Metadata } from "next";
import {
  EmailField,
  ForgotPasswordLink,
  PasswordField,
  SignInTitle,
  SignUpLink,
} from "./components/server";
import { SignInButton, SocialSignOnButtons } from "./components/client";
import { Form } from "../components/server";

export const metadata: Metadata = {
  title: "CampusBuddy - Sign in",
  description: "Sign into CampusBuddy to start exploring student services",
};

const SignInPage = () => (
  <Form>
    <SignInTitle />
    <EmailField />
    <PasswordField />
    <ForgotPasswordLink />
    <SignInButton />
    <SocialSignOnButtons />
    <SignUpLink />
  </Form>
);

export default SignInPage;
