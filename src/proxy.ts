import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { serverUserSession } from "./lib/serverUserSession";

export async function proxy(request: NextRequest) {
  const session = await serverUserSession();
  if (session) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:path*",
    "/product/manage",
    "/product/add",
  ],
};
