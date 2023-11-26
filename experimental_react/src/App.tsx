import React, { useState, useDeferredValue } from 'react'
import Demo from './components/Demo2'
import { SlowList } from './components/SlowList'

function App() {
  const [search, setSearch] = useState<string>('')
  const deferSearch = useDeferredValue(search)
  return (
    <>
      <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
      <SlowList search={deferSearch} />
      {/* <Demo /> */}
    </>
  )
}

export default App