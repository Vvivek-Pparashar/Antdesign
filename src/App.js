import React from "react";
import "./App.css";
import { Layout, Card, Row, Col } from "antd";
import HeaderComp from "./Components/HeaderComp";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Last2Pages from "./Components/Last2Pages";
import VideoPlayer from "./Components/VideoPlayer";
import SilderComp from "./Components/SilderComp";

const { Content } = Layout;

const content_style = {
  height: "100%",
  width: "100%",
  overflowX: "hidden",
};

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

const App = () => (
  <Layout className="layout">
    <HeaderComp />
    <Content style={content_style}>
      <Page1 />
      <Page2 />
      <Page3 />
      <VideoPlayer />
      <SilderComp/>
      <Last2Pages />
    </Content>
  </Layout>
);
export default App;

