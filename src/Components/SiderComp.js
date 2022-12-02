import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
const { Sider } = Layout;
const SiderComp = ({ siderVis, changeVis }) => (
  <Sider
    breakpoint="lg"
    collapsedWidth="0"
    width={"50vw"}
    collapsed={siderVis}
    style={{ position: "absolute", top: "0%", zIndex: 101, height: "100vh" }}
  >
    <div className="logo"> <MenuOutlined
        style={{ fontSize: "1.5vw", cursor: "pointer", color:"White" }}
        onClick={() => {
          changeVis();
        }}
      /></div>
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["4"]}
      items={[
        UserOutlined,
        VideoCameraOutlined,
        UploadOutlined,
        UserOutlined,
      ].map((icon, index) => ({
        key: String(index + 1),
        icon: React.createElement(icon),
        label: `nav ${index + 1}`,
      }))}
    />
  </Sider>
);
export default SiderComp;
