import React from "react";
import { Helmet } from "react-helmet";
import { Row, Col } from "antd";
import classes from "./Banner.module.scss";
const Banner = () => {
  return (
    <div className={`container ${classes.banner}`}>
      <Helmet title="DigiCampus">
      </Helmet>
      <Row>
        <Col span={13} md={13} sm={24} xs={24} className={classes.info}>
          <h2>Let's make</h2>
          <h1 className={classes.title}> Proxy Free Attendance</h1>
          <p className={classes.detail}>
            <strong>DigiCampus </strong>is an online attendance platform which
            allow users to create and give attendance with proxy free
            environment. Easy to use with the help of QR scanners and more
            convenient unlike traditional systems.
          </p>
        </Col>
        <Col span={11} sm={11} xs={24} className={classes.bannerImage}>
          <img src="/images/banner.png" alt="banner" />
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
