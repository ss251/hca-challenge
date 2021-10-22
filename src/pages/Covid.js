import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import apiSearch from "../api/apiSearch";
import VideoList from "../components/VideoList";

const Covid = () => {
  const [videos, setVideos] = useState([]);
  const handleLoad = async () => {
    const response = await apiSearch.get("/playlistItems", {
      params: {
        //playlist ID of HCA COVID-19 Vaccine Podcast
        playlistId: "PLogA9DP2_vSekxHP73PXaKD6nbOK56CJw",
      },
    });
    setVideos(response.data.items);
  };
  const handleSearch = async (search) => {
    const response = await apiSearch.get("/search", {
      params: {
        //including COVID-19 results at the top of the search results
        q: "COVID-19 Vaccine Podcast|" + search,
        //channel ID of HCA Healthcare
        channelId: "UCL03ygcTgIbe36o2Z7sReuQ",
        type: "video",
      },
    });
    setVideos(response.data.items);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <Navbar handleSearchSubmit={handleSearch} />
      <VideoList videos={videos} />
    </div>
  );
};

export default Covid;
