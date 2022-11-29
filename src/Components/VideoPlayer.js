import React from "react";

import "../App.css";

const VideoPlayer = () => {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "40px 0",
      }}
    >
      <h1 className="storyTelling">STARTUPS STORY TELLING</h1>
      <video
        style={{ width: "70vw", borderRadius: "30px", margin:"30px 0 50px 0" }}
        id="my-video"
        class="video-js"
        controls
        preload="auto"
        poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
        data-setup=""
        loop
      >
        <source
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoPlayer;
