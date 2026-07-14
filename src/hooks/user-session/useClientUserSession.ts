"use client";

import { authClient } from "../../lib/auth-client";

interface CustomUser {
  id: string;
  email: string;
  name: string;
  image?: string | null;
  role?: string;
  status?: string;
  createdAt: Date;
  updatedAt: Date;
  emailVerified: boolean;
}

export const useClientUserSession = () => {
  const { data: session, isPending, error, refetch } = authClient.useSession();

  return {
    session,
    isPending,
    error,
    refetch,
    user: (session?.user as CustomUser) ?? null,
  };
};
