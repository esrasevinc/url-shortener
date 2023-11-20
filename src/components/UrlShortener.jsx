import React, { useState } from 'react'

const UrlShortener = ({ setInputValue, setShortInputValue }) => {
   
    const [ inputUrl, setInputUrl ] = useState('');
    const [ inputShortUrl, setInputShortUrl ] = useState('');

    const handleLongUrl = (e) => {
        setInputUrl(e.target.value)
    } 

    const handleInputShortUrl = (e) => {
        setInputShortUrl(e.target.value)
    }  

    const handleClick = () => {
        setInputValue(inputUrl)
        setInputUrl('')
        setShortInputValue(inputShortUrl)
        setInputShortUrl('')
    }

  return (
    <div>
      <div className='justify-center text-center'>
          <h1 className='text-5xl text-center text-slate-800 font-bold font-sans pt-16 mb-8'>Url 
            <span className=" text-sky-700">  Kısaltıcı</span>
          </h1>
          <p className="text-l text-stone-600 font-sans m-2">Uzun ve anlaşılması zor bağlantıları kısaltarak
          <br /> 
          kendi iş hedeflerinize göre kişiselleştirin ve tıklanma performansını ölçün.</p>
          <div className="flex flex-col items-center p-2">
            <input 
            type="text" 
            className='w-[70%] h-14 rounded-full m-2 px-6 py-4 border-slate-600 border-2' 
            placeholder='Lütfen kısaltmak istediğiniz linki giriniz.'
            onChange={handleLongUrl}
            value={inputUrl}
            />
            <div className="flex flex-row justify-between w-[70%]">
                <input 
                type="text" 
                className='w-4/5 h-14 rounded-full mt-4 px-6 py-4 border-slate-600 border-2' 
                placeholder='Kısaltmak istediğiniz halini giriniz. (Opsiyonel)'
                onChange={handleInputShortUrl}
                value={inputShortUrl}
                />
                <button 
                className='w-36 h-14 text-white bg-sky-800 rounded-full mt-4 text-lg font-sans hover:bg-sky-700 hover:text-slate-50 hover:shadow-md'
                onClick={handleClick}
                >
                    Kısalt
                </button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default UrlShortener