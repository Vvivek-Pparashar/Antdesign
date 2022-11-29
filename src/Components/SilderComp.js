import { Card } from "antd";
import React, { useState, useEffect } from "react";
import Data from "./Data";
import "./New.css";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";

const { Meta } = Card;
function SilderComp() {
  const [index, setIndex] = React.useState(
    40 + Math.ceil(Math.random() * (50 - 40))
  );

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > 99) {
        index = 30;
      }
      return index;
    });
  };
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 1) {
        index = 40;
      }
      return index;
    });
  };

  const style_card = {
    transform: `translateX(-${index * 320}px)`,
    transition: "0.5s linear",
    minWidth: "300px",
    height: "60%",
    margin: "0 10px",
    display: "flex",
    justifyContent: "flex-start",
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > 99) {
          index = 30;
        }
        return index;
      });
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div
      style={{ width: "100vw", background: "#050C26", paddingBottom: "70px" }}
    >
      <section className="section">
        <div className="title">
          <h2
            className="storyTelling"
            style={{ marginBottom: "40px", color: "white", marginTop: "50px" }}
          >
            STARTUP REVIEWS
          </h2>
        </div>
        <div className="section-center" style={{ overflowX: "hidden" }}>
          {Data.map((e) => {
            return (
              <div style={style_card}>
                <Card
                  hoverable
                  style={{
                    width: "300px",
                    position: "relative",
                    marginTop: "70px",
                  }}
                  cover={
                    <img
                      alt="example"
                      style={{
                        width: "100px",
                        position: "absolute",
                        top: "-70px",
                        left: "50%",
                        clipPath: `circle()`,
                        transform: "translate(-50%)",
                      }}
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta
                    title="Europe Street beat"
                    style={{ margin: "44px 0 " }}
                    description="lorea fajfaj abfjafba aljfhaljkfa alflhaljkfh alfhajfhaj fafhajfhe jfuef haufh a ufhaf "
                  />
                </Card>
              </div>
            );
          })}
        </div>

        <button className="prev" onClick={prevSlide}>
          <ArrowLeftOutlined />
        </button>
        <button className="next" onClick={nextSlide}>
          <ArrowRightOutlined />
        </button>
      </section>
    </div>
  );
}

export default SilderComp;
