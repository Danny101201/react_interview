import { useCallback, useEffect, useRef, useState } from 'react'
import { Input } from './components/ui/input'
import { useQuery } from '@tanstack/react-query'
import { MyTable, Todo } from './components/table'

import { Label } from './components/ui/label'
import { RadioGroup, RadioGroupItem } from './components/ui/radio-group'
import { Card } from './components/ui/card'

function App() {
  const divRef = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState<boolean>(true)
  const [width, setWidth] = useState<number>(0)
  const [page, setPage] = useState<number>(1)


  const { data, isLoading } = useQuery<Todo[]>({
    queryKey: ['aa', page],
    queryFn: () => fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}`).then(res => res.json())
  })

  useEffect(() => {
    const element = divRef.current
    if (!element) return
    const resizeObserver = new ResizeObserver(() => {
      const { height } = element.getBoundingClientRect()
      console.log(height)

    })
    resizeObserver.observe(element)
    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  const refCallBack = useCallback((node: HTMLInputElement | null) => {
    if (node == null) return
    const ob = new ResizeObserver(() => {
      const { width } = node.getBoundingClientRect()
      setWidth(width)

    })

    ob.observe(node)

    return () => {
      ob.disconnect()
    }
  }, [])

  if (isLoading) return 'isLoading'
  return (
    <>

      <input type="checkbox" onChange={() => setShow(pre => !pre)} checked={show} />
      {show && <Input ref={refCallBack} />}
      <p className='bg-gray-400'>width: {width}</p>
      <Card className='bg-red-500'>
        <div style={{
          // transform: `scale(0.7,0.7)`,
          transformOrigin: 'left top'
        }}>
          <MyTable data={data} />
        </div>
      </Card >

      <RadioGroup value={String(page)} onValueChange={(value) => setPage(() => Number(value))}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="1" id="r1" onChange={() => console.log('RadioGroupItem')} />
          <Label htmlFor="r1">1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="2" id="r2" />
          <Label htmlFor="r2">2</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="3" id="r3" />
          <Label htmlFor="r3">3</Label>
        </div>
      </RadioGroup>
    </>
  )
}

export default App
