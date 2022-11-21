import React from 'react'
// 隱私權和 Cookie法律聲明廣告關於我們的廣告說明意見反應
type NYArteaCode = 980 | 680 | 111
type NYPhoneNumber<T> = T extends `${infer p1 extends NYArteaCode}-${infer p2 extends number}-${infer p3 extends number}` ? true : false
type x = NYPhoneNumber<'981-116-111'>
const footerPages = [
  '隱私權和 Cookie',
  '法律聲明',
  '廣告',
  '關於我們的廣告',
  '說明',
  '意見反應'
]
const Footer = () => {
  return (
    <div className='flex items-center justify-start gap-4  border-y-2 border-gray-300 py-2 px-4 fixed bottom-0 w-full bg-white'>
      {footerPages.map((page, index) => (
        <div key={index} className="cursor-pointer text-gray-500 hover:text-gray-400">{page}</div>
      ))}
    </div>
  )
}

export default Footer