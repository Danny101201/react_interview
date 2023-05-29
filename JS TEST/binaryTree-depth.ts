type NodeType = {
  value: string | number,
  left?: NodeType,
  right?: NodeType,
}
const list: NodeType = {
  value: '1',
  left: {
    value: '2',
    left: {
      value: '5',
      left: {
        value: '11',
        left: {
          value: '111'
        }
      }
    }
  },
  right: {
    value: "3",
    left: {
      value: '7',
    },
    right: {
      value: '8',
      left: {
        value: '6',
        left: {
          value: '12',
        },
        right: {
          value: '13'
        }
      },
      right: {
        value: '9',
      }
    },
  }
}

const getNodeMaxDepth = (root: NodeType) => {
  let maxDepth = 0;
  const dfs = (node: NodeType, deps: number) => {
    if (!node.value) return
    if (deps > maxDepth) {
      maxDepth = deps
    }
    if (node.right) {
      dfs(node.right, deps + 1)
    }
    if (node.left) {
      dfs(node.left, deps + 1)
    }
  }
  dfs(root, root.value ? 1 : 0)
  console.log(maxDepth)
}


getNodeMaxDepth(list)