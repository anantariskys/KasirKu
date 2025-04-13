import authService from "@/server/auth/services";
import { ApiResponse } from "@/server/utils/response";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;
    const response = await authService.login(email, password);
    if (response) {
      (await cookies()).set({
        name: "session",
        value: response.token,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 5, // 5 minutes
      });
    }
    
    return NextResponse.json(
      ApiResponse.success(response, "User logged in successfully"),
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      switch (error.message) {
        case "User not found":
          return NextResponse.json(
            ApiResponse.error("Email tidak terdaftar", 404),
            { status: 404 },
          );
        case "Invalid password":
          return NextResponse.json(
            ApiResponse.error("Password tidak valid", 401),
            { status: 401 },
          );
        default:
          return NextResponse.json(
            ApiResponse.error("Internal server error", 500),
            { status: 500 },
          );
      }
    }

    return NextResponse.json(ApiResponse.error("Internal server error", 500), {
      status: 500,
    });
  }
}
