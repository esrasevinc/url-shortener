import React, { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Result = () => {

    const [ shortenedUrl, setShortenedUrl ] = useState(false)
    const [ copied, setCopied ] = useState(false)

    const handleCopyToast = () => {
        if (copied) {
            toast("Kopyalandı!")
        }
    }

  return (
    <>
    {shortenedUrl && 
        <div className='flex flex-col items-center justify-center'>
            <p className="text-2xl text-stone-600 font-sans font-semibold mt-24 mb-2">Kısaltılmış Link: </p>
            <p className="text-xl text-stone-800 font-sans mb-4" >{shortenedUrl}</p>

            <CopyToClipboard
            text={shortenedUrl}
            onCopy={() => setCopied(true)}
            >
            <div>
                <button 
                className='w-36 h-14 border-2 border-sky-800 text-sky-900 bg-slate-50 rounded-full text-lg font-sans hover:bg-sky-800 hover:text-slate-50 hover:shadow-md'
                onClick={handleCopyToast}
                >
                    Kopyala
                </button>
                <ToastContainer />
            </div>

            </CopyToClipboard>
        </div>
        }
    </>
  )
}

export default Result