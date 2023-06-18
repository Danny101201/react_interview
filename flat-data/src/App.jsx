import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { initialTravelPlan } from '../place'

function App() {
  const [plan, setPlan] = useState(initialTravelPlan)
  const root = plan[0]
  const planIds = root.childIds
  const completeClick = (parentId, childId) => {
    const parentTarget = plan[parentId]
    const nextParams = {
      ...parentTarget,
      childIds: parentTarget.childIds.filter(id => id !== childId)
    }
    setPlan({
      ...plan,
      [parentId]: nextParams
    })
  }
  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planIds.map(id => (
          <PlaceTree
            key={id}
            completeClick={completeClick}
            plan={plan}
            childId={id}
            parentId={root.id}
          />
        ))}
      </ol>
    </>
  )
}

export default App
const PlaceTree = ({ plan, childId, parentId, completeClick }) => {
  const target = plan[childId]
  const childIds = target.childIds
  return (
    <p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <h1>{target.title}</h1>
        <button onClick={() => completeClick(parentId, childId)}>complete</button>
      </div>
      {childIds.length > 0 &&
        <ol>
          {childIds.map(i => (
            <PlaceTree
              key={i}
              completeClick={completeClick}
              plan={plan}
              childId={i}
              parentId={target.id}
            />
          ))}
        </ol>
      }
    </p>
  )
}