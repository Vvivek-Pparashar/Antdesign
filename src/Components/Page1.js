import React from "react";
import { Col, Row } from "antd";

const page1 = {
  width: "100%",
  height: "89vh",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  position: "relative",
  padding: "0 2vw",
  // background:"white"
};

const page1_cut_page = {
  position: "absolute",
  top: 0,
  width: "100%",
  background: "#1B3061",
  height: "88vh",
  clipPath: "polygon(0px 0px, 100vw 0px, 100% 15vw, 0px 100%)",
};

const button_example = {
  marginTop: "2vw",
  background: "black",
  color: "white",
  border: "none",
  padding: "1.1vw 2.6vw",
  borderRadius: "10px",
  fontSize: "1.3vw",
  cursor: "pointer",
};

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

const Page1 = () => (
  <div style={page1}>
    <div style={page1_cut_page}></div>
    <div style={{ width: "100%", zIndex: 1, paddingTop: "4.5vw" }}>
      <Row>
        <Col
          lg={{
            span: 10,
            offset: 1,
          }}

          // style = {{display:"flex", flexDirection:"column", justifyContent:"flex-start"}}
        >
          <h1
            style={{
              fontSize: "5vw",
              color: "white",
              marginBottom: "2vw",
              margin: "0",
            }}
          >
            Discover What's <br /> Possible
          </h1>
          <p style={{ color: "white", fontSize: "1.4vw" }}>
            Join now to bring out the <br />
            extraordinary
            <br />
            Experiance and innovate in a single touch{" "}
          </p>
          <button style={button_example}>Explore Now</button>
        </Col>
        <Col
          lg={{
            span: 10,
            offset: 2,
          }}
          style={{ zIndex: 1, display: "flex", justifyContent: "flex-end" }}
        >
          <img
            src={require("../photo1.png")}
            alt="vi"
            style={{ width: "35vw", marginRight: "0px", zIndex: 1 }}
          />
        </Col>
      </Row>
    </div>
  </div>
);
export default Page1;
