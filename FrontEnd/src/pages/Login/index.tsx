/**
 * @description 主页index
 * @author serberina
 * @date 2020/06/13
 */
import React from 'react';
import { Row, Col, BackTop, Spin } from 'antd';
import UserCom from '@/components/UserCom';
import { connect } from 'dva';
import LazyLoad from 'react-lazyload';
import { connectState, DispatchType } from '@/models/connect';

type Iprops = ReturnType<typeof mapStateToProps> & DispatchType

const Index: React.FC<Iprops> = props => {
  return (
    <div>
      <Spin spinning={props.globaLoading} size="large">
        <UserCom />
      </Spin>
    </div>
  );
};

const mapStateToProps = ({ users }: connectState) => ({
  globaLoading: users.globaLoading,
});

export default connect(mapStateToProps)(Index);
