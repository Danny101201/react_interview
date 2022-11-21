import React, { SetStateAction, useState } from 'react'
import './App.css';
function App() {
  const [points, setPoints] = useState<{ x: number, y: number }[]>([])
  const [popped, setPopped] = useState<{ x: number, y: number }[]>([])
  const handlePlaceCircle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, clientY } = e
    setPoints(preState => ([...preState, { x: clientX, y: clientY }]))
  }
  const handleUndo = () => {
    const newCircles = [...points]
    const poppedPointed = newCircles.pop()
    poppedPointed && setPopped([...popped, poppedPointed])
    setPoints(newCircles)
  }
  const handleRedo = () => {
    const newPopped = [...popped]
    const lastpoped = newPopped.pop()
    lastpoped && setPoints([...points, lastpoped])
    setPopped(newPopped)
  }
  return (
    <>
      <div className='btnWrapper'>
        <button className='btn' disabled={points.length === 0} onClick={handleUndo}>Undo</button>
        <button className='btn' disabled={popped.length === 0} onClick={handleRedo}>redo</button>
      </div>
      <div className='container' onClick={handlePlaceCircle}>
        {points.map((point, index) => (
          <div
            key={index}
            className='circle'
            style={{
              top: point.y - 5 + 'px',
              left: point.x - 5 + 'px',
            }}
          ></div>
        ))}
      </div>
    </>
  )
}

export default App