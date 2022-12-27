import React from "react";
import { Collapse } from "antd";
import HeaderData from "./HeaderData";
import "./Accordion.css";
const { Panel } = Collapse;

const list = [];
let i = 0;

HeaderData.map((e) => {
  i++;
  return list.push(
    <Panel className="panel" header={<b>{e.Ques}</b>} key={i}>
      <p className="panel_p">{e.Ans}</p>
    </Panel>
  );
});
const Accordion = () => (
  <div className="div1">
    <div className="div2">
      <h1 className="h1">FAQ</h1>
      <Collapse
        accordion
        className="accordion"
        expandIconPosition={"end"}
        bordered={false}
      >
        {list}
      </Collapse>
    </div>
  </div>
);
export default Accordion;
