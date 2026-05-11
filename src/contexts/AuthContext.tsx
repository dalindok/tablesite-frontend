"use client";

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import type { SessionPayload } from "@/action/auth";

const AUTH_STORAGE_KEY = "session";

interface Session {
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

interface LoginPayload {
  token: string;
  user: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    phone: string;
    avatar_url: string | null;
    role: string;
    is_active: boolean;
  };
}

interface AuthContextType {
  login: (payload: LoginPayload) => Promise<void>;
  logout: () => Promise<void>; // ✅ async now
  loading: boolean;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  isLogin: boolean;
  session: Session | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loading] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedSession = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!savedSession) return;

    try {
      const parsed = JSON.parse(savedSession) as Session;
      setSession(parsed);
      setIsLogin(true);
    } catch (error) {
      console.error("❌ Failed to parse localStorage session:", error);
      localStorage.removeItem(AUTH_STORAGE_KEY);
      localStorage.removeItem("token");
    }
  }, []);

  const login = async (payload: LoginPayload) => {
    try {
      console.log("🔍 Login payload received:", payload);
      console.log("👤 User object:", payload.user);

      if (!payload.user) {
        throw new Error("Missing user data in response");
      }

      const sessionPayload: SessionPayload = {
        userId: String(payload.user.id),
        email: payload.user.email,
        firstname: payload.user.first_name,
        lastname: payload.user.last_name,
        phone: payload.user.phone,
        imageUrl: payload.user.avatar_url,
        role: payload.user.role,
        isActive: payload.user.is_active,
        isLogin: true,
        accessToken: payload.token,
      };

      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(sessionPayload));
      localStorage.setItem("token", payload.token);

      setSession(sessionPayload);
      setIsLogin(true);
    } catch (error) {
      console.error("❌ Login failed:", error);
      throw error;
    }
  };

  const logout = async () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(AUTH_STORAGE_KEY);
      localStorage.removeItem("token");
    }
    setSession(null);
    setIsLogin(false);
  };

  // ✅ Only used for version-based cache busting now (no localStorage session)
  useEffect(() => {
    const CURRENT_VERSION = process.env.NEXT_PUBLIC_AUTH_STORAGE_VERSION;
    const storedVersion =
      typeof window !== "undefined"
        ? localStorage.getItem("AUTH_VERSION")
        : null;

    if (storedVersion !== CURRENT_VERSION) {
      console.warn("Auth version changed. Clearing session...");
      logout();
      if (typeof window !== "undefined") {
        localStorage.setItem("AUTH_VERSION", CURRENT_VERSION || "0");
      }
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        loading,
        step,
        setStep,
        isLogin,
        session,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuthContext must be used inside AuthProvider");
  return ctx;
}
