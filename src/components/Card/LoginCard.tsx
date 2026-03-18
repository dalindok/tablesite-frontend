"use client";

import { useState } from "react";
import Link from "next/link";
const LoginCard = ({ onClose }: { onClose: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle login logic here
    console.log({ email, password, rememberMe });
  };
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs px-4"
      onClick={onClose} // click outside to close
    >
      {/* Card */}
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl leading-none"
        >
          ×
        </button>

        {/* Header */}
        <h1 className="text-xl font-black text-gray-900 mb-1">Welcome back</h1>
        <p className="text-gray-500 text-sm mb-6">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-semibold text-primary-hover"
            // style={{ color: "#E8440A" }}
          >
            Sign up for free
          </Link>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-xs font-semibold tracking-widest text-gray-500 uppercase mb-1.5">
              Phone Number
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="sophea@email.com"
              className="w-full bg-gray-100 rounded-xl px-4 py-3.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 border-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-semibold tracking-widest text-gray-500 uppercase mb-1.5">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-gray-100 rounded-xl px-4 py-3.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 border-none pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Remember me + Forgot password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 accent-orange-500"
              />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
            <Link
              href="/forgot-password"
              className="text-sm font-semibold text-primary-hover"
              //   style={{ color: "#E8440A" }}
            >
              Forgot password?
            </Link>
          </div>

          {/* Sign In button */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl text-white bg-primary font-bold text-base transition-all hover:opacity-90 active:scale-[0.98]"
            // style={{ background: "linear-gradient(135deg, #E8440A, #FF6B35)" }}
          >
            Sign In →
          </button>
        </form>

        {/* Divider */}
        {/* <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-sm text-gray-400">or continue with</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div> */}

        {/* Social buttons
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
            🌐 Google
          </button>
          <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
            📘 Facebook
          </button>
        </div> */}

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-5">
          By signing in you agree to our{" "}
          <Link href="/terms" className="font-medium text-primary-hover">
            Terms
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="font-medium text-primary-hover">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
};
export default LoginCard;
