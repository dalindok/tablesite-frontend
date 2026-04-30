"use client";
import React, { useState, useEffect } from "react";
import { RiImageAiFill } from "react-icons/ri";
import { useAuthContext } from "@/contexts/AuthContext"; // ✅ use this, not useAuth
import { useRequest } from "ahooks";
import AUTH_API from "@/app/api/Auth";

const AccountDetail = () => {
  const { session, isLogin } = useAuthContext(); // ✅ reads from cookie-based session

  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");

  const { run: updateProfile } = useRequest(AUTH_API.updateUserProfile, {
    manual: true,
    onSuccess: (data) => {
      console.log("Profile updated successfully", data);
      // optionally show a toast
    },
    onError: (err) => {
      console.error("Failed to update profile", err);
    },
  });

  // Pass token from session
  const handleUpdate = () => {
    if (!session?.accessToken) return; // don't proceed if no token

    updateProfile(
      {
        first_name: fullname.split(" ")[0],
        last_name: fullname.split(" ").slice(1).join(" "),
        email,
        // phone,
      },
      session.accessToken, // ✅ TypeScript knows it's defined here
    );
  };

  useEffect(() => {
    if (session) {
      setFullname(`${session.firstname} ${session.lastname}`);
      setEmail(session.email);
      setPhone(session.phone ?? "");
    }
  }, [session]);

  // ✅ check isLogin from context, not from useAuth hook
  if (!isLogin) return <p>Please login to view your account.</p>;

  return (
    <div>
      <p className="text-xl font-semibold mb-8">
        Welcome {session?.firstname} {session?.lastname}
      </p>
      <div className="flex flex-row gap-24 my-4">
        <div className="flex flex-col gap-4">
          <div className="w-32 h-32 rounded-full overflow-hidden">
            <img
              src={
                session?.imageUrl ??
                `https://ui-avatars.com/api/?name=${session?.firstname}`
              }
              alt="profile"
            />
          </div>
          <div className="flex flex-row items-center gap-2 cursor-pointer">
            <RiImageAiFill size={20} className="text-primary cursor-pointer" />
            <button className="text-sm text-gray-500 cursor-pointer">
              Update Image
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <label className="w-28 text-md text-gray-500 shrink-0">
              Full Name
            </label>
            <input
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              type="text"
              className="flex-1 w-lg border border-gray-300 rounded-md py-2 px-2 text-md
                focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="w-28 text-md text-gray-500 shrink-0">
              Gender
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-lg flex-1 border border-gray-300 rounded-md py-2 px-2 text-md
                focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="flex items-center gap-4">
            <label className="w-28 text-md text-gray-500 shrink-0">Phone</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              className="flex-1 w-lg border border-gray-300 rounded-md py-2 px-2 text-md
                focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="w-28 text-md text-gray-500 shrink-0">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="flex-1 w-lg border border-gray-300 rounded-md py-2 px-2 text-md
                focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <button
            className="self-end mt-4 bg-primary text-white px-6 py-2 rounded-md hover:opacity-90 transition-colors"
            onClick={handleUpdate}
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountDetail;
