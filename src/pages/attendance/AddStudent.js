import React, { useState } from "react";
import { Col, Row, Form, Input, Button, notification} from "antd";
import classes from "./index.module.scss";
import db from "../../firebase";
const AddStudent = ({docID}) => {
  const [loading, setLoading] = useState(false);
  const formRef = React.useRef(null);
  const onFinish = (values) => {
    setLoading(true);
    db.collection("users").doc(docID).collection("students").add({
      rollno: values.roll_no,
      name: values.name,  
      branch: values.branch,
      date: new Date().toLocaleString(),
    });
    notification.open({
      status: 'success',
      message: 'Student Added Successfully',
    });
    formRef.current?.resetFields();
    setLoading(false);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Row style={{ padding: "0.5rem 0.2rem" }} gutter={[5]}>
      <Col
        span={24}
        className={classes.createFormContainer}
        style={{ paddingInline: "0.5rem" }}
      >
        <Form
          name="basic"
          layout="vertical"
          ref={formRef}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={[20]}>
            <Col span={12} md={12} sm={24} xs={24}>
              <Form.Item
                label="Roll No"
                name="roll_no"
                rules={[
                  {
                    required: true,
                    message: "Please input student's roll no!",
                  },
                ]}
              >
                <Input placeholder="Please Enter Student Roll No." />
              </Form.Item>
            </Col>

            <Col span={12} md={12} sm={24} xs={24}>
              <Form.Item
                label="Student Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input student name!",
                  },
                ]}
              >
                <Input placeholder="Please Enter Student Name" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[20]}>
            <Col span={12} md={12} sm={24} xs={24}>
              <Form.Item
                label="Branch Name"
                name="branch"
                rules={[
                  {
                    required: true,
                    message: "Please input branch name!",
                  },
                ]}
              >
                <Input placeholder="Please Enter Branch Name" />
              </Form.Item>
            </Col>
          </Row>

          <Row style={{ display: "flex", justifyContent: "flex-end" }}>
            <Col span={4} xl={4} lg={5} md={6} sm={8} xs={12}>
              <Form.Item>
                <Button
                  loading = {loading}
                  type="primary"
                  htmlType="submit"
                  style={{
                    width: "95%",
                    marginRight: "1rem",
                    marginTop: "1rem",
                  }}
                >
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default AddStudent;
