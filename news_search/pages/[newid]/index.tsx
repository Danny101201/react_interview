import React, { ReactElement, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import PageLayout from 'components/Layout'
import { getNewCategoryToStorage, getNewsArticle, setNewCategoryToStorage } from 'api/news'
import Link from 'next/link';
import { TiNews } from 'react-icons/ti';

const NewCategory = () => {
  const [news, setNews] = useState<Article[]>([])
  const router = useRouter()
  const { newid } = router.query
  useEffect(() => {
    let newsCategory = getNewCategoryToStorage();
    (async () => {
      const data = await getNewsArticle()
      let news = data.articles.filter((item, index) => item.source.name === newid)
      setNews(news)
    })()
    setNewCategoryToStorage(newid as string)
  }, [newid])
  return (
    <div className='p-4 pb-10'>
      <div>
        {newid}
      </div>
      <div className='flex flex-wrap items-start lg:justify-start justify-center gap-4 mt-4'>
        {news.map((item, index) => {
          let date = new Date(item.publishedAt)
          let now = new Date()
          let difference = now.getTime() - date.getTime()
          let differenceTime = new Date(difference).getMinutes()
          return (
            <Link href={item.url} target='_blank' key={index}>
              <div className='border border-gray-300 bg-blue-500 w-[300px] h-[300px] rounded-md shadow-sm flex flex-col justify-between'>
                <div className=' h-[150px] relative overflow-hidden'>
                  <img src={item.urlToImage} alt="" className='absolute inset-0 object-cover' />
                </div>
                <div className='p-4'>
                  <p>{item.title}</p>
                </div>
                <div className='p-2 flex items-center justify-between'>
                  <div className='flex items-center justify-between gap-2'>
                    <TiNews />
                    <p> {item.source.name} </p>
                  </div>
                  <div>{differenceTime} 分鐘</div>
                </div>
              </div>
            </Link>
          )
        })
        }
      </div>
    </div>
  )
}
NewCategory.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      {page}
    </PageLayout>
  )
}
export default NewCategory