/**
 * @description 文章详情,文章留言组件
 * @author serberina
 * @date 2020/06/13
 */
import React, { useEffect, useState } from 'react';
import { Row, Col, Breadcrumb, Icon, Spin, Divider } from 'antd';
import HeadCom from '@/components/HeadCom';
import TitleCom from '@/components/TitleCom';
import BarCom from '@/components/BarCom';
import HotCom from '@/components/HotCom';
import UserCom from '@/components/UserCom';
import TagsCom from '@/components/TagsCom';
import Instagram from '@/components/Instagram';
import FooterCom from '@/components/FooterCom';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
import '../index.less';
import { articleDetailApi } from '@/services/article';
import moment from 'moment';
import CommentsComp from './components/CommentsComp';
import { connect } from 'dva';
import { connectState, IRouteComponentProps } from '@/models/connect';

interface DetailType {
  content: string;
  date: number;
  hot: true;
  img: string;
  info: string;
  msg: number;
  title: string;
  type: string;
  view: number;
  _id: string;
  [key: string]: any;
}

type ArticleDetailType = ReturnType<typeof mapStateFromProps> &
  IRouteComponentProps;

const ArticleDetail: React.FC<ArticleDetailType> = props => {
  const [detail, setDetail] = useState<Partial<DetailType>>({ content: '' });
  const [load, setLoad] = useState<boolean>(false);
  useEffect(() => {
    setLoad(true);
    const { _id = '' }: any = props.location.query;
    articleDetailApi({ _id }).then(res => {
      setDetail(res.result[0]);
      setLoad(false);
    });
  }, []);

  const renderer = new marked.Renderer();

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function(code) {
      return hljs.highlightAuto(code).value;
    },
  });
  return (
    <div>
      <TitleCom />
      <HeadCom />
      <Row style={{ background: '#fff', paddingTop: 20, paddingBottom: 100 }}>
        <Col xs={0} sm={0} md={0} lg={1} xl={4}></Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={16}
          xl={12}
          style={{ background: '#fff', borderRadius: 10, marginRight: 20 }}
        >
          <div style={{ paddingTop: 10, paddingLeft: 10, paddingRight: 10 }}>
            <div
              style={{
                borderRadius: 10,
                padding: '5px 10px',
              }}
            >
              <Breadcrumb>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item>文章列表</Breadcrumb.Item>
                <Breadcrumb.Item>{detail.title}</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <h1
              style={{ textAlign: 'center', marginTop: 100, marginBottom: 10 }}
            >
              {detail.title}
            </h1>
            <div style={{ marginBottom: 100, textAlign: 'center' }}>
              <Icon
                style={{ marginRight: 5, color: '#888' }}
                type="calendar"
                theme="filled"
              />
              <span style={{ marginRight: 15 }}>
                {moment(detail.date).format('YYYY-MM-DD')}
              </span>
              <Icon
                style={{ marginRight: 5, color: '#888' }}
                type="eye"
                theme="filled"
              />
              <span style={{ marginRight: 15 }}>{detail.view}</span>
              <Icon
                style={{ marginRight: 5, color: '#888' }}
                type="wechat"
                theme="filled"
              />
              <span>{props.data.length}条</span>
            </div>
            <Spin spinning={load} size="large">
              <div
                style={{ marginTop: 50, paddingLeft: 20, paddingRight: 20 }}
                dangerouslySetInnerHTML={{
                  __html: marked(detail.content || ''),
                }}
              ></div>
              <Divider
                orientation="left"
                style={{ color: '#666', marginTop: 100 }}
              >
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: '#666',
                  }}
                >
                  评论区
                </span>
              </Divider>
              <div>
                <CommentsComp {...props} />
              </div>
              <Divider style={{ color: '#666', marginTop: 100 }}>
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: '#000',
                  }}
                >
                  <Icon
                    className="hj-icon1"
                    style={{ marginRight: 25 }}
                    type="github"
                    theme="filled"
                  />
                  <Icon
                    className="hj-icon2"
                    style={{ marginRight: 25 }}
                    type="wechat"
                    theme="filled"
                  />
                  <Icon
                    className="hj-icon3"
                    style={{ marginRight: 25 }}
                    type="instagram"
                    theme="filled"
                  />
                  <Icon
                    className="hj-icon4"
                    style={{ marginRight: 25 }}
                    type="yuque"
                    theme="filled"
                  />
                  <Icon
                    className="hj-icon5"
                    type="weibo-circle"
                    theme="filled"
                  />
                </span>
              </Divider>
            </Spin>
          </div>
        </Col>
        <Col
          xs={{ span: 18, offset: 3 }}
          sm={{ span: 0, offset: 0 }}
          md={{ span: 0, offset: 0 }}
          lg={{ span: 6, offset: 0 }}
          xl={{ span: 4, offset: 0 }}
        >
          <BarCom />
          <div style={{ textAlign: 'center' }}>
            <img src="../public/images/02.jpg" alt="" />
          </div>
          <UserCom />
          <HotCom />
          <TagsCom />
          <Instagram />
        </Col>
        <Col xs={0} sm={0} md={0} lg={1} xl={4}></Col>
      </Row>
      <FooterCom />
    </div>
  );
};

const mapStateFromProps = ({ article }: connectState) => ({
  data: article.data,
});

export default connect(mapStateFromProps)(ArticleDetail);
