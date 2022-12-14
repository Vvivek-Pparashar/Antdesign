import React, { useState } from "react";
import "./App.css";
import { Layout } from "antd";
import HeaderComp from "../Header/HeaderComp";
import Page1 from "../Page1/Page1";
import Page2 from "../Page2/Page2";
import Page3 from "../Page3/Page3";
import Last2Pages from "../Last2pages/Last2Pages";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import SliderComp from "../Slider/SliderComp";

const { Content } = Layout;

const content_style = {
  height: "100%",
  width: "100%",
  overflowX: "hidden",
};

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

const App = () => {
  const [siderVis, setSiderVis] = useState(true);

  const changeVis = () => {
    setSiderVis(!siderVis);
  };

  return (
    <Layout>
      <HeaderComp siderVis={siderVis} changeVis={changeVis} />
      <Content style={content_style}>
        <Page1 />
        <Page2 />
        <Page3 />
        <VideoPlayer />
        <SliderComp />

        <Last2Pages />
      </Content>
    </Layout>
    // <>
    //   <YouTube videoId="ynVikeFUvW8"/>
    //   <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
    // </>
  );
};
export default App;
