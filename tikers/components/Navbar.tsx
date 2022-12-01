import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import Logo from "../utils/tiktik-logo.png";
import { createOrGetUser } from "../utils";
import useAuthStore from "../store/authStore";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";

const Navbar = () => {
  const { userProfile, addUser, removeUser } = useAuthStore();
  return (
    <div className="w-full flex justify-between items-center border-b-2 border-gray-200 py-2 px-4">
      <Link href="/">
        <div className="w-[100px] md:w-[130px]">
          <Image
            src={Logo}
            className="cursor-pointer"
            alt="Tikers"
            layout="responsive"
          />
        </div>
      </Link>

      {/* search */}
      <div>Search</div>

      {/* Google button  */}
      <div>
        {userProfile ? (
          <div className="flex gap-5 md:gap-10">
            <Link href="/upload">
              <button className="flex border-2 px-2 md:px-4 text-md font-semibold items-center gap-2">
                <IoMdAdd />
                {` `}
                <span className="hidden md:block">Upload</span>
              </button>
            </Link>
            {userProfile.image ? (
              <Link href={`/`}>
                <>
                  <Image
                    width={40}
                    height={40}
                    className="rounded-full cursor-pointer"
                    src={userProfile.image}
                    alt="user-profile"
                  />
                </>
              </Link>
            ) : null}
            <button
              type="button"
              className="px-2"
              onClick={() => {
                googleLogout();
                removeUser()
              }}
            >
              <AiOutlineLogout color="red" fontSize={21} />
            </button>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={(response) => {
              createOrGetUser(response, addUser);
            }}
            onError={() => {
              console.log("error");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
