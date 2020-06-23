import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'umi';

const { Sider: SiderComp } = Layout;

interface Iprops {
  idx: string;
}

const Sider: React.FC<Iprops> = props => {
  return (
    <SiderComp>
      <div style={{ height: '60px' }}>
        <Icon
          type="apple"
          theme="filled"
          style={{ color: '#fff', fontSize: '50px', marginTop: '5px' }}
        />
        <div
          style={{
            display: 'inline-block',
            color: '#fff',
            fontWeight: 'bold',
            lineHeight: '60px',
            height: '60px',
          }}
        >
          Management Systems
        </div>
      </div>
      <Menu defaultSelectedKeys={[props.idx]} mode="inline" theme="dark">
        <Menu.Item key="/">
          <Link to="/">
            <Icon type="home" />
            <span>首页</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/articlelist">
          <Link to="/articlelist">
            <Icon type="fire" />
            <span>文章列表</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/userslist">
          <Link to="/userslist">
            <Icon type="user" />
            <span>用户管理</span>
          </Link>
        </Menu.Item>
      </Menu>
    </SiderComp>
  );
};

export default Sider;
