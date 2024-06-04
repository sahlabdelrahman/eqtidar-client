import { NextResponse, NextRequest } from "next/server";

export default function middleware(request: NextRequest) {}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
