import { Children, useState } from 'react'

import './App.css'
type TEntry = {
  name: string
  children?: TEntry[],
}
const folder = {
  children: [
    {
      name: 'vite.config.ts'
    },
    {
      name: 'src',
      children: [{
        name: 'vite-env.d.ts'
      }]
    },
    {
      name: 'main.tsx',
      children: [{
        name: 'vite-env.d.ts',
        children: [{
          name: 'vite-env.d.ts'
        }]
      }]
    },
    {
      name: 'package.json'
    },
  ]
}

function Entry({ entry, depth }: { entry: TEntry, depth: number }) {
  const [openFolder, setOpenFolder] = useState(false)
  return (
    <>
      {entry.children ? (
        <div
          style={{ paddingLeft: `${depth * 20}px` }}
          className="text-2xl py-2 cursor-pointer"
          onClick={() => setOpenFolder(!openFolder)}
        >
          {openFolder ? '-' : '+'}
          {entry.name}
        </div>
      ) : (
        <div
          className="text-2xl py-2 cursor-pointer"
          style={{ paddingLeft: `${depth * 20}px` }}
        >{entry.name}</div>
      )}
      {
        openFolder && (entry.children?.map((item, index) => (
          <Entry key={index} entry={item} depth={depth + 1} />
        )))
      }
    </>
  )
}
function App() {
  return (
    <div className='wrapper'>
      <div>
        {folder.children.map((item, index) => (
          <Entry key={index} entry={item} depth={0} />
        ))}
      </div>
    </div>
  )
}

export default App
