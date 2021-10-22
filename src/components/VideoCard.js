import React from "react";

const VideoCard = ({ video }) => {
  return (
    <div className="video-holder">
      <a
        className="list-group-item list-group-item-action flex-column align-items-start"
        href="/"
      >
        <div className="video-thumb">
          <img
            className="thumb-img"
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.description}
          />
        </div>
        <div className="video-title">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{video.snippet.title}</h5>
          </div>
        </div>
        <div className="video-descr">
          <p className="mb-1">{video.snippet.description}</p>
        </div>
        <div className="video-date">{video.snippet.publishedAt}</div>
      </a>
    </div>
  );
};

export default VideoCard;
