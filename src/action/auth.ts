"use server";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

// action/auth.ts
const COOKIE_NAME = process.env.NEXT_PUBLIC_AUTH_STORAGE_KEY || "session";
console.log("COOKIE_NAME:", COOKIE_NAME); // ← what does this print?
const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
  expires: new Date("9999-12-31"),
};

// ✅ Updated to match API response
export interface SessionPayload {
  userId: string;
  email: string;
  firstname: string;
  lastname: string;
  phone: string;
  imageUrl: string | null;
  role: string;
  isActive: boolean;
  isLogin: boolean;
  accessToken: string;
}

export async function createSession(data: SessionPayload) {
  try {
    console.log("🔥 createSession called with token:", data.accessToken.slice(0, 20) + "...");
    const cookieStore = await cookies();
    console.log("✅ Cookie store acquired");
    cookieStore.set(COOKIE_NAME, JSON.stringify(data), COOKIE_OPTIONS);
    console.log("✅ Cookie set successfully with name:", COOKIE_NAME);
    return data;
  } catch (error) {
    console.error("❌ Error creating session:", error);
    throw error;
  }
}
console.log("COOKIE_NAME:", COOKIE_NAME);
export async function getSession(): Promise<SessionPayload | null> {
  try {
    const cookieStore = await cookies();
    const raw = cookieStore.get(COOKIE_NAME)?.value;
    console.log("🔍 Looking for cookie with name:", COOKIE_NAME);
    console.log("📦 Cookie value found:", !!raw);

    if (!raw) {
      console.warn("⚠️  No session cookie found");
      return null;
    }

    const parsed = JSON.parse(raw) as SessionPayload;
    console.log("✅ Session cookie parsed successfully");
    return parsed;
  } catch (err) {
    console.error("❌ Failed to parse session cookie:", err);
    return null;
  }
}

export async function deleteSession() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete(COOKIE_NAME);
    console.log("✅ Session cookie deleted:", COOKIE_NAME);
  } catch (error) {
    console.error("❌ Error deleting session:", error);
    throw error;
  }
}

export async function updateSession(
  request: NextRequest,
  newTokens: Partial<SessionPayload>,
) {
  const cookieStore = await cookies();
  const current = cookieStore.get(COOKIE_NAME)?.value;

  if (!current) return null;

  const payload = JSON.parse(current) as SessionPayload;
  const updated = { ...payload, ...newTokens };

  cookieStore.set(COOKIE_NAME, JSON.stringify(updated), COOKIE_OPTIONS);

  const response = NextResponse.next();
  response.cookies.set(COOKIE_NAME, JSON.stringify(updated), COOKIE_OPTIONS);
  return response;
}
