import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { requireEntryAccess } from "@/lib/access";

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req });

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (!requireEntryAccess(token as any)) {
    return NextResponse.redirect(new URL("/paywall", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
