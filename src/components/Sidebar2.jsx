import React from 'react'

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TableOutlined,
    LinkOutlined,
    HomeOutlined
} from '@ant-design/icons';

import { NavLink } from 'react-router-dom';

const Sidebar2 = () => {

    const items = [
        {
          id: '1',
          icon: <HomeOutlined />,
          title: 'Ana Sayfa',
          path: '/Home',
        },
        {
          id: '2',
          icon: <LinkOutlined />,
          title: 'Link Kısalt',
          path: '/UrlShortenerPage',
        },
        {
          id: '3',
          icon: <TableOutlined />,
          title: 'Linkler Tablosu',
          path: '/Links',
        },
    ];

  return (
    <aside className='w-1/6 px-8 py-16 bg-sky-950 text-gray-400 h-screen rounded-r-xl'>
        <div className="flex ml-3 text-gray-400 text-xl">
            Menu
        </div>
    
        <ul className="mt-8 items-center"> 
            {items.map((item) =>
                <li key={item.id}
                >
                    <NavLink 
                    to={item.path} 
                    className={({ isActive }) => `"relative flex font-medium px-2 py-1 my-1 font-sans rounded-md" ${isActive ? "bg-sky-700 text-white" : ""}`}
                    >
                        {item.icon} 
                        <span className='ml-3'>{item.title}</span>
                    </NavLink>
                </li>
            )}
        </ul>
    </aside>
  )
}

export default Sidebar2
