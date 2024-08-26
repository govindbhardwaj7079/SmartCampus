import { Row, Col, Tabs } from "antd";
import React from "react";
import Student from "./Student";
import Teacher from "./Teacher";
import classes from "./index.module.scss";
const Attendance = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: `Student`,
      children: <Student />,
    },
    {
      key: "2",
      label: `Teacher`,
      children: <Teacher />,
    },
  ];
  return (
    <div className="container">
      <Row>
        <Col span={24} className={classes.tabsContainer}>
          <Tabs
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
            className={classes.attendanceTabs}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Attendance;
