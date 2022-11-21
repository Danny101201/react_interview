import { ReactElement, useEffect, useState } from 'react'

import { NextPageWithLayout } from './_app'
import PageLayout from 'components/Layout'
import { getNewCategoryToStorage, getNewsArticle } from 'api/news';
import { PATH } from 'constants/path'
import { useRouter } from 'next/router';

const Home: NextPageWithLayout = () => {
  const router = useRouter()
  useEffect(() => {
    let newsCategory = getNewCategoryToStorage()
    if (newsCategory) {
      router.push(PATH.newsPage.replace('[newid]', newsCategory))
    } else {
      router.push(PATH.newsPage.replace('[newid]', 'Yahoo Entertainment'))

    }
  }, [])
  return (
    <div>
      Home Page
    </div>
  )
}
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      {page}
    </PageLayout>
  )
}
export default Home

