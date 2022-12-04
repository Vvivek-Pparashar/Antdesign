import React from "react";
import { Col, Row } from "antd";
import "./Page1.css";

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

const Page1 = () => (
  <div id="page1">
    <div id="page1_cut_page"></div>
    <div style={{ width: "100%", zIndex: 1, paddingTop: "4.5vw" }}>
      <Row>
        <Col
          xs={{
            span: 24,
          }}
          sm={{
            span: 24,
          }}
          md={{
            span: 10,
            offset: 1,
          }}
          lg={{
            span: 10,
            offset: 1,
          }}
        >
          <h1 className="h1_page1">
            Discover What's <br /> Possible
          </h1>
          <p className="p_page1">
            Join now to bring out the <br />
            extraordinary
            <br />
            Experiance and innovate in a single touch{" "}
          </p>
          <button id="button_example">Explore Now</button>
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
            offset: 3,
          }}
          lg={{
            span: 10,
            offset: 3,
          }}
        >
          <img src={require("../photo1.png")} alt="vi" className="img_page1" />
        </Col>
      </Row>
    </div>
  </div>
);
export default Page1;
