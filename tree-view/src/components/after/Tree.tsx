import { useTreeState } from '../../context/TreeNodeContext'

interface TreeNodesProps {
  node: TreeDataContextTye
}
export const TreeNodes = ({ node }: TreeNodesProps) => {
  const { dispatch } = useTreeState()
  const hasChildren = node.children?.length > 0
  const hasHighted = node.isHighlight
  const handleToggle = (id: string, value: boolean) => {
    dispatch({ type: 'TOGGLE_NODE', id, value })
  }
  return (
    <div className='tree-node '>
      {hasChildren && (
        <button onClick={() => handleToggle(node.id, !node.isExpanded ?? true)}>{node.isExpanded ? '-' : '+'}</button>
      )}
      <span style={{ color: hasHighted ? 'red' : 'black' }}>{node.name}</span>
      {node.isExpanded && hasChildren && (
        <TreeView data={node.children} />
      )}
    </div>
  )
}

interface TreeViewProps {
  data: TreeDataResponseTye[]
}
export const TreeView = ({ data }: TreeViewProps) => {
  return (
    <div className='tree-view'>
      {data?.map(node => (
        <TreeNodes key={node.id} node={node} />
      ))}
    </div>
  )
}
