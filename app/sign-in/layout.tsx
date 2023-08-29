import Form from "@/components/form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CampusBuddy- Sign in",
  description: "Sign into CampusBuddy to start exploring student services",
};

const SignInLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Form>
      <h1 className="text-white text-4xl text drop-shadow-lg font-bold pb-10">Sign in</h1>
      {children}
    </Form>
  );
};

export default SignInLayout;
