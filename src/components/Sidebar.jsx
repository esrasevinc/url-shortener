import React, { useState } from 'react';

import {
    PaperClipOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TableOutlined,
    UserOutlined,
    LinkOutlined,
    HomeOutlined
} from '@ant-design/icons';

import { Layout, Menu, Button, theme } from 'antd';
import LinkTable from './LinkTable';

const { Header, Sider, Content, Footer } = Layout;

const Sidebar = () => {

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} className={!collapsed ? "w-[40%]" : ''}>

        <div className="flex flex-row  text-slate-50 text-2xl p-7">
            <PaperClipOutlined />
        </div>
    
        <div className="pt-4"> 
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <HomeOutlined />,
              label: 'Ana Sayfa',
            },
            {
              key: '2',
              icon: <LinkOutlined />,
              label: 'Link Kısalt',
            },
            {
              key: '3',
              icon: <TableOutlined />,
              label: 'Linkler',
            },
          ]}
        />
        </div>
      </Sider>

      <Layout className='h-full w-[60%] bg-slate-100'>
        <div>
        <Header className='p-0 bg-white'>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content className='my-6 mx-6 p-6 h-screen bg-slate-50'>
          <LinkTable />
        </Content>
        </div>

        <Footer className='text-center'>
          Beylikdüzü Belediyesi ©2023
        </Footer>

      </Layout>
    </Layout>
  );
};

export default Sidebar;