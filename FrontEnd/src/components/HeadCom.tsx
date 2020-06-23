/**
 * @description 菜单组件,包含一个抽屉在小屏展示个人板块
 * @author serberina
 * @date 2020/6/13
 */
import React, { useState } from 'react';
import { Row, Col, Menu, Icon, Input, Affix, Drawer, Tooltip } from 'antd';
import { Link } from 'umi';
import './index.less';
import BarCom from './BarCom';
import UserCom from './UserCom';
import HotCom from './HotCom';
import TagsCom from './TagsCom';
import Instagram from './Instagram';

interface Iprops {
  idx?: string[];
}

const HeadCom: React.FC<Iprops> = props => {
  const [menuKeys, setMenuKeys] = useState(props.idx);

  const handleChange = (e: any) => {
    setMenuKeys(e.key);
  };
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Drawer
        width="40%"
        placement="right"
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <BarCom />
        <div style={{ textAlign: 'center' }}>
          <img
            style={{ width: '100%' }}
            src="../public/images/banner-spot.jpg"
            alt=""
          />
        </div>
        <UserCom />
        <HotCom />
        <TagsCom />
        <Instagram />
      </Drawer>
      <Row
        style={{
          background: '#fff',
          borderTop: '1px solid #e8e8e8',
          borderBottom: '1px solid #e8e8e8',
          height: 100,
        }}
      >
        <Col xs={0} sm={0} md={1} lg={2} xl={5}></Col>
        <Col xs={0} sm={9} md={9} lg={8} xl={5}></Col>
        <Col xs={23} sm={14} md={13} lg={12} xl={9}>
          <Menu
            mode="horizontal"
            onClick={handleChange}
            selectedKeys={menuKeys}
            style={{ borderBottom: 'none', height: 60, textAlign: 'right' }}
          >
            <Menu.Item
              style={{
                borderBottom: 'none',
                lineHeight: '100px',
                textAlign: 'center',
              }}
              key="index"
            >
              <Link
                to="/"
                style={{ color: '#000', borderTop: '2px solid #fff' }}
              >
                <span id="hj-menu1" style={{ fontSize: '16px' }}>
                  首&nbsp;页
                </span>
              </Link>
            </Menu.Item>
            <Menu.Item
              style={{
                borderBottom: 'none',
                lineHeight: '100px',
                textAlign: 'center',
              }}
              key="message"
            >
              <Link to="/file" style={{ color: '#000', width: '100%' }}>
                <span id="hj-menu2" style={{ fontSize: '16px' }}>
                  归&nbsp;档
                </span>
              </Link>
            </Menu.Item>
            <Menu.Item
              style={{
                borderBottom: 'none',
                lineHeight: '100px',
                textAlign: 'center',
              }}
              key="article"
            >
              <Link to="/articlelist" style={{ color: '#000', width: '100%' }}>
                <span id="hj-menu2" style={{ fontSize: '16px' }}>
                  文&nbsp;章
                </span>
              </Link>
            </Menu.Item>
            {/* <Menu.Item
              style={{
                borderBottom: 'none',
                lineHeight: '100px',
                textAlign: 'center',
              }}
              key="message"
            >
              <Link to="/message" style={{ color: '#000', width: '100%' }}>
                <span id="hj-menu2" style={{ fontSize: '16px' }}>
                  关&nbsp;于
                </span>
              </Link>
            </Menu.Item> */}
          </Menu>
        </Col>
        <Col xs={0} sm={1} md={1} lg={0} xl={0}>
          <Affix offsetTop={200}>
            <Icon
              onClick={() => setVisible(true)}
              style={{
                lineHeight: '108px',
                fontSize: 40,
                color: '#24c2cb',
                cursor: 'pointer',
              }}
              type="left-square"
              theme="filled"
            />
          </Affix>
        </Col>
        <Col xs={0} sm={0} md={0} lg={2} xl={5}></Col>
      </Row>
    </div>
  );
};
export default HeadCom;
