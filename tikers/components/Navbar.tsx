import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoogleLogout, GoogleLogin } from "react-google-login";
import Logo from "../utils/tiktik-logo.png";

const Navbar = () => {
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
    </div>
  );
};

export default Navbar;