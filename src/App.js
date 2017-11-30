import React from 'react';
import Button from 'antd/lib/button';
import './App.css';
import Plaid from './components/Plaid';
import { RestaurantCheck, StoreCheck } from './components/Filters.js';
import { Layout, Menu, Breadcrumb, Icon, Checkbox } from 'antd';
import MapWithAFusionTablesLayer from './Map.js';


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


class App extends React.Component {
  render() {
    return (
      <Layout>
        <Header
          className="header"
          style={{ background: '#4B4396' }}
        >

          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{
                         lineHeight: '50px',
                         background: '#4B4396',
                        }}
          >

            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Account</Menu.Item>
            <Menu.Item key="3">Features</Menu.Item>
            <Menu.Item key="4">Contact</Menu.Item>
            <div><Button
              style={{ width: '120px' }}
              style={{ position: 'absolute', top: 0, right: 0 }}
            ><Plaid />
                 </Button>
            </div>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#adf1f7' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
              style={{ background: '#adf1f7' }}
            >
              <SubMenu key="sub1" title={<span><Icon type="pushpin-o" /> Filters</span>}>
                <Menu.Item key="a"><RestaurantCheck /></Menu.Item>
                <Menu.Item key="b"><StoreCheck /></Menu.Item>


              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="star-o" />Favorites</span>}>
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="heart-o" />Saved</span>}>
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 5px 5px' }}>

            <Content style={{
 background: '#f2f2f4', padding: 5, margin: 0, minHeight: 280,
}}
            >
              <MapWithAFusionTablesLayer />


            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;
