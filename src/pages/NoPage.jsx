import React from 'react'

const NoPage = () => {
  
    return (
    <div>
        <main className='pt-24 items-center justify-center'>
        <h1 className='text-5xl text-center text-slate-800 font-bold font-sans mb-14'>Sayfa 
        <span className=" text-sky-700">  Bulunamadı!</span>
        </h1>
        <p className="text-l text-center text-stone-600 font-sans m-2">Aradığınız sayfayı bulamadık... Tekrar deneyin.</p>
        </main>
    </div>
    )
}

export default NoPage
