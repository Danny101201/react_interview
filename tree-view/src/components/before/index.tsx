import { useState, useEffect } from "react"
import { fetchData } from "../../data"
import { TreeView } from "./Tree"

export const Before = () => {
  const [data, setData] = useState<TreeDataResponseTye[]>([])
  const [isExpend, setIsExpend] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')

  useEffect(() => {
    fetchData().then((result) => {
      setData(result)
    })
  }, [])

  return (
    <div>
      <input type="text" placeholder=" search..." value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={() => setIsExpend(true)}>expend all</button>
      <button onClick={() => setIsExpend(false)}>collapse all</button>
      {data.length && (
        <TreeView data={data} isExpend={isExpend} highlightedText={value} />
      )}
    </div>
  )
}

