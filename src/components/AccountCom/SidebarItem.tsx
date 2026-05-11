"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { useAuth } from "@/hooks/useAuth";

interface SidebarItemProps {
  id: number;
  name: string;
  icon: string;
  iconActive: string;
  href?: string;
  isActive: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  id,
  name,
  icon,
  iconActive,
  href,
  isActive,
}) => {
  const nav = useRouter();
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (id === 1 || id === 2 || id === 3) {
      nav.push(`/account?id=${id}`);
    } else if (id === 4) {
      setIsOpen(true); // open logout confirm dialog
    } else if (href) {
      nav.push(href);
    }
  };

  const handleConfirmLogout = () => {
    logout(); // clears token from localStorage
    nav.push("/login"); // redirect to login
    setIsOpen(false);
  };

  return (
    <>
      <div
        className={`w-72 h-fit mb-2 border border-gray-100 rounded-xl overflow-hidden cursor-pointer ${
          isActive
            ? "border-light bg-light text-primary"
            : "border-border text-typography-base hover:bg-paper bg-white"
        }`}
        onClick={handleClick}
      >
        <div className="flex flex-row items-center gap-3 px-4 py-3">
          <Image
            src={isActive ? iconActive : icon}
            alt={name}
            width={28}
            height={28}
          />
          <span
            className={`text-md ${isActive ? "font-medium text-primary" : "text-gray-500"}`}
          >
            {name}
          </span>
        </div>
      </div>

      {/* Logout confirm dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl p-6 w-90 shadow-xl space-y-4">
            <p className="text-gray-700 text-base">
              Are you sure you want to log out?
            </p>
            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setIsOpen(false)}
                className="border border-gray-200 text-gray-600 rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmLogout}
                className="bg-primary text-white rounded-lg px-4 py-2 text-sm font-medium hover:opacity-90"
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SidebarItem;
