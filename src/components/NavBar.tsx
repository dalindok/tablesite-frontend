"use client";
import { useState } from "react";
import Link from "next/link";
import LoginCard from "./Card/LoginCard";
import { usePathname, useRouter } from "next/navigation";
import { FaUserAlt } from "react-icons/fa";
import { RiLoginCircleFill } from "react-icons/ri";
import { MdAccountCircle } from "react-icons/md";
const NavBar = () => {
  const [isOpenSignin, setIsOpenSignin] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/restaurant", label: "Restaurants" },
    { href: "/about", label: "About" },
  ];

  const action = [
    {
      key: "account",
      label: "Account",
      icon: <MdAccountCircle size={26} />,
      onClick: () => {
        router.push("/account");
      },
    },
    {
      key: "signin",
      label: "Sign In",
      icon: <RiLoginCircleFill size={26} />,
      onClick: () => setIsOpenSignin(true),
    },
  ];

  console.log("NavBar isOpen state:", isOpenSignin);
  return (
    <>
      <div className="flex flex-row justify-between items-center border-b border-gray-200 py-4">
        {/* <div className="flex flex-row gap-16 items-center"> */}
        <div className="flex flex-row ">
          <p className="font-semibold text-2xl">Table</p>
          <p className="font-semibold text-2xl text-primary">Site</p>
        </div>
        <div className="flex flex-row gap-8 text-gray-500">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link key={href} href={href}>
                <p
                  className={`hover:text-primary transition-colors ${
                    isActive
                      ? "text-primary font-bold underline underline-offset-4"
                      : ""
                  }`}
                >
                  {label}
                </p>
              </Link>
            );
          })}
        </div>

        {/* </div> */}
        <div className="flex flex-row gap-4 relative group">
          <button>
            <FaUserAlt size={26} className="text-primary" />
          </button>

          {/* Dropdown shown on hover */}
          <div
            className="absolute top-full right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-100 py-2 px-3 flex flex-col gap-1
    opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
          >
            {action.map(({ key, label, icon, onClick }) => (
              <div
                className="flex flex-row gap-2 cursor-pointer items-center hover:bg-gray-100 rounded-lg p-2 transition-colors border border-gray-100"
                key={key}
              >
                {icon}
                <button
                  key={key}
                  onClick={onClick}
                  className="text-sm font-semiboldtext-left py-1 transition-colors"
                >
                  {label}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isOpenSignin && <LoginCard onClose={() => setIsOpenSignin(false)} />}
    </>
  );
};

export default NavBar;
