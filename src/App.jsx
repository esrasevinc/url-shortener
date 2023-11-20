import { useState } from 'react'
import UrlShortener from './components/UrlShortener.jsx'
import Result from './components/Result.jsx'
import LinkTable from './components/LinkTable.jsx'
import Sidebar from './components/Sidebar.jsx'

function App() {

  const [ inputValue, setInputValue ] = useState('')
  const [ shortInputValue, setShortInputValue ] = useState('')

  return (
    <div className="bg-slate-50 w-full h-screen">
      <Sidebar />
      {/* <UrlShortener setInputValue={setInputValue} setShortInputValue={setShortInputValue}/>
      <Result /> */}
      {/* <LinkTable /> */}
    </div>
  )
}

export default App
