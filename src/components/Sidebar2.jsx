import React from 'react'

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
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
        icon: <UserOutlined />,
        title: 'Profil',
        path: '/Profile',
        },
        {
          id: '3',
          icon: <LinkOutlined />,
          title: 'Link Kısalt',
          path: '/UrlShortenerPage',
        },
        {
          id: '4',
          icon: <TableOutlined />,
          title: 'Aktif Linkler',
          path: '/ActiveLinks',
        },
        {
          id: '5',
          icon: <TableOutlined />,
          title: 'Arşivlenen Linkler',
          path: '/ArchivedLinks',
        },
    ];

  return (
    <aside className='w-1/5 px-6 py-14 bg-sky-950 text-gray-400 h-screen rounded-r-xl'>
        <div className="flex ml-3 text-gray-400 text-2xl">
            Menu
        </div>
    
        <ul className="mt-8 items-center"> 
            {items.map((item) =>
                <li key={item.id}
                >
                    <NavLink 
                    to={item.path} 
                    className={({ isActive }) => `"relative flex text-lg font-medium px-4 py-2 my-2 font-sans" ${isActive ? "bg-sky-700 text-white rounded-xl" : ""}`}
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