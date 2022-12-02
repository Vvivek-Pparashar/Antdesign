import React, { useState } from "react";
import { Button, Drawer, Radio, Space, Menu } from "antd";

const DrawerComp = ({ setOpen, open }) => {
  //const [open, setOpen] = useState(openhead);
  const [placement, setPlacement] = useState("right");
  const showDrawer = () => {
    setOpen(true);
    // setOpenhead(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
    // setOpenhead(false);
  };
  return (
    <>
      <Drawer placement={placement} width={500} onClose={onClose} open={open}>
        <img
          src={require("../logo.png")}
          alt="logo"
          style={{
            width: "8vw",
            height: "3vw",
            marginLeft: "50%",
            transform: "translateX(-50%)",
            marginBottom:"30px",
            cursor: "pointer",
          }}
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
              label: "For Reviwers",
              style: { textAlign: "center" },
            },

            {
              key: 2,
              label: "For Founders",
              style: { textAlign: "center" },
            },

            {
              key: 3,
              label: "Contact Us",
              style: { textAlign: "center" },
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
            marginLeft: "50%",
            transform: "translateX(-50%)",
          }}
        >
          Login
        </button>
      </Drawer>
    </>
  );
};
export default DrawerComp;
