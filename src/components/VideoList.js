import React from "react";
import VideoCard from "./VideoCard";

const VideoList = ({ videos }) => {
  const videoList = videos.map((video) => {
    return (
      <VideoCard
        // unique keys were missing in covid-19 video cards
        key={video.id.videoId || video.snippet.resourceId.videoId}
        video={video}
      />
    );
  });
  return <div className="list-group">{videoList}</div>;
};

export default VideoList;
