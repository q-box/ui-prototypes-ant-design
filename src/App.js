import React, { Component } from 'react';
import 'antd/dist/antd.css';
import logo from './logo.png';
import science from './imgs/science.png';
import engineering from './imgs/engineering.png';
import technology from './imgs/technology.png';
import mathematics from './imgs/mathematics.png';
import hamburguer from './imgs/hamburguer.png'
import { Carousel } from 'antd';
import { Row, Col } from 'antd';
import { Layout, Menu, Drawer } from 'antd';
import { Card, Icon } from 'antd';
import { Pagination } from 'antd';
import { Tabs, Modal, Input, Button } from 'antd';
import './App.css';

const { Meta } = Card;
const { Header, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;

class App extends Component {
  
  state = { visible: false };

  state = { modal: false }

  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: 'Tab 1', content: 'Teste', key: '0' },
    ];
    this.state = {
      activeKey: panes[0].key,
      panes,
    };
  }

  setModal(modal) {
    this.setState({modal});
  }

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  handleClick = (e) => {
    console.log('click ', e);
  }

  showDrawer = () => {
    this.setState ({
      visible: true,
    });
  };

  add = (name) => {
    document.querySelector('.txt-lista').value = null;
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: `${name}`, content: 'New Tab Pane', key: activeKey });
    this.setState({ panes, activeKey });
    this.setModal(false);
  }

  render() {
    return (
      <div className="App">
        <Header className="App-header">
          <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
            <Menu.Item key="1" className="menu-float-left" onClick={this.showDrawer}><img alt="Menu Lateral" style={{ width: '20px' }} src={hamburguer}></img></Menu.Item>
            <Menu.Item key="2" className="menu-float-left"><img width="128" alt={'QBox'} src={logo}></img></Menu.Item>
            <Menu.Item key="3" className="menu-float-right"><Icon className="icon-menu" type="logout" theme="outlined" />SAIR</Menu.Item>
            <Menu.Item key="4" className="menu-float-right"><Icon className="icon-menu" type="user" theme="outlined" />PERFIL</Menu.Item>
            <Menu.Item key="5" className="menu-float-right"><Icon className="icon-menu" type="bell" theme="outlined" />NOTIFICAÇÕES</Menu.Item>
            <Menu.SubMenu key="sub1" className="menu-float-right" title={<span><Icon className="icon-menu" type="team" /><span>TURMAS</span></span>}>
              <Menu.Item key="6" className="submenu-center">Português</Menu.Item>
              <Menu.Item key="7" className="submenu-center">Matemática</Menu.Item>
              <Menu.Item key="8" className="submenu-center">Física</Menu.Item>
              <Menu.Item key="9" className="submenu-center">Biologia</Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Header>

        <Modal
          title="Crie uma nova lista" centered visible={this.state.modal} onOk={() => this.add(document.querySelector('.txt-lista').value)} onCancel={() => this.setModal(false)}>
          <p>Nome da Lista:</p>
          <Input className={'txt-lista'} placeholder="Insira o nome da lista" />
        </Modal>

        <Drawer title="Menu Lateral" placement="left" closable={true} onClose={this.onClose} visible={this.state.visible}>
          <Menu onClick={this.handleClick} style={{ width: 256 }} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline">
            <SubMenu key="sub11" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
              <MenuItemGroup key="g1" title="Item 1">
                <Menu.Item key="11">Option 1</Menu.Item>
                <Menu.Item key="12">Option 2</Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup key="g2" title="Item 2">
                <Menu.Item key="13">Option 3</Menu.Item>
                <Menu.Item key="14">Option 4</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
            <SubMenu key="sub12" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
              <Menu.Item key="15">Option 5</Menu.Item>
              <Menu.Item key="16">Option 6</Menu.Item>
              <SubMenu key="sub13" title="Submenu">
                <Menu.Item key="17">Option 7</Menu.Item>
                <Menu.Item key="18">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key="sub14" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
              <Menu.Item key="19">Option 9</Menu.Item>
              <Menu.Item key="110">Option 10</Menu.Item>
              <Menu.Item key="111">Option 11</Menu.Item>
              <Menu.Item key="112">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </Drawer>

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
            <Row>
              <Col span={24}>
                <span className="lists-title">Listas</span>
              </Col>
            </Row>

            <Button onClick={() => this.setModal(true)}>+</Button>

            <Row>
              <Col lg={5}></Col>
              <Col lg={14}>
                <Tabs defaultActiveKey="21" size={"large"}>
                  <TabPane tab="Física" key="21">
                    <Row style={{ paddingBottom: '70px' }} gutter={48}>
                      <Col lg={8}>
                        <Card style={{ }}
                          cover={<img alt="example" src={science} />}
                          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                          <Meta
                            title="Ciência"
                            description="Algumas listas com assuntos de ciências"
                          />
                          <p>qbox.com/listas/ciências</p>
                        </Card>
                      </Col>

                      <Col lg={8}>
                        <Card style={{ }}
                            cover={<img alt="example" src={mathematics} />}
                            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                            <Meta
                              title="Matemática"
                              description="Algumas listas com assuntos de ciências"
                            />
                            <p>qbox.com/listas/matemática</p>
                          </Card>
                      </Col>

                      <Col lg={8}>
                        <Card style={{ }}
                            cover={<img alt="example" src={technology} />}
                            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                            <Meta
                              title="Tecnologia"
                              description="Listas com assuntos sobre tecnologia"
                            />
                            <p>qbox.com/listas/tecnologia</p>
                          </Card>
                      </Col>
                    </Row>

                    <Row style={{ paddingBottom: '50px' }} gutter={48}>
                      <Col lg={8}>
                        <Card style={{ }}
                          cover={<img alt="example" src={engineering} />}
                          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                          <Meta
                            title="Engenharia"
                            description="Listas com assuntos sobre engenharias"
                          />
                          <p>qbox.com/listas/engenharia</p>
                        </Card>
                      </Col>
                    </Row>

                    <Pagination defaultCurrent={1} total={50} />
                  </TabPane>
                  <TabPane tab="Química" key="22">
                      <Row style={{ paddingBottom: '70px' }} gutter={48}>
                        <Col lg={8}>
                          <Card style={{ }}
                            cover={<img alt="example" src={science} />}
                            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                            <Meta
                              title="Ciência"
                              description="Algumas listas com assuntos de ciências"
                            />
                            <p>qbox.com/listas/ciências</p>
                          </Card>
                        </Col>

                        <Col lg={8}>
                          <Card style={{ }}
                              cover={<img alt="example" src={mathematics} />}
                              actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                              <Meta
                                title="Matemática"
                                description="Algumas listas com assuntos de ciências"
                              />
                              <p>qbox.com/listas/matemática</p>
                            </Card>
                        </Col>

                        <Col lg={8}>
                          <Card style={{ }}
                              cover={<img alt="example" src={technology} />}
                              actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                              <Meta
                                title="Tecnologia"
                                description="Listas com assuntos sobre tecnologia"
                              />
                              <p>qbox.com/listas/tecnologia</p>
                            </Card>
                        </Col>
                      </Row>

                      <Row style={{ paddingBottom: '50px' }} gutter={48}>
                        <Col lg={8}>
                          <Card style={{ }}
                            cover={<img alt="example" src={engineering} />}
                            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                            <Meta
                              title="Engenharia"
                              description="Listas com assuntos sobre engenharias"
                            />
                            <p>qbox.com/listas/engenharia</p>
                          </Card>
                        </Col>
                      </Row>
                      <Pagination defaultCurrent={1} total={50} />
                  </TabPane>
                  <TabPane tab="Geografia" key="23">
                    <Row style={{ paddingBottom: '70px' }} gutter={48}>
                      <Col lg={8}>
                        <Card style={{ }}
                          cover={<img alt="example" src={science} />}
                          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                          <Meta
                            title="Ciência"
                            description="Algumas listas com assuntos de ciências"
                          />
                          <p>qbox.com/listas/ciências</p>
                        </Card>
                      </Col>

                      <Col lg={8}>
                        <Card style={{ }}
                            cover={<img alt="example" src={mathematics} />}
                            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                            <Meta
                              title="Matemática"
                              description="Algumas listas com assuntos de ciências"
                            />
                            <p>qbox.com/listas/matemática</p>
                          </Card>
                      </Col>

                      <Col lg={8}>
                        <Card style={{ }}
                            cover={<img alt="example" src={technology} />}
                            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                            <Meta
                              title="Tecnologia"
                              description="Listas com assuntos sobre tecnologia"
                            />
                            <p>qbox.com/listas/tecnologia</p>
                          </Card>
                      </Col>
                    </Row>

                    <Row style={{ paddingBottom: '50px' }} gutter={48}>
                      <Col lg={8}>
                        <Card style={{ }}
                          cover={<img alt="example" src={engineering} />}
                          actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
                          <Meta
                            title="Engenharia"
                            description="Listas com assuntos sobre engenharias"
                          />
                          <p>qbox.com/listas/engenharia</p>
                        </Card>
                      </Col>
                    </Row>
                    <Pagination defaultCurrent={1} total={50} />
                  </TabPane>
                  {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
                </Tabs>
                </Col>
              <Col lg={5}></Col>
            </Row>
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
