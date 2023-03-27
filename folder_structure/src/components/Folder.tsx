import React, { useState } from 'react'

const List: Lists[] = [
  {
    label: 'A',
    children: [
      { label: 'A-1' },
      { label: 'A-2' },
      {
        label: 'A-3',
        children: [
          { label: 'A-3-1' },
          { label: 'A-3-2' },
          { label: 'A-3-3' },
        ]
      },
    ]
  },
  { label: 'B' },
  {
    label: 'C',
    children: [
      { label: 'C-1' },
      { label: 'C-2' }
    ]
  },
]
function FolderComponent() {
  console.log('111')
  return (
    <FolderList lists={List} />
  )
}

export default FolderComponent


interface Lists {
  label: string,
  children?: Lists[]
}
function FolderList({ lists, depths = 0 }: { lists: Lists[], depths?: number }) {
  return (
    <div style={{ paddingLeft: `${depths * 100}px`, fontSize: '1.5rem', cursor: 'pointer' }}>
      {lists.map((item, i) => (
        <Children item={item} depths={depths} key={i} />
      ))}
    </div>
  )
}

function Children({ item, depths }: { item: Lists, depths: number }) {
  const [open, setopen] = useState(false)
  return (
    <div >
      <div style={{ display: 'flex' }}>
        <p>{item.label}</p>
        {item.children && (<p onClick={() => setopen(!open)}>{open ? '-' : '+'}</p>)}
      </div>
      {(item.children && open) && <FolderList lists={item.children} depths={depths + 1} />}
    </div>
  )
}
