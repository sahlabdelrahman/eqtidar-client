import { NextRequest, NextResponse } from "next/server";
import { serialize } from "cookie";

export async function GET(req: NextRequest) {
    // Extract all cookies from the request headers
    const cookies = req.headers.get("cookie");

    if (cookies) {
        // Split the cookies string into individual cookies
        const cookieArray = cookies.split(";");

        // Set each cookie with an expired date to clear it
        const expiredCookies = cookieArray.map((cookie) => {
            const [cookieName] = cookie.split("=");
            return serialize(cookieName.trim(), "", {
                maxAge: -1,
                path: "/",
            });
        });

        // Create a response with the expired cookies
        const response = NextResponse.json(
            { message: "All cookies cleared" },
            { status: 200 }
        );
        expiredCookies.forEach((cookie) =>
            response.headers.append("Set-Cookie", cookie)
        );
        return response;
    }

    return NextResponse.json(
        { message: "No cookies to clear" },
        { status: 200 }
    );
}
