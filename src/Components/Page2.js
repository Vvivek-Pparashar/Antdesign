import React from "react";
import { Col, Row } from "antd";
import { MinusOutlined, CaretRightOutlined } from "@ant-design/icons";

const page2_left = {
  width: "30vw",
  height: "37vw",
  background: "#142C64",
  borderRadius: "30px",
  display: "flex",
  justifyContent: "flex-end",
  // boxShadow: `#32325d40 0px 50px 100px -20px, #0000004d 0px 30px 60px -30px`,
  boxShadow: `#32325d40 0px 13px 27px  -5px , #0000004d 0px 8px 16px -8px`,
};

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

const Page2 = () => {
  return (
    <div style={{ marginTop: "60px" }}>
      <Row style={{ width: "80vw", margin: " 0 auto" }}>
        <Col span={10}>
          <div className="page2_left" style={page2_left}>
            <img
              src={require("../page2_img.jpg")}
              alt="vivek"
              style={{
                width: "27vw",
                height: "34vw",
                borderBottomLeftRadius: "2vw",
              }}
            />
          </div>
        </Col>

        <Col span={10} offset={4}>
          <h5
            style={{
              fontSize: "2.7vw",
              color: "#7A553B",
              marginBottom: "20px",
              marginTop: "1.7vw",
            }}
          >
            We believe in promoting <br /> innovative strategies, a <br />
            multifaceted platfrom <br />
            allowing user to
            <br /> review the startups and <br />
            get insight about creative discipline for a variety <br />
            of projects.
          </h5>

          <b style={{cursor:"pointer", color:"#142C64"}}>About Us</b>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "-15px",
              marginLeft: "-5px",
              cursor:"pointer",
              color:"#142C64"
            }}
          >
            <MinusOutlined
              style={{ fontSize: "34px", color: "black", padding: "0", color:"#142C64" }}
            />
            <MinusOutlined
              style={{
                fontSize: "34px",
                color: "black",
                padding: "0",
                marginLeft: "-10px",
                color:"#142C64"
              }}
            />
            <MinusOutlined
              style={{
                fontSize: "34px",
                color: "black",
                padding: "0",
                marginLeft: "-10px",
                color:"#142C64"
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
