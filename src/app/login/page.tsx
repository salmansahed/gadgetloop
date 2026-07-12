import { headers } from "next/headers";
import { auth } from "../../lib/auth";
import { redirect } from "next/navigation";
import LoginForm from "../../components/auth/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

const LoginPage = async (): Promise<React.JSX.Element> => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

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
