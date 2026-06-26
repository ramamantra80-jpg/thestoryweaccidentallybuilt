import { cookies } from "next/headers";
import { AUTH_COOKIE } from "@/lib/auth";

// POST — drops the auth cookie. The story shell calls this right after it
// renders, so the gate reappears on every fresh page load / revisit.
export async function POST() {
  const jar = await cookies();
  jar.delete(AUTH_COOKIE);
  return Response.json({ ok: true });
}
