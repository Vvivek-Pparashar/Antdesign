import React from "react";

const width = window.innerWidth <= 500 ? true : false;

const Last2Pages = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${require(`../${width?"newss_phone.jpg": "newss.jpg"}`)}`,
          width: "100vw",
          height: `${width?180:44}vw`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          display: "flex",
          flexDirection: "column",
          color: "white",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      ></div>

      <div
        style={{
          backgroundImage: `url(${require(`../${width?"Footer_Phone.jpg": "Footer_web.jpg"}`)}`,
          width: "100vw",
          height: `${width?180:45}vw`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          color: "white",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      ></div>
    </>
  );
};

export default Last2Pages;
