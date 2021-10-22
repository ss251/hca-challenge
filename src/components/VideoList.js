import React from "react";
import VideoCard from "./VideoCard";

const VideoList = ({ videos }) => {
  const videoList = videos.map((video) => {
    return <VideoCard key={video.id.videoId} video={video} />;
  });
  return <div className="list-group">{videoList}</div>;
};

export default VideoList;
