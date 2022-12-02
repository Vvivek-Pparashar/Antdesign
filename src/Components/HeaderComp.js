import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Space } from "antd";
import DrawerComp from "./DrawerComp";
import "./HeaderComp.css";

const { Header } = Layout;

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

const HeaderComp = () => {
  const [open, setOpen] = useState(false);
  return (
    <Header className="header_style" style={{ background: "white",  padding: "0 4vw 0 6vw" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <MenuOutlined
          className="bigmenu"
          style={{ fontSize: "1.5vw", cursor: "pointer" }}
          onClick={() => {
            setOpen(!open);
          }}
        />
        <DrawerComp open={open} setOpen={setOpen} />
        <img
          src={require("../logo.png")}
          alt="logo"
          style={{
            width: "8vw",
            height: "3vw",
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
          className="menubtn"
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

        <button className="menubtn_button">Login</button>
      </div>
    </Header>
  );
};
export default HeaderComp;
