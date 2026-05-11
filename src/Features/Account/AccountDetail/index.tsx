"use client";
import React, { useState, useEffect } from "react";
import { RiImageAiFill } from "react-icons/ri";
import { useAuthContext } from "@/contexts/AuthContext";
import { useRequest } from "ahooks";
import AUTH_API from "@/app/api/Auth";

type ProfileForm = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  avatar_url: string;
};

const AccountDetail = () => {
  const { session, isLogin } = useAuthContext();
  const [form, setForm] = useState<ProfileForm>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    gender: "",
    avatar_url: "",
  });

  useEffect(() => {
    if (session) {
      setForm({
        first_name: session.firstname,
        last_name: session.lastname,
        email: session.email,
        phone: session.phone ?? "",
        gender: "",
        avatar_url: session.imageUrl ?? "",
      });
    }
  }, [session]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const { run: updateProfile } = useRequest(AUTH_API.updateUserProfile, {
    manual: true,
    onSuccess: () => console.log("Profile updated successfully"),
    onError: (err) => console.error("Failed to update profile", err),
  });

  const handleUpdate = () => {
    if (!session?.accessToken) return;
    updateProfile(
      {
        first_name: form.first_name,
        last_name: form.last_name,
        email: form.email,
        avatar_url: form.avatar_url,
      },
      session.accessToken,
    );
  };

  if (!isLogin) return <p>Please login to view your account.</p>;

  const fields: {
    label: string;
    name: keyof ProfileForm;
    type?: string;
  }[] = [
    { label: "First Name", name: "first_name" },
    { label: "Last Name", name: "last_name" },
    { label: "Phone", name: "phone" },
    { label: "Email", name: "email", type: "email" },
  ];

  const inputClass =
    "flex-1 w-lg border border-gray-300 rounded-md py-2 px-2 text-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent";
  const labelClass = "w-28 text-md text-gray-500 shrink-0";

  return (
    <div>
      <p className="text-xl font-semibold mb-8">
        Welcome {session?.firstname} {session?.lastname}
      </p>

      <div className="flex flex-row gap-24 my-4">
        {/* Avatar */}
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
            <RiImageAiFill size={20} className="text-primary" />
            <button className="text-sm text-gray-500">Update Image</button>
          </div>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4">
          {fields.map(({ label, name, type = "text" }) => (
            <div key={name} className="flex items-center gap-4">
              <label className={labelClass}>{label}</label>
              <input
                name={name}
                value={form[name]}
                onChange={handleChange}
                type={type}
                className={inputClass}
              />
            </div>
          ))}

          {/* Gender */}
          <div className="flex items-center gap-4">
            <label className={labelClass}>Gender</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <button
            onClick={handleUpdate}
            className="self-end mt-4 bg-primary text-white px-6 py-2 rounded-md hover:opacity-90 transition-colors"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountDetail;
