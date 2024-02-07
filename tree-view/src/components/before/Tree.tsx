import { useEffect, useState } from 'react'

interface TreeNodesProps {
  node: TreeDataResponseTye
  isExpend: boolean
  highlightedText: string
}
export const TreeNodes = ({ node, isExpend, highlightedText }: TreeNodesProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const hasChildren = node.children?.length > 0
  const hasHighted = highlightedText && node.name.toLowerCase().includes(highlightedText.toLowerCase())
  useEffect(() => {
    setIsOpen(isExpend)
  }, [isExpend])

  return (
    <div className='tree-node '>
      {hasChildren && (
        <button onClick={() => setIsOpen(pre => !pre)}>{isOpen ? '-' : '+'}</button>
      )}
      <span style={{ color: hasHighted ? 'red' : 'black' }}>{node.name}</span>
      {isOpen && hasChildren && (
        <TreeView data={node.children} isExpend={isExpend} highlightedText={highlightedText} />
      )}
    </div>
  )
}

interface TreeViewProps {
  data: TreeDataResponseTye[]
  isExpend: boolean
  highlightedText: string
}
export const TreeView = ({ data, isExpend, highlightedText }: TreeViewProps) => {
  return (
    <div className='tree-view'>
      {data?.map(node => (
        <TreeNodes key={node.id} node={node} isExpend={isExpend} highlightedText={highlightedText} />
      ))}
    </div>
  )
}
