import React from "react";
import "./VideoPlayer.css";

import "../App.css";

const VideoPlayer = () => {
  return (
    <div className="VideoPlayer_div">
      <h1 className="storyTelling">STARTUPS STORY TELLING</h1>
      <video
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
