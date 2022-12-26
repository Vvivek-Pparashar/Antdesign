import React from "react";
import { Col, Row } from "antd";
import "./Page3.css";

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
        md={{
          span: 8,
        }}
      >
        <div className="page_3_img_style page3_1st_ele">
          <h1 className="page3_h1">
            Our
            <br />
            Features
          </h1>
          <div>
            <h5 className="page3_text_Style">Assistance</h5>
            <p className="page3_p">
              Start your journey with us to get a fair guidance and detailed
              understanding of startups all under one platform. startups all
              under one platform.
            </p>
          </div>
        </div>
      </Col>
      <Col
        xs={{
          span: 24,
        }}
        md={{
          span: 8,
        }}
      >
        <div
          className="page_3_img_style"
          style={{
            backgroundImage: `url(${require("../assests//page3_1.jpg")}`,
          }}
        >
          <h5 className="page3_text_Style">Startups</h5>
          <p className="page3_p">
            We provide an examined overlook of startups for users to easily and
            efficiently understand the market and functioning of business , also
            to provide a fair share of knowledge to the users .
          </p>
        </div>
      </Col>
      <Col
        xs={{
          span: 24,
        }}
        md={{
          span: 8,
        }}
      >
        <div className="page_3_img_style page3_3rd_ele">
          <h5 className="page3_text_Style">Reviews</h5>
          <p className="page3_p">
            The reviews of authentic users will help the startup to grow and
            withstand the expectation of users and market trends, also will add
            to its position in market .
          </p>
        </div>
      </Col>
    </Row>
  </div>
);
export default Page3;
