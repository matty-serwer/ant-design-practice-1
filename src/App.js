import React from "react";
import { Layout, Avatar, Menu, Breadcrumb } from "antd";
import Title from "antd/lib/typography/Title";
import SubMenu from "antd/lib/menu/SubMenu";
import { UserOutlined, AppstoreOutlined } from "@ant-design/icons";
import "./App.css";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className='App'>
      <Layout>
        <Header style={{ padding: 10 }}>
          <Avatar style={{ float: "right" }} icon={<UserOutlined />} />
          {/* avatar can have an src for a custom image */}
          <Title style={{ color: "white" }} level={3}>
            Matty App
          </Title>
        </Header>
        <Layout>
          <Sider>
            <Menu defaultSelectedKeys={["Dashboard"]} mode='inline'>
              <Menu.Item key='Dashboard'>Dashboard</Menu.Item>
              <SubMenu icon={<AppstoreOutlined />} title='About Us'>
                <Menu.ItemGroup key='AboutUs' title='locations'>
                  <Menu.Item key='location1'> Location 1 </Menu.Item>
                  <Menu.Item key='location2'> Location 2 </Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: "0 50px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Breadcrumb item 1</Breadcrumb.Item>
                <Breadcrumb.Item>Breadcrumb item 2</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: '#fff', padding: 24, minHeight: 580}}>Content</div>    
            </Content>
            <Footer style={{ textAlign: 'center' }}>Copyright Footer university</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
