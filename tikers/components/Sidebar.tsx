import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import { ImCancelCircle } from "react-icons/im";
import { AiOutlineMenu, AiFillHome } from "react-icons/ai";
import Link from "next/link";
import Discover from "./Discover";
import SuggestedAccounts from "./SuggestedAccounts";
import Footer from "./Footer";
import useAuthStore from "../store/authStore";

const Sidebar = () => {
  const { fetchAllUsers, allUsers } = useAuthStore();


  const [showSidebar, setShowSidebar] = useState(true);
  const [userProfile, setUserProfile] = useState(false);
  const normalLink =
    "flex items-center gap-3 hover:bg-primary p-3 justify-between xl:justify-start cursor-pointer font-semibold text-blue-500 rounded";
  return (
    <div>
      <div
        className="block m-2 mt-3 text-xl"
        onClick={() => setShowSidebar((prev) => !prev)}
      >
        {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
        {showSidebar ? (
          <div onClick={(e)=>{e.stopPropagation()}}  className="xl:w-[20rem] w-20 flex flex-col justify-start mb-10 border-r-2 xl:border-0 p-3">
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
            <Discover/>
            <SuggestedAccounts fetchAllUsers={fetchAllUsers} allUsers={allUsers}/>
            <Footer/>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Sidebar;
