import { Metadata } from "next";
import { redirect } from "next/navigation";
import SignUpForm from "../../components/auth/SignUpForm";
import { serverUserSession } from "../../lib/serverUserSession";

export const metadata: Metadata = {
  title: "Sign Up",
};

const SignUpPage = async (): Promise<React.JSX.Element> => {
  const session = await serverUserSession();

  if (session) {
    redirect("/");
  }

  return (
    <div className="flex items-center justify-center py-20 min-h-screen px-3">
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
