import { cookies } from "next/headers";
import { AUTH_COOKIE, AUTH_TOKEN, isCorrectPassword } from "@/lib/auth";

// POST { password } — checks it on the server, and only on success hands back
// an httpOnly cookie that unlocks the story. Wrong password → 401, no cookie.
export async function POST(request: Request) {
  let password = "";
  try {
    const body = await request.json();
    password = typeof body?.password === "string" ? body.password : "";
  } catch {
    // malformed body → treated as a wrong attempt below
  }

  if (!isCorrectPassword(password)) {
    return Response.json({ ok: false }, { status: 401 });
  }

  const jar = await cookies();
  jar.set(AUTH_COOKIE, AUTH_TOKEN, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 365, // a year
  });

  return Response.json({ ok: true });
}
