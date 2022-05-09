import { NextResponse, NextRequest, NextFetchEvent } from "next/server";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { pathname } = req.nextUrl;

  if (pathname == "/") {
    if (typeof window !== "undefined") {
      console.log("WINDOW", window);
      var isCookies = window.sessionStorage.getItem("cookies");
      if (!isCookies) {
        return NextResponse.redirect(new URL("/login", req.url).toString());
      }
    }
  }

  return NextResponse.next();
}
