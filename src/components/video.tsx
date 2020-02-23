import React, { useEffect, useRef } from "react";

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <video
      ref={videoRef}
      muted
      loop
      id="myVideo"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1
      }}
    >
      <source src="./backdrop.mp4" type="video/mp4" />
    </video>
  );
};

export default Video;
