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
const { Header, Sider } = Layout;

const Sidebar = ({ Children }) => {

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} className='h-screen'>

        <div className="flex flex-row text-slate-50 text-2xl p-7">
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
              label: 'Linkler Tablosu',
            },
          ]}
        />
        </div>
      </Sider>

      <Layout className='h-screen bg-white'>
        <div>
        <Header className='p-0 bg-slate-100'>
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
        
        </div>
      </Layout>
    </Layout>
  );
};

export default Sidebar;