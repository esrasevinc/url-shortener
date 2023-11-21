import React from 'react'

import {
    PaperClipOutlined,
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
          label: '/Home',
        },
        {
          id: '2',
          icon: <LinkOutlined />,
          title: 'Link Kısalt',
          label: '/UrlShortenerPage',
        },
        {
          id: '3',
          icon: <TableOutlined />,
          title: 'Linkler Tablosu',
          label: '/Links',
        },
    ];

  return (
    <aside className='w-1/6 px-8 py-16 bg-sky-950 text-gray-400 h-screen rounded-r-xl'>
        <div className="flex text-gray-300 text-xl">
            Menu
        </div>
    
        <ul className="mt-8 items-center gap-4"> 
            {items.map((item) =>
                <li key={item.id}
                >
                    <NavLink 
                    to={item.label} 
                    className={({ isActive }) => isActive ?  "bg-sky-800 text-white w-full px-2 py-1 my-1 text-md font-sans rounded-sm" : "w-full px-2 py-1 my-1 text-md font-sans items-center rounded-sm"}
                    >
                        {item.icon} 
                        {item.title}
                    </NavLink>
                </li>
            )}
        </ul>
    
    </aside>
  )
}

export default Sidebar2
