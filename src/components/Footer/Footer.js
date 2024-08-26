import React from 'react'
import { Row, Col } from 'antd';
import classes from './Footer.module.scss';
const Footer = () => {
  return (
    <div className={`container  ${classes.footer}`}>
            <Row>
                <Col span = {24} style = {{display: 'flex', justifyContent: 'center'}}>
                    <p className={classes.footerText}> All Rights Reserved © DigiCampus 2023</p>
                </Col>
            </Row>
    </div>
  )
}

export default Footer