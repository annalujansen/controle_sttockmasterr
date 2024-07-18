import { NextRequest, NextResponse } from "next/server";
import { getUrlByPath } from "./lib/getUrlByPath";
import { type Session } from "next-auth";
import { env } from "~/env";
import { nextTick } from "process";

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const tokenName = "next-auth.session-token";
  const token = request.cookies.get(tokenName);

  if (pathname.startsWith("/login") && token) {
    const session = (await (
      await fetch(process.env.NEXTAUTH_URL + "/api/auth/session", {
        method: "GET",
        headers: {
          ...Object.fromEntries(request.headers),
        },
      })
    ).json()) as Session;

    if (session.user.isadmin) {
        return (
            NextResponse.redirect(getUrlByPath("/dashboard"))
        )
    }

    if (session.user) {
        return(
            NextResponse.redirect(getUrlByPath("/estoque"))
        )
    }
  
  else {
    return(
        NextResponse.next()
    )
  }}

  return NextResponse.next();
}

export const config = {
  matcher: ["/login"],
};