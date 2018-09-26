import React, { Component } from 'react';
import 'antd/dist/antd.css';
import logo from './logo.png';
import { Carousel } from 'antd';
import { Row, Col } from 'antd';
import { Layout, Menu } from 'antd';
import { Card, Icon } from 'antd';
import { Pagination } from 'antd';
import './App.css';

const { Meta } = Card;
const { Header, Content, Footer } = Layout;

function onShowSizeChange(current, pageSize) {
  console.log(current, pageSize);
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="App-header">
          <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
            <Menu.Item key="1" style={{ float: 'left' }}><img width="128" src={logo}></img></Menu.Item>
            <Menu.Item key="2" style={{ float: 'right', textAlign: 'center' }}><Icon style={{ fontSize: '18px' }} type="logout" theme="outlined" />SAIR</Menu.Item>
            <Menu.Item key="3" style={{ float: 'right', textAlign: 'center' }}><Icon style={{ fontSize: '18px' }} type="user" theme="outlined" />PERFIL</Menu.Item>
            <Menu.Item key="4" style={{ float: 'right', textAlign: 'center' }}><Icon style={{ fontSize: '18px' }} type="bell" theme="outlined" />NOTIFICAÇÕES</Menu.Item>
            <Menu.Item key="5" style={{ float: 'right', textAlign: 'center' }}><Icon style={{ fontSize: '14px' }} type="team" theme="outlined" />TURMAS </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ paddingBottom: '50px' }}>
          <div>
            <Carousel>
              <div><h1>1</h1></div>
              <div><h1>2</h1></div>
              <div><h1>3</h1></div>
              <div><h1>4</h1></div>
            </Carousel>
          </div>
          <div>
            <Row><Col span={24}><h1 class="Lists-title">Listas</h1></Col></Row>
            <Row style={{ paddingBottom: '70px' }}>
              <Col span={5}></Col>
              <Col span={4}>
                <Card style={{ }}
                  cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                  actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                  <Meta
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              </Col>
              <Col span={1}></Col>
              <Col span={4}>
                <Card style={{ }}
                    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                    <Meta
                      title="Card title"
                      description="This is the description"
                    />
                  </Card>
              </Col>
              <Col span={1}></Col>
              <Col span={4}>
                <Card style={{ }}
                    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                    <Meta
                      title="Card title"
                      description="This is the description"
                    />
                  </Card>
              </Col>
              <Col span={5}></Col>
            </Row>

            <Row style={{ paddingBottom: '70px' }}>
              <Col span={5}></Col>
              <Col span={4}>
                <Card style={{ }}
                  cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                  actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                  <Meta
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              </Col>
              <Col span={1}></Col>
              <Col span={4}>
                <Card style={{ }}
                    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                    <Meta
                      title="Card title"
                      description="This is the description"
                    />
                  </Card>
              </Col>
              <Col span={1}></Col>
              <Col span={4}>

              </Col>
              <Col span={5}></Col>
            </Row>

            <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Q-Box ©2018 - IFRN CNAT
        </Footer>
      </div>
    );
  }
}

export default App;
