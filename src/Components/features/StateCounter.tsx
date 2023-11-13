import { StateCounterProps } from '../../Types/stateCounter'

const StateCounter = ({ step, onUpdate }: StateCounterProps) => {
  const handleClick = () => onUpdate(step)
  return (
    <button className="cnt" onClick={handleClick}>
      <span>{step}</span>
    </button>
  )
}

export default StateCounter
