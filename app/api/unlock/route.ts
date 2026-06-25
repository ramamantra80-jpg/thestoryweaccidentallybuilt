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
  // SESSION cookie on purpose — no maxAge/expires. it's gone when the browser
  // session ends, so coming back to the site always asks for the password
  // again (no long-term "remember me", regardless of device or IP).
  jar.set(AUTH_COOKIE, AUTH_TOKEN, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });

  return Response.json({ ok: true });
}
