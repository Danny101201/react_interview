import { useEffect, useRef, useState } from 'react'
import { throttle } from 'lodash';

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}
function App() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [data, setData] = useState<Posts[]>([])
  const [page, setPage] = useState<number>(1)
  const [isLoading, setIsLoading] = useState(true);
  const [hasNextPage, setHasNextPage] = useState(true)
  const fetchData = throttle(

    async () => {
      try {
        const API = 'https://jsonplaceholder.typicode.com/posts?';
        const res = await fetch(API + new URLSearchParams({
          _page: page.toString()
        }))
        const resData = await res.json() as Posts[]
        setHasNextPage(resData.length !== 0)
        setData([...data, ...resData])

      }
      catch (e) {
        console.log(e)
      } finally {
        setIsLoading(false)
      }
    },
    2000,
    //leading fun調用在時間節點前，true: throttle,false: debounce,default:true
    //trailing 指定調用在節點時間結束後,default:true
    { trailing: false }
  )
  useEffect(() => {
    if (isLoading && hasNextPage) {
      fetchData()
    }
  }, [isLoading, hasNextPage])
  const handleScrollUlContainer = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {

    const bottom = (e.currentTarget.scrollHeight - e.currentTarget.scrollTop) <= e.currentTarget.clientHeight;
    if (bottom) {
      setIsLoading(true);
      setPage(pre => pre + 1)
    }
  }

  const handleScrollWindow = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setIsLoading(true);
      setPage(pre => pre + 1)
    }
  };

  //if your scroll base on body

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScrollWindow);
  //   return () => {
  //     window.removeEventListener('scroll', handleScrollWindow);
  //   };
  // }, []);

  return (
    <div >
      <div ref={ref} style={{ overflow: 'scroll', height: '500px' }} onScroll={handleScrollUlContainer}>
        <ul >
          {data.map((item, index) => (
            <li key={index} style={{ padding: '1rem' }}>
              <div style={{ fontSize: '2rem' }}>{item.id}</div>
              <div style={{ fontSize: '2rem' }}>{item.title}</div>
              <div style={{ fontSize: '1.5rem' }} >{item.body}</div>
            </li>
          ))}
        </ul>
        {!hasNextPage && <p onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>no more data</p>}
      </div>
      {(isLoading && hasNextPage) && (<p style={{ fontSize: '2rem', position: 'fixed', zIndex: 9999, top: 0, left: 0, height: '100vh', width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.1)' }}>isLoading...</p>)}
    </div>
  )
}

export default App
