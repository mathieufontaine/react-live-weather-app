import React from "react";

const Video = ({ src }) => (
  <iframe
    className="webcam-video"
    //   allowFullScreen
    frameBorder="0"
    height="200"
    src={src}
  />
);
export default Video;
