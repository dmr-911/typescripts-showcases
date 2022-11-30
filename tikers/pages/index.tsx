import axios from "axios";
import { NextPage } from "next";
import NoResult from "../components/NoResult";
import VideoCard from "../components/VideoCard";
import { Video } from "../types";

export type HomeProps = {
  videos : Video[]
}

const Home = ({videos} : HomeProps) => {
  console.log(videos);

  return <div className="flex flex-col gap-10 videos h-full">
    {
      !!videos ? videos.map((video : Video) =><VideoCard post={video} key={video._id}/>) : <NoResult  text={'No Videos'}/>
    }
  </div>;
};

export const getServerSideProps = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/post`);

  return {
    props: {
      videos: data,
    },
  };
};

export default Home;
