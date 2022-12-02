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
          }}
          sm={{
            span: 24,
          }}
          md={{
            span: 10,
          }}
          lg={{
            span: 10,
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
          }}
          sm={{
            span: 24,
          }}
          md={{
            span: 10,
            offset: 4,
          }}
          lg={{
            span: 10,
            offset: 4,
          }}
        >
          <h5 className="h5_page5">
            We believe in promoting <br /> innovative strategies, a <br />
            multifaceted platfrom <br />
            allowing user to
            <br /> review the startups and <br />
            get insight about creative <br />
            discipline for a variety <br />
            of projects.
          </h5>

          <b style={{ cursor: "pointer", color: "#142C64", marginLeft: "2px" }}>
            About Us
          </b>
          <div className="arrow_holder">
            <MinusOutlined
              className="minusSign_style"
              style={{
                marginLeft: "2px",
              }}
            />
            <MinusOutlined className="minusSign_style" />
            <MinusOutlined className="minusSign_style" />
            <CaretRightOutlined className="traingleSign_style" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Page2;
