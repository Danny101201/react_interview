import { PropsWithChildren, createContext, useContext, useReducer } from "react";

type TreeInitDataAction = {
  type: 'INIT_DATA',
  data: TreeDataResponseTye[]
}
type TreeToggleNodeAction = {
  type: 'TOGGLE_NODE',
  id: string,
  value: boolean
}
type TreeToggleAllAction = {
  type: 'EXPAND_ALL' | 'COLLAPSE_ALL',
  isExpanded: boolean
}
type TreeSearchAction = {
  type: 'SEARCH',
  searchText: string
}

type TreeActions =
  | TreeInitDataAction
  | TreeToggleNodeAction
  | TreeToggleAllAction
  | TreeSearchAction

type TreeNodeContextType = {
  state: TreeDataContextTye[],
  dispatch: React.Dispatch<TreeActions>
}
const TreeNodeContext = createContext<TreeNodeContextType>({
  state: [],
  dispatch: () => { }
})

const handleToggleNode = (state: TreeDataContextTye[], action: TreeToggleNodeAction): TreeDataContextTye[] => {
  const { id, value } = action
  return state.map((node) => {
    if (node.id === id) {
      return {
        ...node,
        isExpanded: value
      }
    }
    if (node.children) {
      return {
        ...node,
        children: handleToggleNode(node.children, action)
      }
    }
    return node
  })
}

const handleCollapseNode = (state: TreeDataContextTye[], isExpanded: boolean): TreeDataContextTye[] => {
  return state.map(node => {
    if (node.children) {
      return {
        ...node,
        isExpanded: isExpanded,
        children: handleCollapseNode(node.children, isExpanded)
      }
    }
    return {
      ...node,
      isExpanded: isExpanded,
    }
  })
}
const validateHighlight = (text: string, target: string) => {
  return text !== '' ? target.toLowerCase().includes(text.toLowerCase()) : false
}
const handleSearchNode = (state: TreeDataContextTye[], searchText: string): TreeDataContextTye[] => {


  return state.map(node => {
    if (node.children) {
      return {
        ...node,
        isHighlight: validateHighlight(searchText, node.name),
        children: handleSearchNode(node.children, searchText)
      }
    }
    return {
      ...node,
      isHighlight: validateHighlight(searchText, node.name)
    }
  })

}
const treeNodeAction = (state: TreeDataContextTye[], action: TreeActions) => {
  switch (action.type) {
    case 'INIT_DATA':
      return action.data
    case 'TOGGLE_NODE':
      return handleToggleNode(state, action)
    case 'COLLAPSE_ALL':
      return handleCollapseNode(state, false)
    case 'EXPAND_ALL':
      return handleCollapseNode(state, true)
    case 'SEARCH':
      return handleSearchNode(state, action.searchText)
    default:
      return state
  }
}
export const TreeNodeContextProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(treeNodeAction, [])
  return (
    <TreeNodeContext.Provider value={{
      state,
      dispatch
    }}>
      {children}
    </TreeNodeContext.Provider>
  )
}

export const useTreeState = () => useContext(TreeNodeContext)