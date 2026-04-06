"use client";

import { useState } from "react";
import Link from "next/link";
import FilledButton from "../Button/FilledButton";
import AUTH_API from "@/app/api/Auth";
import { useRequest } from "ahooks";
import { useAuthContext } from "@/contexts/AuthContext";

const LoginCard = ({ onClose }: { onClose: () => void }) => {
  const [phone, setPhone] = useState("");
  const [otpDigits, setOtpDigits] = useState(["", "", "", ""]);
  const [smsSent, setSmsSent] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { login } = useAuthContext();
  const otp = otpDigits.join("");

  const { run: sentOTP, loading: loadingOTP } = useRequest(AUTH_API.sendOtp, {
    manual: true,
    onSuccess: (data: any) => {
      setSmsSent(true);
      setError("");
      const otpCode = data?.otp || "1234"; // Display OTP from response or default
      const successMsg = `OTP sent successfully! Your OTP is: ${otpCode}`;
      setSuccess(successMsg);
      // Show as window alert as well
      window.alert(successMsg);
      // Clear success message after 5 seconds
      setTimeout(() => setSuccess(""), 5000);
    },
    onError: (err) => {
      setError(err.message || "Failed to send SMS");
      setSuccess("");
    },
  });

  const { run: verifyOTP, loading: loadingVerify } = useRequest(
    AUTH_API.verifyOtp,
    {
      manual: true,
      onSuccess: (data) => {
        login({
          token: data.token,
          user: data.user,
        });
        onClose();
      },
      onError: (err) => setError(err.message || "Verification failed"),
    },
  );

  const handleVerify = () => {
    if (!phone.trim()) return;
    sentOTP({ phone: phone.trim(), is_debug: true });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!smsSent || otp.length !== 4) {
      setError("Please verify your phone and enter complete OTP");
      return;
    }
    verifyOTP({ phone: phone.trim(), otp });
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
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {success && (
          <p className="text-green-500 text-sm mb-4 font-semibold">{success}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-xs font-semibold tracking-widest text-gray-500 uppercase mb-1.5">
              Phone Number
            </label>

            <div className="flex flex-row gap-2">
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="012 345 678"
                className="w-full bg-gray-100 rounded-xl px-4 py-3.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 border-none"
                required
              />
              <FilledButton
                type="button"
                label={loadingOTP ? "Sending..." : "Verify"}
                onClick={handleVerify}
                disabled={!phone.trim() || loadingOTP}
              />
            </div>
          </div>
          {/* OTP */}
          {smsSent && (
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
                    value={otpDigits[i]}
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
                      const newDigits = [...otpDigits];
                      newDigits[i] = input.value;
                      setOtpDigits(newDigits);
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
          )}

          {/* OTP submit area */}
          <div className="flex items-center justify-end">
            <span className="text-sm text-gray-500">
              Enter the 4-digit code sent to your phone.
            </span>
          </div>

          {/* Sign In button */}
          <button
            type="submit"
            disabled={loadingVerify}
            className="w-full py-4 rounded-xl text-white bg-primary font-bold text-base transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            // style={{ background: "linear-gradient(135deg, #E8440A, #FF6B35)" }}
          >
            {loadingVerify ? "Signing In..." : "Sign In →"}
          </button>
        </form>
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
