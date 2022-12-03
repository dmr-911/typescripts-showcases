import React, { useState, useEffect } from "react";
import { GoVerified } from "react-icons/go";

import VideoCard from "../../components/VideoCard";
import NoResult from "../../components/NoResult";
import { IUser, Video } from "../../types";
import { BASE_URL } from "../../utils";
import axios from "axios";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import useAuthStore from "../../store/authStore";

const Search = ({ videos }: { videos: Video[] }) => {
  const [isAccounts, setIsAccounts] = useState(false);
  const router = useRouter();
  const { searchTerm } = router.query;

  const account = isAccounts ? "border-b-2 border-black" : "text-gray-400";
  const isVideos = !isAccounts ? "border-b-2 border-black" : "text-gray-400";
  return (
    <div className="w-full ">
      <div>
        <div className="flex gap-10 mb-10 mt-10 border-b-2 border-gray-200 bg-white w-full">
          <p
            className={`text-xl font-semibold ${account} cursor-pointer`}
            onClick={() => setIsAccounts(true)}
          >
            Accounts
          </p>
          <p
            className={`text-xl font-semibold ${isVideos} cursor-pointer`}
            onClick={() => setIsAccounts(false)}
          >
            Videos
          </p>
        </div>
        {isAccounts ? (
          <div>Accounts</div>
        ) : (
          <div className="md:mt-16 flex flex-wrap gap-6 md:justify-start">
            {
                videos?.length ? (
                    videos.map((video: Video, i:number)=><VideoCard post={video} key={i}/>)
                ) : <NoResult text={`No video results for ${searchTerm}`}/>
            }
          </div>
        )}
      </div>
    </div>
  );
};

export const getServerSideProps = async ({
  params: { searchTerm },
}: {
  params: { searchTerm: string };
}) => {
  const res = await axios.get(`${BASE_URL}/api/search/${searchTerm}`);

  return {
    props: {
      videos: res.data,
    },
  };
};

export default Search;
