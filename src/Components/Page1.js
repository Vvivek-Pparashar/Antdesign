import React from "react";
import { Col, Row } from "antd";

const page1 = {
  width: "100%",
  height: "89vh",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  position: "relative",
};

const page1_cut_page = {
  position: "absolute",
  top:0,
  width: "100%",
  background: "#142C64",
  height: "88vh",
  clipPath: "polygon(0 0, 100% 0, 100% 35vh, 0 100%)",
};

const button_example = {
  marginTop: "20px",
  background: "black",
  color: "white",
  border: "none",
  padding: "13px 34px",
  borderRadius: "10px",
};

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

const Page1 = () => (
  <div style={page1}>
    <div style={page1_cut_page}></div>
    <div style={{ width: "100%", zIndex: 1 }}>
      <Row>
        <Col
          lg={{
            span: 10,
            offset: 1,
          }}
        >
          <h1
            style={{
              fontSize: "62px",
              color: "#D9D9D9",
              marginBottom: "10px",
            }}
          >
            Discover What's Possible
          </h1>
          <p style={{ color: "#D9D9D9", fontSize: "17px" }}>
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
          style={{ zIndex: 1 }}
        >
          <img
            src={require("../photo1.png")}
            alt="vi"
            style={{ width: "472px", marginRight: "0px", zIndex: 1 }}
          />
        </Col>
      </Row>
    </div>
  </div>
);
export default Page1;
