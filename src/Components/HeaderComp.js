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
  padding: "0 4vw 0 6vw",
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
      <MenuOutlined style={{ fontSize: "1.5vw", cursor: "pointer" }} />
      <img
        src={require("../logo.png")}
        alt="logo"
        style={{
          width: "8vw",
          height: "3vw",
          marginLeft: "17px",
          marginTop: "-7px",
          cursor: "pointer",
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
        style={{ fontSize: "1.3vw" }}
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

      <button
        style={{
          background: "black",
          color: "white",
          cursor: "pointer",
          padding: ".5vw 2vw",
          fontSize: "1.0vw",
          borderRadius: "0.5vw",
          marginLeft: "1.5vw",
        }}
      >
        Login
      </button>
    </div>
  </Header>
);
export default HeaderComp;
