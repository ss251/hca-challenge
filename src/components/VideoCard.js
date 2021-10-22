import React from "react";

const VideoCard = ({ video }) => {
  return (
    <div className="card">
      <div className="card-horizontal">
        <div className="video-thumb">
          <img
            className="img-square-wrapper"
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.description}
          />
        </div>

        <div className="video-details">
          <div className="card-title">
            <h5 className="mb-1">{video.snippet.title}</h5>
          </div>
          <div className="card-text">
            <div className="video-descr">
              <p className="mb-1">{video.snippet.description}</p>
            </div>
            <div className="video-date">{video.snippet.publishedAt}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
