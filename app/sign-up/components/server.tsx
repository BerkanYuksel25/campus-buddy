import { Field, Title } from "@/app/components/server";

export const SignUpTitle = () => <Title>Sign up</Title>;

export const NameField = () => <Field type="text">Name</Field>;

export const BirthDateFields = () => <Field type="date">Birth date</Field>;

export const MobileNumberField = () => <Field type="tel">Mobile number</Field>;

export const EmailField = () => <Field type="email">Email address</Field>;

export const NewPasswordField = () => (
  <Field type="password">New password</Field>
);
