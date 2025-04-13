import { NextRequest, NextResponse } from "next/server";
import authService from "@/server/auth/services";
import { ApiResponse } from "@/server/utils/response";
import { userRepository } from "@/server/user/repository";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const existingUser = await userRepository.findByEmail(body.email);
    if (existingUser) {
      return NextResponse.json(ApiResponse.error("Email already exists"), {
        status: 400,
      });
    }
    const existingUserByUsername = await userRepository.findByUsername(
      body.username,
    );
    if (existingUserByUsername) {
      return NextResponse.json(ApiResponse.error("Username already exists"), {
        status: 400,
      });
    }

    const user = await authService.register(body);

    return NextResponse.json(
      ApiResponse.success(user, "User registered successfully"),
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(ApiResponse.error("Internal server error"), {
      status: 500,
    });
  }
}
