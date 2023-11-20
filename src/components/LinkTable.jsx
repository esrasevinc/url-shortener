import React, { useMemo, useState } from 'react';
import { Space, Table, Tooltip } from 'antd';
import { DeleteOutlined, FolderOpenOutlined } from '@ant-design/icons';

const LinkTable = () => {

    const columns = [
        {
          title: 'Kısaltılmış Link',
          dataIndex: 'shortUrl',
          key: 'shortUrl',
          render: (text) => <a href={text}>{text}</a>,
        },
        {
          title: 'Uzun Link',
          dataIndex: 'longUrl',
          key: 'longUrl',
          render: (text) => <a href={text}>{text}</a>,
        },
        {
          title: 'Tarih',
          dataIndex: 'date',
          key: 'date',
          showSorterTooltip: { title: 'Sıralamak için tıkla' },
          sorter: (a, b) => (new Date(b.date) - new Date(a.date)),
          sortDirections: ['ascend', 'descend', 'ascend'],
        },
        {
          title: 'Tıklanma Sayısı',
          dataIndex: 'clickCount',
          key: 'clickCount',
          showSorterTooltip: { title: 'Sıralamak için tıkla' },
          sorter: (a, b) => a.clickCount - b.clickCount,
          sortDirections: ['ascend', 'descend', 'ascend'],
        },
        {
          title: 'İşlem',
          dataIndex: '',
          key: 'x',
          render: () => (<Space size='large'>
            <a>
              <Tooltip placement="top" title='Sil'>
                <DeleteOutlined className='font-bold text-xl text-red-500'/>
              </Tooltip>
            </a>
            <a>
              <Tooltip placement="top" title='Arşivle'>
                <FolderOpenOutlined className='font-bold text-xl text-green-600'/>
              </Tooltip>
            </a>
          </Space>)
          },
      ];

      const dataSource = [
        {
          key: '1',
          shortUrl: 'https://ant.design/components/table',
          longUrl: 'https://ant.design/components/table',
          date: 'Mar 12 2023 10:00:00 AM',
          clickCount: 25,
        },
        {
          key: '2',
          shortUrl: 'https://yuvam-olur-musun.vercel.app',
          longUrl: 'https://yuvam-olur-musun.vercel.app/cinsler/kedi',
          date: 'Apr 12 2023 10:00:00 AM',
          clickCount: 10,
        },
        {
          key: '3',
          shortUrl: 'https://yuvam-olur-musun.vercel.app',
          longUrl: 'https://yuvam-olur-musun.vercel.app/cinsler/kedi',
          date: 'Jan 15 2023 10:00:00 AM',
          clickCount: 15,
        },
      ];



  return (
    <div className='flex flex-col items-center justify-center pt-16 '>
        <div className="w-[80%]">
        <Table  columns={columns} dataSource={dataSource} />
        </div>
    </div>
  )
}

export default LinkTable