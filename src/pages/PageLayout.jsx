import React from 'react'
import { Outlet } from "react-router-dom";
import Sidebar2 from '../components/Sidebar2.jsx';

const PageLayout = () => {

  return (
    <div className="bg-slate-50 w-full h-screen">
      <div className="flex flex-row">
      <Sidebar2 />
      <main className='p-6 h-screen w-full bg-slate-50'>
          <Outlet />
      </main>
      </div>
      <footer>
        <p className='text-base text-center text-stone-600 bg-slate-100 font-sans py-4'>Beylikdüzü Belediyesi</p>
      </footer>
    </div>
  )
}

export default PageLayout
