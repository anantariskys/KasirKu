import { NextResponse } from "next/server";

import shopService from "@/server/shop/services";

export async function GET() {
  const shops = await shopService.getAllShops();
  return NextResponse.json(shops);
}
