import { cookies } from "next/headers";
import StoryShell from "@/components/StoryShell";
import PasswordGate from "@/components/PasswordGate";
import { AUTH_COOKIE, AUTH_TOKEN } from "@/lib/auth";

// Server-side gate: the story (and all its content) is only rendered once the
// browser carries a valid auth cookie. Before that, only the password form is
// sent — the password itself stays on the server.
export default async function Home() {
  const jar = await cookies();
  const authed = jar.get(AUTH_COOKIE)?.value === AUTH_TOKEN;

  return (
    <main className="w-full h-full">
      {authed ? <StoryShell /> : <PasswordGate />}
    </main>
  );
}
