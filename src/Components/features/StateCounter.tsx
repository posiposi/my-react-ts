import { StateCounterProps } from '../../Types/stateCounter'
import { Button } from '@chakra-ui/react'

const StateCounter = ({ step, onUpdate }: StateCounterProps) => {
  const handleClick = () => onUpdate(step)
  return (
    <Button onClick={handleClick}>
      <span>{step}</span>
    </Button>
  )
}

export default StateCounter
