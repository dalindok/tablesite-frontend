"use client";

import { useState } from "react";
import Link from "next/link";
import FilledButton from "../Button/FilledButton";
const LoginCard = ({ onClose }: { onClose: () => void }) => {
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  // const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle login logic here
    // console.log({ email, password, rememberMe });
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
        <h1 className="text-xl font-black text-gray-900 mb-1">
          Enter your mobile number
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          SMS verification code is required to login
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-xs font-semibold tracking-widest text-gray-500 uppercase mb-1.5">
              Phone Number
            </label>

            <div className="flex flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="012 345 678"
                className="w-full bg-gray-100 rounded-xl px-4 py-3.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 border-none"
                required
              />
              <>
                <FilledButton label={"Verify"} />
              </>
            </div>
          </div>
          {/* OTP */}
          <div>
            <label className="block text-xs font-semibold tracking-widest text-gray-500 uppercase mb-1.5">
              OTP
            </label>
            <div className="flex gap-3">
              {[0, 1, 2, 3].map((i) => (
                <input
                  key={i}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  className="w-full aspect-square bg-gray-100 rounded-xl text-center text-lg font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 border-none caret-transparent"
                  onKeyDown={(e) => {
                    if (e.key === "Backspace" && !e.currentTarget.value) {
                      const prev = e.currentTarget.parentElement?.children[
                        i - 1
                      ] as HTMLInputElement;
                      prev?.focus();
                    }
                  }}
                  onInput={(e) => {
                    const input = e.currentTarget;
                    // Allow only digits
                    input.value = input.value.replace(/\D/g, "").slice(-1);
                    if (input.value) {
                      const next = input.parentElement?.children[
                        i + 1
                      ] as HTMLInputElement;
                      next?.focus();
                    }
                  }}
                  onFocus={(e) => e.currentTarget.select()}
                  required
                />
              ))}
            </div>
          </div>

          {/* Remember me + Forgot password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 accent-primary"
              />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
            {/* <Link
              href="/forgot-password"
              className="text-sm font-semibold text-primary-hover"
              //   style={{ color: "#E8440A" }}
            >
              Forgot password?
            </Link> */}
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
