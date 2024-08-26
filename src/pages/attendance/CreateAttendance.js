import React, { useEffect, useState } from "react";
import { Col, Row, Form, Input, Button, Modal } from "antd";
import QRCode from "react-qr-code";
import classes from "./index.module.scss";
import db from "../../firebase";
const CreateAttendance = ({ docID }) => {
  const [value, setValue] = useState(0);
  const [indentifier, setIdentifier] = useState(false);
  const [isQRVisible, setQRVisible] = useState(false);
  const [students, setStudents] = useState([]);
  const [isAttendanceFinished, setISAttendanceFinished] = useState(false);
  const formRef = React.useRef(null);
  const [qrValue, setQRValue] = useState({});
  function compare(a, b) {
    if (a.rollno < b.rollno) {
      return -1;
    }
    if (a.rollno > b.rollno) {
      return 1;
    }
    return 0;
  }

  const onFinish = (values) => {
    // setValue(values);
    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    date = `${day}-${month}-${year}`;
    setIdentifier(date);
    const userRef = db.collection("users").doc(docID).collection("students");
    // Query the orders subcollection to retrieve all order documents
    let arrayData = [];
    userRef
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().branch === values.branch) arrayData.push(doc.data());
        });
        arrayData.sort(compare);
        setStudents(arrayData);
      })
      .catch((error) => {
        console.log("Error getting orders: ", error);
      });
    db.collection("users").doc(docID).collection("attendances").add({
      subject: values.subject,
      branch: values.branch,
      total_students: values.total_students,
      date,
      unique: date,
    });
    setQRVisible(true);
    formRef.current?.resetFields();
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (isQRVisible) {
      if (value === students.length && value > 0) {
        setISAttendanceFinished(true);
      }
      if (value < students.length) {
        setQRValue(students[value]);
        setTimeout(() => {
          setValue((prevState) => prevState + 1);
        }, 20000);
      }
    }
    console.log("qrvalue", value);
  }, [value, isQRVisible, students]);

  return (
    <Row style={{ padding: "0.5rem 0.2rem" }} gutter={[5]}>
      <Col
        span={24}
        className={classes.createFormContainer}
        style={{ paddingInline: "0.5rem" }}
      >
        <Form
          name="basic"
          ref={formRef}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={[20]}>
            <Col span={12} md={12} sm={24} xs={24}>
              <Form.Item
                label="Subject Name"
                name="subject"
                placeholder="Plese Enter Subject Name"
                rules={[
                  {
                    required: true,
                    message: "Please input subject name!",
                  },
                ]}
              >
                <Input placeholder="Please Enter Subject Name  " />
              </Form.Item>
            </Col>

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
          <Row gutter={[20]}>
            <Col span={12} md={12} sm={24} xs={24}>
              <Form.Item
                label="Total Students"
                name="total_students"
                rules={[
                  {
                    required: true,
                    message: "Please enter total students!",
                  },
                ]}
              >
                <Input placeholder="Please Enter Total Students" />
              </Form.Item>
            </Col>
          </Row>

          <Row style={{ display: "flex", justifyContent: "flex-end" }}>
            <Col span={4} xl={4} lg={5} md={6} sm={8} xs={12}>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    width: "95%",
                    marginRight: "1rem",
                    marginTop: "1rem",
                  }}
                >
                  Create
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Col>
      <Modal
        open={isQRVisible}
        footer={false}
        centered
        className={classes.qrModal}
        bodyStyle={{
          backgroundColor: "#393e46",
          maxHeight: "80vh",
          padding: "1.5rem 0",
        }}
        onCancel={() => setQRVisible(false)}
      >
        <Row>
          <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
            {isAttendanceFinished ? (
              <h1 style={{ color: "var(--sub-primary-color)" }}>
                Attendance Finished
              </h1>
            ) : (
              <QRCode
                title={qrValue.name}
                value={`${qrValue.rollno} ${qrValue.name} ${qrValue.branch} ${indentifier}`}
                bgColor={"#fff"}
                fgColor={"#000"}
              />
            )}
          </Col>
          {!isAttendanceFinished && (
            <Col
              span={24}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <h3 style={{ color: "var(--sub-primary-color)" }}>
                {qrValue.name} {qrValue.rollno}
              </h3>
            </Col>
          )}
          {isAttendanceFinished && (
            <Col
              span={24}
              style={{
                display: "flex",
                justifyContent: "center",
                paddingInline: "2rem",
              }}
            >
              <Button type="primary" onClick={() => setQRVisible(false)}>
                {" "}
                Close{" "}
              </Button>
            </Col>
          )}
        </Row>
      </Modal>
    </Row>
  );
};

export default CreateAttendance;
