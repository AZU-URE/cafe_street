import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  // const token: any = request.cookies.get("token") || null;
  // const role = findingUserType(token);
  // console.log(role);
  const path = request.nextUrl.pathname;
  const publicPath =
    path === "/signin" || path === "/signup" || path === "/verifyEmail";

  // if (publicPath && token) {
  if (publicPath) {
    return NextResponse.redirect(new URL("/menu", request.url));
  }

  // if (!publicPath && !token) {
  if (!publicPath) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
  // return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/menu"],
};
