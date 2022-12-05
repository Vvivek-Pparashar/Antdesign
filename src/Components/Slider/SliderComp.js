import { Card} from "antd";
import React, { useEffect } from "react";
import Data from "../Data/Data";
import "./SliderComp.css";
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

  const width = window.innerWidth <= 600 ? true : false;

  const style_card = {
    transform: `translateX(-${width ? index * 80 : index * 25}vw)`,
    transition: "0.5s linear",
    minWidth: width ? "70vw" : "23vw",
    margin: `0 ${width ? 4.99 : 1}vw`,
    height: `${width ? "60vw" : "100%"}`,
    position: "relative",
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
    <div className="first_div">
      <section className="section">
        <div className="title">
          <h2
            className="storyTelling"
            style={{ marginBottom: "40px", color: "white", marginTop: "50px" }}
          >
            STARTUP REVIEWS
          </h2>
        </div>
        <div className="section-center">
          {Data.map((e) => {
            return (
              <Card
                hoverable
                style={style_card}
                cover={
                  <img
                    id="review_img"
                    alt="example"
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
