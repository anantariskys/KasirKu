import { NextResponse } from "next/server";

import shopService from "@/server/shop/services";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const shops = await shopService.getAllShops();
  return NextResponse.json(shops);
}

