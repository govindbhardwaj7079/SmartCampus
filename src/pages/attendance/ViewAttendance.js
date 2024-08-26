import React, { useEffect, useState } from "react";
import db from "../../firebase";
import { Table, Row, Col } from "antd";
const ViewAttendance = () => {
  const [tableData, setTableData] = useState([]);

  const columns = [
    {
      title: "Attendance Details",
      dataIndex: "studentdetails",
      key: "studentdetails",
    },
  
  ];
  useEffect(() => {
    let dataWeGot = [];
    db.collection("attendance")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          dataWeGot.push(userData);
        });
        setTableData(dataWeGot);
      })
      .catch((error) => {
        console.error("Error getting documents: ", error);
      });
  }, []);
  return (
      <Row style = {{marginTop: '1.5rem'}}>
        <Col span = {24}>
        <Table  style = {{width: '100vw'}} columns={columns} dataSource={tableData} pagination= {false}   />
        </Col>
      </Row>
  );
};

export default ViewAttendance;
