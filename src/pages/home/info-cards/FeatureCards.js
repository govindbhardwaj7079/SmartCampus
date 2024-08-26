import React from "react";
import classes from "./index.module.scss";
import { Card, Col, Row } from "antd";
const featureCards = [
  {
    title: "Proxy Free",
    img: "card-image-1.png",
    description:
      "We provides proxy free attendance platform i.e. No other person can give attendance of absent person ",
  },
  {
    title: "QR Code Technology",
    img: "card-image-2.png",
    description:
      "We use QR code technology which enhance the user experience. User just have to scan QR code for attendance.",
  },
  {
    title: "Fast",
    img: "card-image-3.png",
    description:
      "You time won't be wasted, just go and scan QR as your name comes. That's it. ",
  },
  {
    title: "Easy to Create",
    img: "card-image-4.png",
    description:
      "It is easy to create attedance faster,  you just have to add few details to start taking attendance online by using QR code.",
  },
];
const FeatureCards = () => {
  return (
    <div className={`container ${classes.featureCards}`}>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Col
          span={18}
          md={18}
          sm={20}
          xs={24}
          className={classes.missionDescription}
        >
          <h2>
          Our Features
          </h2>
        </Col>
      </Row>
      <Row className={classes.managePadding}>
        {featureCards.map((card) => {
          return (
            <Col
              span={12}
              xs={24}
              sm={24}
              md={12}
              className={classes.featureCardContainer}
            >
              <Card className={classes.featureCard}>
                <Row>
                  <Col span={24}>
                    <h1>{card.title}</h1>
                  </Col>
                </Row>
                <Row>
                  <Col
                    span={24}
                    style={{ textAlign: "center" }}
                    className={classes.imageGradient}
                  >
                    <img
                      src={`images/${card.img}`}
                      className={classes.cardImage}
                      alt="card logo"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col span={24}>
                    <p className={classes.cardDescription}>
                      {card.description}
                    </p>
                  </Col>
                </Row>
              </Card>
            </Col>
          );
        })}
      </Row>
    
    </div>
  );
};

export default FeatureCards;
