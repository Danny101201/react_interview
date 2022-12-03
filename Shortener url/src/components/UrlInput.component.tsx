import React, { useRef } from 'react'

interface UrlInputProps {
  shortenUrl: (url: string) => void
}
function UrlInput({ shortenUrl }: UrlInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const handlerShortenUrl = () => {
    const textValue = inputRef.current?.value
    if (textValue !== undefined) {
      shortenUrl(textValue)
    }
  }
  return (
    <div className=''>
      <p className='text-center text-5xl text-white'>URL <span className='text-orange-400'>Shortener</span></p>
      <div className='flex mt-[2rem] rounded-md overflow-hidden'>
        <input type="text" className='flex-1 outline-none px-4' placeholder='Paste a link to shorten it' ref={inputRef} />
        <button className='text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 text-2xl' onClick={handlerShortenUrl}>shorten</button>
      </div>
    </div>
  )
}

export default UrlInput