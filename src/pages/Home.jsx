import React from 'react'
import { Col, Row, Statistic } from 'antd';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className='pt-24 text-center'>
      <h1 className='text-5xl text-center text-slate-800 font-bold font-sans mb-14'>Home 
            <span className=" text-sky-700">  Page</span>
      </h1>
      <Row>
        <Col span={12}>
          <Statistic title="Aktif Linkler" value={112893} />
          <button 
                className='w-36 h-14 border-2 text-white bg-sky-800 rounded-full mt-4 font-sans text-lg hover:bg-sky-700 hover:text-slate-50 hover:shadow-md'
                onClick={() => navigate("/ActiveLinks")}
                >
                    Tabloyu Gör
          </button>
        </Col>
        <Col span={12}>
          <Statistic title="Arşivlenen Linkler" value={112893} />
          <button 
                className='w-36 h-14 border-2 border-sky-800 text-sky-900 bg-slate-50 mt-4 rounded-full text-lg font-sans hover:bg-sky-800 hover:text-slate-50 hover:shadow-md'
                onClick={() => navigate("/ArchivedLinks")}
                >
                    Tabloyu Gör
                </button>
        </Col>
      </Row>
    </div>
  )
}

export default Home