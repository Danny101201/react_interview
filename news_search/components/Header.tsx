import React from 'react'
import { BsSearch } from 'react-icons/bs';

const Header = () => {
  return (
    <div className=' px-4 py-2 bg-white border-b-2 border-gray-300 flex items-center gap-4'>
      <div className='w-[8rem] relative overflow-hidden'>
        <img src="https://1000logos.net/wp-content/uploads/2017/12/Bing-logo.png" alt="" className='block w-full' />
      </div>
      <div className='flex items-center justify-between border-2 border-gray-300 rounded-full px-4 py-1'>
        <input type="text" className='outline-none border-none' />
        <BsSearch className='text-blue-500' />
      </div>
    </div>
  )
}

export default Header