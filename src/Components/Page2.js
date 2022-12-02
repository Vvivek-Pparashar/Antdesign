import React from "react";
import { Col, Row } from "antd";
import { MinusOutlined, CaretRightOutlined } from "@ant-design/icons";
import "./Page2.css";

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

const Page2 = () => {
  return (
    <div style={{ marginTop: "60px" }}>
      <Row style={{ width: "80vw", margin: " 0 auto" }}>
        <Col
          xs={{
            span: 24,
            order: 2,
          }}
          sm={{
            span: 24,
            order: 2,
          }}
          md={{
            span: 10,
            order: 1,
          }}
          lg={{
            span: 10,
            order: 1,
          }}
        >
          <div className="page2_left">
            <img
              src={require("../page2_img.jpg")}
              alt="vivek"
              className="image_style"
            />
          </div>
        </Col>

        <Col
          xs={{
            span: 24,
            order: 1,
          }}
          sm={{
            span: 24,
            order: 1,
          }}
          md={{
            span: 10,
            order: 2,
          }}
          lg={{
            span: 10,
            order: 2,
            offset: 4,
          }}
        >
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

          <b style={{ cursor: "pointer", color: "#142C64" }}>About Us</b>
          <div className="arrow_holder">
            <MinusOutlined
              className="minusSign_style"
              style={{
                marginLeft: "0",
              }}
            />
            <MinusOutlined className="minusSign_style" />
            <MinusOutlined className="minusSign_style" />
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
