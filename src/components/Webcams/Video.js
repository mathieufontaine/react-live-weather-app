import React from "react";

const Video = ({ src, id }) => (
  <iframe
    title={id}
    className="video"
    //   allowFullScreen
    frameBorder="0"
    height="200"
    src={src}
  />
);
export default Video;
