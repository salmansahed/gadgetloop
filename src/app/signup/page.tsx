export const metadata = {
  title: "Sign Up",
};

import { redirect } from "next/navigation";
import SignUpForm from "../../components/auth/SignUpForm";
import { auth } from "../../lib/auth";
import { headers } from "next/headers";

const SignUpPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    return redirect("/");
  }
  return (
    <div className="flex items-center justify-center py-20 min-h-screen px-3">
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
