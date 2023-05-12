import { useState } from 'react'

import './App.css'
import { initialTravelPlan } from './place'

function App() {
  const [plan, setPlane] = useState(initialTravelPlan)
  const root = plan[0]
  const planetIds = root.childIds as (keyof typeof initialTravelPlan)[]
  function handleComplete(parentId: keyof typeof initialTravelPlan, childId: keyof typeof initialTravelPlan) {

    const parent = plan[parentId]
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter(id => id !== childId)
    }
    console.log({ childId, parentId, nextParent })
    setPlane(preState => ({
      ...preState,
      [parentId]: nextParent
    }))
  }
  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map(id => (
          <PlaceTree
            parentId={0}
            key={id}
            id={id}
            placesById={plan}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </>
  )
}

export default App


interface PlaceTreeProps {
  placesById: typeof initialTravelPlan,
  id: keyof typeof initialTravelPlan,
  parentId: keyof typeof initialTravelPlan | number,
  onComplete: (parentId: any, childId: any) => void
}
function PlaceTree({ placesById, id, parentId, onComplete }: PlaceTreeProps) {
  const place = placesById[id];
  const childIds = place.childIds as (keyof typeof initialTravelPlan)[]
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1>{place.title}</h1>
        <button onClick={() => onComplete(parentId, id)}>Complete</button>
      </div>
      {childIds.length > 0 && (
        <ol>
          {childIds.map(id => (
            <PlaceTree
              parentId={place.id}
              key={id}
              placesById={placesById}
              id={id}
              onComplete={onComplete}
            />
          ))}
        </ol>
      )}
    </>
  )
}