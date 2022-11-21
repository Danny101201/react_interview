import { getNewsArticle } from 'api/news'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { TiNews } from 'react-icons/ti';
import Link from 'next/link';
import { PATH } from 'constants/path';
import { getNewCategoryToStorage } from 'api/news'
interface SlideBarProps {
  currentPage?: string;
}
const SlideBar = ({ }: SlideBarProps) => {
  const [routes, setRoutes] = useState<SideBarRouter>([])
  const router = useRouter();
  const { newid } = router.query
  useEffect(() => {
    (async () => {
      const data = await getNewsArticle()
      let routes = data.articles.map((item, index) => item.source.name).filter(item=>item=='udn 聯合新聞網')
      console.log(routes)
      setRoutes([...new Set(routes)])
    })()
  }, [])
  return (
    <div className='border-r-2 border-gray-300 py-4 px-6 flex flex-col gap-5 min-h-screen'>
      {routes.map((route, index) => (
        <Link key={index} href={PATH.newsPage.replace('[newid]', route)} >
          <div className={`flex items-center gap-4 ${newid === route && 'bg-red-500 text-white rounded-full'} px-4 py-2`}>
            <TiNews />
            <p>{route}</p>
          </div>
        </Link>
      ))
      }
    </div >
  )
}

export default SlideBar