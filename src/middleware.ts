import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Skip middleware execution for public assets
  if (
    request.nextUrl.pathname.startsWith("/_next") ||
    request.nextUrl.pathname.startsWith("/public") ||
    request.nextUrl.pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  console.log("Middleware executed for path:", request.nextUrl.pathname);
  return NextResponse.next();
}

export const config = {
  // Update matcher to exclude public files and assets
  matcher: [
    /*
     * Match all request paths except:
     * 1. _next/static (static files)
     * 2. _next/image (image optimization files)
     * 3. favicon.ico (favicon file)
     * 4. public folder files
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
