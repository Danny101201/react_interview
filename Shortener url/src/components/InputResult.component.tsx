import React, { useState, useEffect } from 'react'
interface InputResultPros {
  shortUrl: string
  error: string
  isLoading: boolean
}
function InputResult({ shortUrl, error, isLoading }: InputResultPros) {
  const [isCopy, setIsCopy] = useState(false)
  useEffect(() => {
    const ttl = setTimeout(() => {
      setIsCopy(false)
    }, 1000)
    return () => {
      clearTimeout(ttl)
    }
  }, [isCopy])
  if (error)return <div className='text-white'>{error}</div>
  if (isLoading)return <div className='text-white text-3xl'>loading...</div>
  return (
    <>
      {shortUrl !== '' && (

        <div className='flex justify-center'>
          <input type="text" className='flex-1 outline-none px-4' readOnly value={shortUrl} />
          <button className={`text-white ${isCopy ? 'bg-orange-500 hover:bg-orange-600 ' : 'bg-orange-400 hover:bg-orange-500 '} cursor-pointer px-4 py-2`} onClick={() => {
            navigator.clipboard.writeText(shortUrl)
            setIsCopy(true)
          }}>{isCopy ? 'has copy!!' : 'Copy to clipboard'}</button>
        </div>
      )}
    </>
  )
}

export default InputResult