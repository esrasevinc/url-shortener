import React, { useState } from 'react'

import UrlShortener from '../components/UrlShortener'
import Result from '../components/Result'

const UrlShortenerPage = () => {

  const [ inputValue, setInputValue ] = useState('')
  const [ shortInputValue, setShortInputValue ] = useState('')

  return (
    <div>
      <UrlShortener inputValue={inputValue} shortInputValue={shortInputValue} />
      <Result />
    </div>
  )
}

export default UrlShortenerPage
