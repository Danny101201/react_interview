import { useState, useEffect } from "react"
import { fetchData } from "../../data"
import { TreeView } from "./Tree"
import { useTreeState } from "../../context/TreeNodeContext"

export const After = () => {
  const { state, dispatch } = useTreeState()
  const [value, setValue] = useState<string>('')

  useEffect(() => {
    fetchData().then((result) => {
      dispatch({ type: 'INIT_DATA', data: result })
    })
  }, [dispatch])

  const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value
    setValue(text)
    dispatch({ type: 'SEARCH', searchText: text })
  }
  const handleExpend = (isExpanded: boolean) => {
    dispatch({ type: isExpanded ? 'EXPAND_ALL' : 'COLLAPSE_ALL', isExpanded })
  }
  return (
    <div>
      <input type="text" placeholder=" search..." value={value} onChange={handleSearchText} />
      <button onClick={() => handleExpend(true)}>expend all</button>
      <button onClick={() => handleExpend(false)}>collapse all</button>
      {state.length && (
        <TreeView data={state} />
      )}
    </div>
  )
}

