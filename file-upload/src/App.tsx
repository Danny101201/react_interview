import { ChangeEvent, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const handleUploadFileWithFileReader = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        // setImgSrc(fileReader.result as string)
        const atag = document.createElement('a')
        if (fileReader.result) {
          atag.href = fileReader.result as string
          // download name
          atag.download = 'downloadsss'
          document.body.appendChild(atag)
          atag.click()
          document.body.removeChild(atag)
        }

      }
    }
  }

  const handleUploadFileObjectURL = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const href = URL.createObjectURL(file)
      const downloadLink = document.createElement('a')
      downloadLink.href = href
      downloadLink.download = 'file'
      document.body.appendChild(downloadLink)
      downloadLink.click()
      document.body.removeChild(downloadLink)
      URL.revokeObjectURL(href)
    }
  }
  return (
    <>
      <input type="file" onChange={handleUploadFileWithFileReader} />
      <input type="file" onChange={handleUploadFileObjectURL} />
    </>
  )
}

export default App
