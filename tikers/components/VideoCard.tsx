import { NextPage } from "next";
import React from "react";
import { Video } from "../types";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { GoVerified } from "react-icons/go";
import { BsPlay } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

type VideoCardProps = {
  post: Video;
};

const VideoCard: NextPage<VideoCardProps> = ({ post }) => {
  console.log(post.caption);

  return (
    <div className="flex flex-col border-b-2 border-gray-200 pb-6">
      <div>
        <div className="flex gap-3 p-2 cursor-pointer font-semibold rounded">
          <div className="md:w-16 md:h-16 w-10 h-10 overflow-hidden">
            <Link href="/">
              <>
                <Image
                  width={62}
                  height={62}
                  className="rounded-full"
                  src={post.postedBy.image}
                  layout="responsive"
                  alt="photo"
                />
              </>
            </Link>
          </div>
          <Link href="/">
            <div className="flex items-center gap-2 md:text-md font-bold text-primary">
              <p className="flex items-center gap-1">{post.postedBy.userName}<GoVerified className="text-blue-400"/></p>
              <p className="capitalize text-gray-500 hidden md:block text-xs">{post.postedBy.userName}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
