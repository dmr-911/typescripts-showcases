import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { ImCancelCircle } from "react-icons/im";
import { AiOutlineMenu, AiFillHome } from "react-icons/ai";
import Link from "next/link";
import Discover from "./Discover";
import SuggestedAccounts from "./SuggestedAccounts";
import Footer from "./Footer";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [userProfile, setUserProfile] = useState(false);
  const normalLink =
    "flex items-center gap-3 hover:bg-primary p-3 justify-between xl:justify-start cursor-pointer font-semibold text-[#F51997] rounded";
  return (
    <div>
      <div
        className="block 2xl:hidden m-2 mt-3 text-xl"
        onClick={() => setShowSidebar((prev) => !prev)}
      >
        {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
        {showSidebar ? (
          <div onClick={(e)=>{e.stopPropagation()}}  className="xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 xl:border-0 p-3">
            <div className="xl:border-b-2 border-gray-200 xl:pb-4">
              <Link href="/">
                <div className={normalLink}>
                  <p className="text-2xl flex xl:gap-2">
                    <AiFillHome />
                    <span className="text-xl hidden xl:block">For You</span>
                  </p>
                </div>
              </Link>
            </div>
            {!userProfile ? (
              <div className="px-2 py-4 hidden xl:block">
                <p className="text-gray-400">
                  Log in to like and comment on videos
                </p> 
                <div className="pr-4">
                  <GoogleLogin
                    clientId=""
                    render={(renderProps) => (
                      <button className="bg-white text-lg text-[#F51997] border-[1px] border-[#F51997] font-semibold px-6 py-3 rounded-md outline-none w-full mt-3 hover:text-white hover:bg-[#F51997] cursor-pointer">
                        Log in
                      </button>
                    )}
                    onSuccess={() => {}}
                    onFailure={() => {}}
                    cookiePolicy="single_host_origin"
                  />
                </div>
              </div>
            ) : null}
            <Discover/>
            <SuggestedAccounts />
            <Footer/>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Sidebar;
