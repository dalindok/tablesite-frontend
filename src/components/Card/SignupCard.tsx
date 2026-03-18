"use client";

import { useState } from "react";
import Link from "next/link";

interface SignUpCardProps {
  onClose: () => void;
  onSwitchToLogin?: () => void;
}
const SignupCard = ({ onClose, onSwitchToLogin }: SignUpCardProps) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = (field: string, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.email.includes("@")) e.email = "Invalid email";
    if (form.phone.trim().length < 8) e.phone = "Invalid phone number";
    if (form.password.length < 8) e.password = "Min. 8 characters";
    if (form.password !== form.confirmPassword)
      e.confirmPassword = "Passwords don't match";
    if (!form.agreed) e.agreed = "Please agree to continue";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Sign up:", form);
    }
  };

  const inputClass = (field: string) =>
    `w-full bg-gray-100 rounded-xl px-4 py-3.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none border-none ${
      errors[field]
        ? "ring-2 ring-red-400"
        : "focus:ring-2 focus:ring-orange-400"
    }`;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs px-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
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
          Create Account
        </h1>
        <p className="text-gray-500 text-sm mb-6">
          Already have an account?{" "}
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="font-semibold"
            style={{ color: "#E8440A" }}
          >
            Sign in
          </button>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First + Last name row */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold tracking-widest text-gray-500 uppercase mb-1.5">
                First Name
              </label>
              <input
                type="text"
                value={form.firstName}
                onChange={(e) => update("firstName", e.target.value)}
                placeholder="Sophea"
                className={inputClass("firstName")}
              />
              {errors.firstName && (
                <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label className="block text-xs font-semibold tracking-widest text-gray-500 uppercase mb-1.5">
                Last Name
              </label>
              <input
                type="text"
                value={form.lastName}
                onChange={(e) => update("lastName", e.target.value)}
                placeholder="Lim"
                className={inputClass("lastName")}
              />
              {errors.lastName && (
                <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold tracking-widest text-gray-500 uppercase mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="sophea@email.com"
              className={inputClass("email")}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-semibold tracking-widest text-gray-500 uppercase mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="+855 12 345 678"
              className={inputClass("phone")}
            />
            {errors.phone && (
              <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-semibold tracking-widest text-gray-500 uppercase mb-1.5">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={(e) => update("password", e.target.value)}
                placeholder="Min. 8 characters"
                className={inputClass("password") + " pr-14"}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xs font-semibold tracking-widest text-gray-500 uppercase mb-1.5">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                value={form.confirmPassword}
                onChange={(e) => update("confirmPassword", e.target.value)}
                placeholder="Repeat password"
                className={inputClass("confirmPassword") + " pr-14"}
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
              >
                {showConfirm ? "Hide" : "Show"}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-xs text-red-500 mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Terms checkbox */}
          <div>
            <label className="flex items-start gap-3 cursor-pointer">
              <div
                onClick={() => update("agreed", !form.agreed)}
                className="w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 transition-colors cursor-pointer border"
                style={
                  form.agreed
                    ? { background: "#E8440A", borderColor: "#E8440A" }
                    : { background: "#F3F4F6", borderColor: "#D1D5DB" }
                }
              >
                {form.agreed && (
                  <span className="text-white text-xs font-bold">✓</span>
                )}
              </div>
              <span className="text-sm text-gray-600 leading-relaxed">
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="font-medium"
                  style={{ color: "#E8440A" }}
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="font-medium"
                  style={{ color: "#E8440A" }}
                >
                  Privacy Policy
                </Link>
              </span>
            </label>
            {errors.agreed && (
              <p className="text-xs text-red-500 mt-1">{errors.agreed}</p>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl text-white font-bold text-base transition-all hover:opacity-90 active:scale-[0.98]"
            style={{ background: "linear-gradient(135deg, #E8440A, #FF6B35)" }}
          >
            Create My Account →
          </button>
        </form>

        {/* Divider */}
        {/* <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-sm text-gray-400">or sign up with</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div> */}

        {/* Social buttons */}
        {/* <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            🌐 Google
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            📘 Facebook
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default SignupCard;
