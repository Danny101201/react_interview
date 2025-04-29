import { memo, useState } from 'react'
import './App.css'
import { generateRandomColor } from './utils/generateRandomColor'
import { cn } from './utils/cn'

function App() {
  const color = generateRandomColor()

  const [outerCount, setOuterCount] = useState(0)
  return (
    <div className='w-screen h-screen grid place-content-center '>
      <div
        className='w-[500px] h-[500px] relative rounded-md border-2 border-white flex items-center justify-center'
        style={{
          background: color
        }}
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          setOuterCount(pre => pre + 1)
        }}
      >
        <div className='absolute top-0 w-full flex items-center justify-center'>
          <p className='text-black bg-gray-300  rounded-md  px-2'>Outer {outerCount}</p>
        </div>
        <Inner className='border-amber-500' />
      </div >
    </div>

  )
}

const Inner = memo(({ className }: { className?: string }) => {
  const [innerCount, setInnerCount] = useState(0)
  const color = generateRandomColor()

  return (
    <div
      className={cn(
        'w-[300px] h-[300px] rounded-md border-2 border-white flex items-start justify-center',
        className
      )}
      style={{ background: color }}
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        setInnerCount(pre => pre + 1)
      }}
    >
      <p className='text-black bg-gray-300  rounded-md  px-2'>Inner {innerCount}</p>
    </div>
  )
})
export default App
