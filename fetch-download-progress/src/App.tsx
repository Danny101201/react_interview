import { useEffect, useRef, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [axiosLoadingProgress, setAxiosLoadingProgress] = useState<number>(0)
  const [fetchLoadingProgress, setFetchLoadingProgress] = useState<number>(0)
  const [src, setSrc] = useState<string>()

  const handleGetAxiosData = () => {
    axios('https://fetch-progress.anthum.com/10kbps/images/sunrise-baseline.jpg', {
      onDownloadProgress: (progressEvent) => {
        if (!progressEvent.total) return
        const progress = Math.floor((progressEvent.loaded / progressEvent.total) * 100)
        setAxiosLoadingProgress(progress)
      }
    })
  }
  const handleGetFetchData = () => {
    setSrc('')
    fetch('https://fetch-progress.anthum.com/10kbps/images/sunrise-baseline.jpg')
      .then(res => {
        const contextLength = res.headers.get('Content-Length');
        let loaded = 0
        return new Response(
          new ReadableStream({
            start(controller) {
              const reader = res.body?.getReader()
              const push = () => {

                reader?.read().then(({ done, value }) => {
                  if (done) {
                    controller.close()
                    return
                  }
                  loaded += value.byteLength
                  setFetchLoadingProgress(Math.round((loaded / Number(contextLength) * 100)))
                  controller.enqueue(value)
                  push()
                })
              }
              push()
            },
          })
        )
      })
      .then(res => res.blob())
      .then(blob => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(blob)
        fileReader.onload = () => {
          if (!fileReader.result) return
          setSrc(fileReader.result.toString())
        }
      })
    // ['cache-control', 'no-cache'](2)['content-length', '108651'](2)['content-type', 'image/jpeg; charset=utf-8']

  }

  return (
    <div>
      <div>
        <button onClick={handleGetAxiosData}>axios download</button>
        <p>axios: {axiosLoadingProgress}%</p>
      </div>
      <div>
        <button onClick={handleGetFetchData}>fetch download</button>
        <p>fetch: {fetchLoadingProgress}%</p>
      </div>
      {src && <img src={src} />}
    </div>
  )
}

export default App
