import { Card } from "antd";
import React, { useState, useEffect } from "react";
import Data from "./Data";
import "./New.css";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";

const { Meta } = Card;
function SliderComp() {
  const [index, setIndex] = React.useState(
    40 + Math.ceil(Math.random() * (50 - 40))
  );

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > 95) {
        index = 30;
      }
      return index;
    });
  };
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 4) {
        index = 40;
      }
      return index;
    });
  };

  const style_card = {
    transform: `translateX(-${index * 25}vw)`,
    transition: "0.5s linear",
    minWidth: "23vw",
    height:"17vw",
    margin: "0 1vw",
    display: "flex",
    justifyContent: "flex-start",
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > 95) {
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
        <div className="section-center" style={{ overflowX: "hidden", paddingTop:"70px" }}>
          {Data.map((e) => {
            return (
              <div style={style_card}>
                <Card
                  hoverable
                  style={{
                    minWidth:"22vw",
                    height:"17vw",
                    position: "relative",
                    // marginTop: "70px",
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
                        zIndex:1
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

export default SliderComp;
