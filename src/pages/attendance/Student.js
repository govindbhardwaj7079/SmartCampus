import { Row, Col, Button, notification } from "antd";
import React, { useEffect } from "react";
import classes from "./index.module.scss";
import { QrReader } from "react-qr-reader";
import { useState } from "react";
import db from "../../firebase";
import { useNavigate } from "react-router-dom";
const Student = () => {
  const [data, setData] = useState("");
  const [selected, setSelected] = useState("");
  const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setSelected("environment");
  }, []);
  useEffect(() => {
    if (data !== "") {
      db.collection("attendance")
        .add({
          studentdetails: data,
        })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          setTimeout(()=>{
            notification.open({
              status: 'success',
               message: 'Attendance Taken Successfully',
              });
              navigate('/');
          },5000)
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    }
  }, [data, navigate]);
  const handleScan = async (scanData) => {
    setLoadingScan(true);
    console.log(`loaded data data`, scanData);
    if (scanData && scanData !== "") {
      setData(scanData);
      setStartScan(false);
      setLoadingScan(false);
      console.log(startScan, loadingScan);
      // setPrecScan(scanData);
    }
  };

  return (
    <Row>
      <Col span={24}>
        <Button
          type="primary"
          style={{ marginTop: "1rem", marginBottom: "1.5rem" }}
          onClick={() => setShowQR(true)}
        >
          Give Attendance
        </Button>
        {showQR && (
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Col
              span={15}
              lg={15}
              sm={22}
              md={20}
              xs={24}
              className={classes.scanContainer}
            >
              <QrReader
                constraints={{ facingMode: selected }}
                onScan={handleScan}
                onResult={(result, error) => {
                  if (!!result) {
                    setData(result?.text);
                  }
                }}
                style={{ width: "50%" }}
              />
              <p
                style={{
                  textAlign: "center",
                  color: "greenyellow",
                  fontWeight: "bold",
                }}
              >
                {data}
              </p>
            </Col>
          </Row>
        )}
      </Col>
    </Row>
  );
};

export default Student;
