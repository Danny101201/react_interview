import React from 'react'
import Header from './Header';
import Footer from './Footer';
import SlideBar from './SlideBar';

interface PageLayoutProps {
  children: React.ReactNode
}
const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div>
      <Header />
      <div className='flex'>
        <SlideBar />
        <div className='min-h-100vh flex-1'>{children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default PageLayout