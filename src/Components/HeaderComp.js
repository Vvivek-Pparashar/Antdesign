import React from "react";
import { Button, Layout, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
const { Header } = Layout;

const Header_style = {
  position: "sticky",
  top: 0,
  zIndex: 100,
  background: "white",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "3px 2px 5px 0 rgba(0,0,0,0.16)",
  padding: "0 57px",
  boxSizing: "border-box",
};

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

const HeaderComp = () => (
  <Header style={Header_style}>
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <MenuOutlined />
      <img
        src={require("../logo.png")}
        alt="logo"
        style={{
          width: "100px",
          height: "40px",
          marginLeft: "17px",
          marginTop: "-7px",
        }}
      />
    </div>

    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["0"]}
        items={[
          {
            key: 1,
            label: "For Reviwers",
          },

          {
            key: 2,
            label: "For Founders",
          },

          {
            key: 3,
            label: "Contact Us",
          },
        ]}
      />

      <Button style={{ background: "black", color: "white" }}>Login</Button>
    </div>
  </Header>
);
export default HeaderComp;
