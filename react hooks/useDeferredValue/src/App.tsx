import { useState } from 'react'
import './App.css'
import { SearchResult } from './components/SearchResult'

function App() {
  const [search, setSearch] = useState<string>('')

  return (
    <>｀
      <input type="text" value={search} onChange={e => {
        setSearch(e.target.value)
      }} />
      <SearchResult search={search} />
    </>
  )
}

export default App
