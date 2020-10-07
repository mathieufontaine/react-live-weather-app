import React from "react";
import Video from "./Video.js";

const Webcam = ({ webcam }) => {
  return (
    <div className="webcam-card">
      <div className="webcam-title">{webcam.title}</div>

      <Video
        src={
          webcam.player.live.available == true
            ? `${webcam.player.live.embed}+?autoplay=1`
            : `${webcam.player.day.embed}+?autoplay=1`
        }
      />
      <div className="webcam-city">Location: {webcam.location.city}</div>
      <p className="webcam-region">
        {webcam.location.region}, {webcam.location.country}
      </p>
    </div>
  );
};

export default Webcam;
