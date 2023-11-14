import { useState } from 'react'
import StateCounter from '../features/StateCounter'
import { HStack } from '@chakra-ui/react'

const StateParent = () => {
  const [count, setCount] = useState(0)
  const update = (step: number) =>
    setCount((currentCount) => currentCount + step)

  return (
    <>
      <p>総カウント: {count}</p>
      <HStack spacing="10" my="2">
        <StateCounter step={1} onUpdate={update}></StateCounter>
        <StateCounter step={5} onUpdate={update}></StateCounter>
        <StateCounter step={-1} onUpdate={update}></StateCounter>
      </HStack>
    </>
  )
}

export default StateParent
