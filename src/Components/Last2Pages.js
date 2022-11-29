import React from "react";

const Last2Pages = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${require("../8.png")}`,
          width: "100%",
          height: "60vw ",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          color: "white",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      ></div>

      <div
        style={{
          backgroundImage: `url(${require("../10.png")}`,
          height: "45vw ",
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
