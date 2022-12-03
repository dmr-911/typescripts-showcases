import React from "react";
import { GoVerified } from "react-icons/go";

import VideoCard from "../../components/VideoCard";
import NoResult from "../../components/NoResult";
import { IUser, Video } from "../../types";
import { BASE_URL } from "../../utils";
import axios from "axios";
import { NextPage } from "next";
import Image from "next/image";

export type ProfileProps = {
  data: {
    user: IUser;
    userVideos: Video[];
    userLikedVideos: Video[];
  };
};

const Profile: NextPage<ProfileProps> = ({ data }) => {
  const { user, userVideos, userLikedVideos } = data;

  console.log(user);

  return (
    <div className="w-full">
      <div className='flex gap-6 md:gap-10 mb-4 bg-white w-full'>
        <div className='w-16 h-16 md:w-32 md:h-32'>
          <Image
            width={120}
            height={120}
            layout='responsive'
            className='rounded-full'
            src={user.image}
            alt='user-profile'
          />
        </div>

        <div>
          <div className='text-md md:text-2xl font-bold tracking-wider flex gap-2 items-center justify-center lowercase'>
            <span>{user.userName.replace(/\s+/g, '')} </span>
            <GoVerified className='text-blue-400 md:text-xl text-md' />
          </div>
          <p className='text-sm font-medium'> {user.userName}</p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const res = await axios.get(`${BASE_URL}/api/profile/${id}`);

  return {
    props: {
      data: res.data,
    },
  };
};

export default Profile;
