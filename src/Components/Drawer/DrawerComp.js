import React from "react";
import { Drawer, Menu } from "antd";
import "./DrawerComp.css";

const DrawerComp = ({ setOpen, open }) => {
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Drawer placement={"left"} width={"100vw"} onClose={onClose} open={open}>
        <img
          className="logo_starvest_drawer"
          src={require("../assests/logo.png")}
          alt="logo"
        />
        <Menu
          mode="vertical"
          defaultSelectedKeys={["0"]}
          style={{
            fontSize: "1.3vw",
          }}
          items={[
            {
              key: 1,
              label: "For Reviewers",
              className: "items_style_drawer",
            },

            {
              key: 2,
              label: "For Founders",
              className: "items_style_drawer",
            },

            {
              key: 3,
              label: "Contact Us",
              className: "items_style_drawer",
            },
          ]}
        />
        <button className="button_drawer">Join Us</button>
        <button className="button_drawer">Login</button>
      </Drawer>
    </>
  );
};
export default DrawerComp;
