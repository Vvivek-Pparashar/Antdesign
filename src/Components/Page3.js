import React from "react";
import { Col, Row } from "antd";
import "./for.css";

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

const Page3 = () => (
  <div style={{ marginTop: "60px" }}>
    <Row>
      <Col
        xs={{
          span: 24,
        }}
        lg={{
          span: 8,
        }}
      >
        <div className="page_3_img_style page3_1st_ele">
          <h1 className="page3_h1">
            Our
            <br />
            Services
          </h1>
          <div>
            <h5 className="page3_text_Style">Assistance</h5>
            <p className="page3_p">
              lWe believe in promoting innovative strategies, a multifaceted
              platfrom
            </p>
          </div>
        </div>
      </Col>
      <Col
        xs={{
          span: 24,
        }}
        lg={{
          span: 8,
        }}
      >
        <div
          className="page_3_img_style"
          style={{
            backgroundImage: `url(${require("../page3_1.jpg")}`,
          }}
        >
          <h5 className="page3_text_Style">Startups</h5>
          <p className="page3_p">
            lWe believe in promoting innovative strategies, a multifaceted
            platfrom
          </p>
        </div>
      </Col>
      <Col
        xs={{
          span: 24,
        }}
        lg={{
          span: 8,
        }}
      >
        <div
          className="page_3_img_style"
          style={{
            backgroundImage: `url(${require("../page3_2.jpg")}`,
          }}
        >
          <h5 className="page3_text_Style">Reviews</h5>
          <p className="page3_p">
            lWe believe in promoting innovative strategies, a multifaceted
            platfrom
          </p>
        </div>
      </Col>
    </Row>
  </div>
);
export default Page3;
