import { NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
    const eqtidarCookieSession = request.cookies.get(
        "eqtidar-cookie-session"
    )?.value;
    const isLoggedIn = !!eqtidarCookieSession;

    // If user is not logged in and tries to access dashboard, redirect to login
    if (!isLoggedIn && request.nextUrl.pathname.startsWith("/dashboard")) {
        return Response.redirect(new URL("/login", request.url));
    }

    // If user is logged in and tries to access login or signup, redirect to dashboard
    if (
        isLoggedIn &&
        (request.nextUrl.pathname.startsWith("/login") ||
            request.nextUrl.pathname.startsWith("/signup"))
    ) {
        return Response.redirect(new URL("/dashboard", request.url));
    }

    return;
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
