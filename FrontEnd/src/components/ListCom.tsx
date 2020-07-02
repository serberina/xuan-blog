/**
 * @description 首页List文章组件
 * @author serberina
 * @date 2020/06/04
 */
import React, { useEffect, useState } from 'react';
import { Icon, Spin, Card, Col, Row, Tag } from 'antd';
import { initIndexArticleListApi } from '@/services/article';
import './index.less';
import moment from 'moment';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
import '../pages/index.less';
import LazyLoad from 'react-lazyload';
import CountUp from 'react-countup';

interface DataProps {
  date: number;
  img: string;
  info: string;
  msg: number;
  title: string;
  type: string;
  view: number;
  _id: string;
  [key: string]: any;
}

export default function ListCom() {
  const [data, setData] = useState<DataProps[]>([]);
  const [load, setLoad] = useState<boolean>(false);
  useEffect(() => {
    setLoad(true);
    initIndexArticleListApi().then(res => {
      if (res?.success) {
        setData(res.result.list);
        setLoad(false);
      }
    });
  }, []);

  const articleDetail = (_id: string) => {
    window.open(`/articledetail?_id=${_id}`, '_self');
  };

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
    <Spin spinning={load} size="large">
      {data.length &&
        data.map(item => {
          return (
            <Card
              onClick={() => articleDetail(item._id)}
              hoverable={true}
              bordered={false}
              style={{ marginBottom: 10, marginRight: 10 }}
            >
              <Row>
                <Col
                  xl={24}
                  style={{ paddingLeft: 30 }}
                >
                  <div
                    style={{
                      color: '#24c2cb',
                      fontFamily: 'Josefin Sans',
                      fontWeight: 600,
                      fontSize: 14,
                      lineHeight: '32px',
                    }}
                  >
                    {moment(item.date).format('DD MMMM YYYY')}
                    <span
                      style={{ marginLeft: 8, marginRight: 8, fontSize: 24 }}
                    >
                      .
                    </span>
                    {item.type}
                  </div>
                  <div
                    style={{
                      fontSize: 16,
                      lineHeight: '22px',
                      color: '#666',
                      fontWeight: 400,
                      letterSpacing: 2,
                      marginBottom: 0,
                    }}
                  >
                    {item.title}
                  </div>
                </Col>
              </Row>
            </Card>
          );
        })}
    </Spin>
  );
}
