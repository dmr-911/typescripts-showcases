import Image from "next/image";
import Link from "next/link";
import React, {useState, useEffect} from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import Logo from "../utils/tikers-logo.png";
import { createOrGetUser } from "../utils";
import useAuthStore from "../store/authStore";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/router";
import { IUser } from "../types";

const Navbar = () => {
  const { userProfile, addUser, removeUser } : {userProfile : any, addUser: any, removeUser: any}= useAuthStore();
  const [searchValue, setSearchValue] = useState("");

  const router = useRouter();

  const handleSearch = (e : {preventDefault : ()=> void}) => {
    e.preventDefault();
    if(searchValue){
      router.push(`/search/${searchValue}`)
    }
  };
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
      <div className="relative">
        <form
          onSubmit={handleSearch}
          className="absolute md:static -top-6 md:top-10 -left-20 bg-white"
        >
          <input
            type="text"
            value={searchValue}
            onChange={(e) => {setSearchValue(e.target.value)}}
            placeholder="Search accounts and videos"
            className="bg-primary p-3 md:text-md font-medium border-2 border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 w-[150px] md:w-[350px] rounded-full md:top-0"
          />
          <button type="submit" onClick={handleSearch} className="absolute hidden md:block md:right-5 right-6 top-3 border-l-2 border-gray-300 pl-4 text-2xl text-gray-400">
            <BiSearch />
          </button>
        </form>
      </div>

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
                removeUser();
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
