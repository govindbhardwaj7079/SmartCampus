import { Row, Col, Menu } from "antd";
import React, { useEffect, useState } from "react";
import classes from "./index.module.scss";
import CreateAttendance from "./CreateAttendance";
import AddStudent from "./AddStudent";
import db from "../../firebase";
import { useSelector } from "react-redux";
import ViewAttendance from "./ViewAttendance";
const ITEMS = [
  { key: "add_student", label: "Add Student" },
  { key: "create_attendance", label: "Create Attendance" },
  { key: "view_attendance", label: "View Attendance" },
];
const Teacher = () => {
  const [checkMenu, setCheckMenu] = useState("add_student");
  const user = useSelector((state) => state.user);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [docID, setDocID] = useState(null);
  // to get screenwidht for managing responsiveness as screenwidht decrease or increase
  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
    };
    window.addEventListener("resize", updateWindowDimensions);
    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  useEffect(() => {
    const email = user.email;
    const usersRef = db.collection("users");
    usersRef
      .where("email", "==", email)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setDocID(doc.id);
        });
      })
      .catch((error) => {
        console.error("Error getting documents: ", error);
      });
  }, [user.email]);

  const onClick = (e) => {
    setCheckMenu(e.key);
    console.log("click ", e.key);
  };
  return (
    <Row gutter={[15]}>
      <Col span={5} sm={9} lg={5} xs={24}>
        <Menu
          onClick={onClick}
          mode={windowWidth <= 576 ? "horizontal" : "vertical"}
          items={ITEMS}
          defaultActiveFirst={["add_student"]}
          className={classes.teacherMenu}
        />
      </Col>
      <Col span={19} sm={15} lg={19} xs={24}>
        {checkMenu === "add_student" && <AddStudent docID = {docID} />}
        {checkMenu === "create_attendance" && <CreateAttendance docID = {docID} />}
        {checkMenu === "view_attendance" &&  <ViewAttendance/>}
      </Col>
    </Row>
  );
};

export default Teacher;
