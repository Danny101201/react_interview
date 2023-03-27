import React from 'react'
type NodeType = {
  value: string | number,
  left?: NodeType,
  right?: NodeType,
}
const NodeList: NodeType = {
  value: '1',
  left: {
    value: '2',
    left: {
      value: '5',
      left: {
        value: '11'
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

const Node = ({ node, depths }: { node: NodeType, depths: number }) => {
  return (
    <div
      style={{
        background: 'blue',
        fontSize: '20px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        display: 'flex',
        top: '120px',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute'
      }}
    >
      {node.value}
      {node.left && (
        <div style={{ position: 'absolute', left: `${150 - depths * 30}px` }}>
          <Node node={node.left} depths={depths + 1} />
        </div>
      )}
      {node.right && (
        <div style={{ position: 'absolute', left: `-${150 - depths * 30}px` }}>
          <Node node={node.right} depths={depths + 1} />
        </div>
      )}
    </div>
  )
}
function Binary() {
  return (
    <div>
      <Node node={NodeList} depths={0} />
    </div>
  )
}

export default Binary