import { useState } from 'react'
import './App.css'
import UrlInput from './components/UrlInput.component';
import BackGround_Animated from './components/BackGround_Animated.component';
import InputResult from './components/InputResult.component';
import axios, { AxiosError } from 'axios'
import { toggleFullScreens } from './utils/fullScreen';

function App() {
  const [shortUrl, setShortUrl] = useState<string>('')
  const [isLoading, setLoading] = useState<boolean>(false)
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const fetchData = async (url: string) => {
    try {
      setLoading(true);
      setError('');
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${url}`)

      setShortUrl(res.data.result.full_short_link);
    } catch (err) {
      if (err instanceof AxiosError<{ error: string }>) {
        setError(err.response?.data.error)
      }
    } finally {
      setLoading(false);
    }
  }
  const shortenUrl = (url: string) => {
    fetchData(url)
  }
  return (
    <>
      <div className='h-screen  flex gap-5 flex-col items-center justify-center '>
        <UrlInput shortenUrl={shortenUrl} />
        <BackGround_Animated />
        <InputResult shortUrl={shortUrl} isLoading={isLoading} error={error} />
        <button onClick={() => toggleFullScreens(isFullScreen, setIsFullScreen)} >{isFullScreen?'close':'open'} fullScreen</button>
      </div>
    </>
  )
}

export default App

