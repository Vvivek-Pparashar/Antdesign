import React from "react";

const Last2Pages = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${require("../news.png")}`,
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
          backgroundImage: `url(${require("../footer2.png")}`,
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
