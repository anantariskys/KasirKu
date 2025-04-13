import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_PATHS = ["/_next", "/public"];
const AUTH_PATHS = ["/login", "/register"];
const AUTH_API_PATHS = ["/api/auth/login", "/api/auth/register"];
const GUEST_PATHS = ["/about", "/contact", "/pricing"]; // Guest accessible paths

function isPublicAsset(pathname: string): boolean {
  return (
    PUBLIC_PATHS.some((path) => pathname.startsWith(path)) ||
    pathname.includes(".")
  );
}

function isAuthRoute(pathname: string): boolean {
  return AUTH_PATHS.includes(pathname);
}

function isAuthApiRoute(pathname: string): boolean {
  return AUTH_API_PATHS.includes(pathname);
}

function isGuestRoute(pathname: string): boolean {
  return GUEST_PATHS.includes(pathname);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = request.cookies.get("session");

  if (isPublicAsset(pathname)) {
    return NextResponse.next();
  }

  if (isAuthRoute(pathname)) {
    return session
      ? NextResponse.redirect(new URL("/", request.url))
      : NextResponse.next();
  }

  if (isGuestRoute(pathname)) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/api")) {
    if (isAuthApiRoute(pathname)) {
      return NextResponse.next();
    }

    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
  }

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
