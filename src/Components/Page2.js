import React from "react";
import { Col, Row } from "antd";
import { MinusOutlined, CaretRightOutlined } from "@ant-design/icons";

const page2_left = {
  width: "465px",
  height: "630px",
  background: "#142C64",
  borderRadius: "30px",
  display: "flex",
  justifyContent: "flex-end",
};

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

const Page2 = () => {
  return (
    <div style={{ marginTop: "60px" }}>
      <Row>
        <Col span={10} offset={2}>
          <div className="page2_left" style={page2_left}>
            <img
              src={require("../page2_img.jpg")}
              alt="vivek"
              style={{ width: "420px", height: "630px" }}
            />
          </div>
        </Col>

        <Col span={10} offset={2}>
          <h5
            style={{
              fontSize: "40px",
              color: "#7A553B",
              marginBottom: "20px",
              marginTop: "0px",
            }}
          >
            We believe in <br />
            promoting innovative
            <br />
            strategies, a <br />
            multifaceted platfrom <br />
            allowing user to
            <br /> review the startups and <br />
            get insight about
            <br /> creative discipline for <br />a variety <br />
            of projects.
          </h5>

          <b>About Us</b>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "-20px",
              marginLeft: "-5px",
            }}
          >
            <MinusOutlined
              style={{ fontSize: "50px", color: "black", padding: "0" }}
            />
            <MinusOutlined
              style={{
                fontSize: "50px",
                color: "black",
                padding: "0",
                marginLeft: "-10px",
              }}
            />
            <CaretRightOutlined
              style={{ fontSize: "20px", marginLeft: "-10px" }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Page2;
