"use client";
import { useState } from "react";
import FilledButton from "./Button/FilledButton";
import OutlinedButton from "./Button/OutlinedButton";
import Link from "next/link";
import LoginCard from "./Card/LoginCard";
import SignupCard from "./Card/SignupCard";
const NavBar = () => {
  const [isOpenSignin, setIsOpenSignin] = useState(false);
  const [isOpenSignup, setIsOpenSignup] = useState(false);
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
          <Link href="/">
            {" "}
            <p className="hover:text-black">Home</p>
          </Link>
          <Link href="/restaurant">
            <p className="hover:text-black">Restaurants</p>
          </Link>
          {/* <p className="hover:text-black">Cuisines</p> */}
          <Link href="/about">
            <p className="hover:text-black">About</p>
          </Link>
        </div>

        {/* </div> */}
        <div className="flex flex-row gap-4">
          <OutlinedButton
            label={"Sign in"}
            onClick={() => {
              // console.log("clicked", isOpenSignin);
              setIsOpenSignin(true);
            }}
          />

          <FilledButton
            label={"Sign Up"}
            onClick={() => setIsOpenSignup(true)}
          />
        </div>
      </div>
      {isOpenSignin && <LoginCard onClose={() => setIsOpenSignin(false)} />}
      {isOpenSignup && (
        <SignupCard
          onClose={() => setIsOpenSignup(false)}
          onSwitchToLogin={() => {
            setIsOpenSignup(false);
            setIsOpenSignin(true);
          }}
        />
      )}
    </>
  );
};

export default NavBar;
