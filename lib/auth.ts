// Server-only auth. The real password lives in the STORY_PASSWORD env var and
// is checked here on the server — it never ships to the browser. The cookie we
// set is a hash of the password, so it can't be forged without knowing it.
//
// NOTE: only import this from server code (server components / route handlers).
import { createHash } from "crypto";

// .trim() guards against a stray trailing newline when the env var is set
const PASSWORD = (process.env.STORY_PASSWORD ?? "").trim();

/** name of the auth cookie the browser carries once unlocked */
export const AUTH_COOKIE = "sw_auth";

/** the opaque value we store in the cookie when the password checks out.
 *  bump the version tag to invalidate every existing cookie at once. */
export const AUTH_TOKEN = createHash("sha256")
  .update(`${PASSWORD}::v2::the-story-we-accidentally-built`)
  .digest("hex");

/** true only when a non-empty password is configured and matches exactly */
export function isCorrectPassword(input: unknown): boolean {
  return (
    typeof input === "string" && PASSWORD.length > 0 && input === PASSWORD
  );
}
