import React from 'react'
import { Space, Table } from 'antd';
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
          sorter: (a, b) => (new Date(b.date) - new Date(a.date)),
        },
        {
          title: 'Tıklanma Sayısı',
          dataIndex: 'clickCount',
          key: 'clickCount',
          sorter: (a, b) => a.clickCount - b.clickCount,
        },
        {
          title: 'İşlem',
          dataIndex: '',
          key: 'x',
          render: () => (<Space size='large'>
            <div className="group">
            <a>
            <span title='Sil' className='hidden group-hover:block text-stone-800'>Sil</span>
            <DeleteOutlined className='font-bold text-xl text-red-500'/>
            </a>
            </div>
            <a>
                <FolderOpenOutlined className='font-bold text-xl text-green-600'/>
            </a>
          </Space>)
          },
      ];

      const dataSource = [
        {
          key: '1',
          shortUrl: 'https://ant.design/components/table',
          longUrl: 'https://ant.design/components/table',
          date: '17/11/2023',
          clickCount: 25,
        },
        {
          key: '2',
          shortUrl: 'https://yuvam-olur-musun.vercel.app',
          longUrl: 'https://yuvam-olur-musun.vercel.app/cinsler/kedi',
          date: '10/11/2023',
          clickCount: 10,
        },
      ];



  return (
    <div className='flex flex-col items-center justify-center pt-16 '>
        <div className="w-[80%]">
        <Table columns={columns} dataSource={dataSource} />
        </div>
    </div>
  )
}

export default LinkTable