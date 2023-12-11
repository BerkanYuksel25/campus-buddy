import { Field } from "../components/server/field";
import { Form } from "../components/server/form";
import { Title } from "../components/server/title";
import { SignUpButton } from "./components/client/sign-up-button";

const SignUpPage = () => {
  return (
    <Form>
      <Title>Sign up</Title>
      <Field type="text">Name</Field>
      <Field type="email">Email address</Field>
      <Field type="password">New password</Field>
      <SignUpButton />
    </Form>
  );
};

export default SignUpPage;
