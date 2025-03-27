import { NextResponse } from "next/server";

export function middleware(req) {
  const res = NextResponse.next();

  // Vérifier si c'est une requête OPTIONS (preflight)
  if (req.method === "OPTIONS") {
    const response = new NextResponse(null, { status: 204 });
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    response.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, x-api-key"
    );
    return response;
  }

  // Appliquer les en-têtes CORS
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.headers.set("Access-Control-Allow-Headers", "Content-Type, x-api-key");

  return res;
}

export const config = {
  matcher: "/api/:path*",
};
