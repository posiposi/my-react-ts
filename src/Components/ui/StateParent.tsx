import { useState } from 'react'
import StateCounter from '../features/StateCounter'

const StateParent = () => {
  const [count, setCount] = useState(0)
  const update = (step: number) =>
    setCount((currentCount) => currentCount + step)

  return (
    <>
      <p>総カウント: {count}</p>
      <StateCounter step={1} onUpdate={update}></StateCounter>
      <StateCounter step={5} onUpdate={update}></StateCounter>
      <StateCounter step={-1} onUpdate={update}></StateCounter>
    </>
  )
}

export default StateParent
