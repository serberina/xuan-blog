import React from 'react';
import { Avatar, Divider, Tooltip, Icon, Col, Row } from 'antd';

export default function BarCom() {
  return (
    <Row style={{ background: '#fff', borderRadius: 10, textAlign: 'center' }}>
      <Col style={{ padding: '0px 33px 0px 33px' }}>
        <Divider style={{ color: '#666' }}>ABOUT ME</Divider>
      </Col>
      <Avatar
        src="../public/images/02.jpg"
        style={{ width: '60%', height: '60%' }}
      />
      <div
        style={{
          color: '#666',
          fontSize: 12,
          padding: '0 50px',
          //marginTop: 20,
        }}
      >
        每天努力一点点
      </div>
      <div
        style={{
          marginBottom: 50,
          color: '#666',
          fontSize: 12,
          padding: '0 50px',
          marginTop: 8,
        }}
      >
        一个小学生的成长之路
      </div>
    </Row>
  );
}
