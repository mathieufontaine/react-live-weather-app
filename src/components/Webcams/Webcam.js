import React from "react";
import Video from "./Video.js";

const Webcam = ({ webcam }) => {
  return (
    <div className="webcam-card">
      <Video
        src={
          webcam.player.live.available == true
            ? `${webcam.player.live.embed}+?autoplay=1`
            : `${webcam.player.day.embed}+?autoplay=1`
        }
      />
      <div className="title">{webcam.title}</div>
      {/* <div className="city">Location: {webcam.location.city}</div> */}
      <p className="region">
        {webcam.location.region}, {webcam.location.country}
      </p>
    </div>
  );
};

export default Webcam;
