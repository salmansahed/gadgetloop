import { redirect } from "next/navigation";
import LoginForm from "../../components/auth/LoginForm";
import { Metadata } from "next";
import { serverUserSession } from "../../lib/serverUserSession";

export const metadata: Metadata = {
  title: "Login",
};

const LoginPage = async (): Promise<React.JSX.Element> => {
  const session = await serverUserSession();

  if (session) {
    redirect("/");
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-3">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
