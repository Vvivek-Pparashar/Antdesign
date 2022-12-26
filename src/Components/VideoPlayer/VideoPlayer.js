import React from "react";
import "./VideoPlayer.css";
import "../App/App.css";
import YouTube from "react-youtube";

const VideoPlayer = () => {
  return (
    <div className="VideoPlayer_div">
      <h1 className="storyTelling">STARTUPS STORY TELLING</h1>
      <YouTube videoId="Uwk86DUPywI" id="video" />
    </div>
  );
};

export default VideoPlayer;
