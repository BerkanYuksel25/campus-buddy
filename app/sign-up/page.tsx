import { Form } from "../components/server";
import { SignUpButton } from "./components/client";
import {
  BirthDateFields,
  EmailField,
  MobileNumberField,
  NameField,
  NewPasswordField,
  SignUpTitle,
} from "./components/server";

const SignUpPage = () => {
  return (
    <Form>
      <SignUpTitle />
      <NameField />
      <EmailField />
      <NewPasswordField />
      <SignUpButton />
    </Form>
  );
};

export default SignUpPage;
