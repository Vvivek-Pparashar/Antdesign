import React from "react";
import { Collapse } from "antd";
import './Accordion.css'
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const list = [];

for (let i = 1; i <= 10; i++) {
  list.push(
    <Panel className="vivek"
      header={<>This is panel header {i}</>}
      key={i}
      style={{
        backgroundColor: "#F8F1FF",
        fontSize: "17px",
        padding: "0px 0",
        borderBottom: "1px solid black",
      }}
    >
      <p style={{ backgroundColor: "#F8F1FF" }}>{text}</p>
    </Panel>
  );
}
const Accordion = () => (
  <div style={{ backgroundColor: "white", padding: "30px 0" }}>
    <Collapse
      accordion
      style={{
        width: "90vw",
        margin: "0 auto",
        padding: "100px 0",
        backgroundColor: "#F8F1FF",
        // display:"flex",
        // alignItems:"center"
      }}
      ghost={true}
      expandIconPosition={"end"}
      bordered={true}
    >
      {list}
    </Collapse>
  </div>
);
export default Accordion;
