import Form from "@/components/form";

const SignInLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Form>
      <h1 className="text-white text-4xl text drop-shadow-lg font-bold pb-10">Sign in</h1>
      {children}
    </Form>
  );
};

export default SignInLayout;
