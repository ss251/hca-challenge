import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import apiSearch from "../api/apiSearch";
import VideoList from "../components/VideoList";

const All = () => {
  const [videos, setVideos] = useState([]);

  const handleSearch = async (search) => {
    const response = await apiSearch.get("/search", {
      params: {
        // excluding COVID-19 from search results
        q: "-COVID-19 " + search,
        // HCA Healthcare channel ID
        channelId: "UCL03ygcTgIbe36o2Z7sReuQ",
        type: "video",
      },
    });
    setVideos(response.data.items);
  };

  useEffect(() => {
    //pre-populating search results
    handleSearch("hca");
  }, []);

  return (
    <div>
      <Navbar handleSearchSubmit={handleSearch} />
      <VideoList videos={videos} />
    </div>
  );
};

export default All;
