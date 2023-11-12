import { useState } from 'react'

const StateBasic = ({ init }: { init: number }) => {
  const [count, setCount] = useState(init)
  const handleClick = () => setCount(count + 1)

  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{count}回、クリックされました。</p>
    </>
  )
}

export default StateBasic
