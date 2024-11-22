import { NextRequest, NextResponse } from "next/server";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

export function middleware(request: NextRequest) {
	const token = request.cookies.get("auth_token")?.value;
	const deCodedToken = jwt.decode(String(token));
	console.log(token);
	console.log(deCodedToken);

	if (!token) {
		return NextResponse.redirect(new URL("/sign-in", request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		"/dashboard",
		"/admin-dashboard",
		"/vendor-dashboard",
		"/employer-dashboard",
		"/jobs/:path+",
	],
};
