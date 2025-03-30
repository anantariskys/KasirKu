import { ApiResponse } from "@/server/utils/response";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  (await cookies()).delete("session");
  return NextResponse.json(
    ApiResponse.success(null, "Logged out successfully"),
  );
}
