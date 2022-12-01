import React, { useState } from "react";
import { MdFavorite } from "react-icons/md";

import useAuthStore from "../store/authStore";

const LikeButton = () => {
  const [alreadyLiked, setAlreadyLiked] = useState(false);
  const { userProfile } = useAuthStore();

  const handleDislike = () => {};
  return (
    <div className="gap-6 ">
      <div className="mt-4 flex flex-col justify-center items-center cursor-pointer">
        {alreadyLiked ? (
          <div
            className="text-lg md:text-2xl bg-primary rounded-full p-2 md:p-4 text-[#F51997]"
            onClick={handleDislike}
          >
            <MdFavorite />
          </div>
        ) : (
          <div
            className="text-lg md:text-2xl bg-primary rounded-full p-2 md:p-4"
            onClick={handleDislike}
          >
            <MdFavorite />
          </div>
        )}
      </div>
    </div>
  );
};

export default LikeButton;
