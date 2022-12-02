import React, { useState } from "react";
import "./App.css";
import { Layout } from "antd";
import HeaderComp from "./Components/HeaderComp";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Last2Pages from "./Components/Last2Pages";
import VideoPlayer from "./Components/VideoPlayer";
import SliderComp from "./Components/SliderComp";


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
  );
};
export default App;
