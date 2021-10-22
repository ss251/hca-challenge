import React, { useState } from "react";
import ModalVideo from "react-modal-video";
// getting the help of below package to render modal pop-up
import "react-modal-video/scss/modal-video.scss";

const VideoCard = ({ video }) => {
  const [isOpen, setOpen] = useState(false);
  var videoId = video.id.videoId;
  /* video ids for videos rendered from a playlist are accessed 
     differently than videos not rendered from playlist
     COVID-19 videos are rendered as playlist items accessed
     from the 'COVID-19 Vaccine Podcast' playlist id.*/
  if (typeof videoId === "undefined") {
    videoId = video.snippet.resourceId.videoId;
  }
  return (
    <div className="card">
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />
      <div className="card-horizontal">
        <div className="video-thumb">
          <img
            className="img-square-wrapper"
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.description}
            onClick={() => setOpen(true)}
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
