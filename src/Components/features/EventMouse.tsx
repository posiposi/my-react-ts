import { useState } from 'react'
import { handleEnter, handleLeave, handleClick } from './EventMouseHandlers'

const EventMouse = ({
  beforeSrc,
  afterSrc,
  manImage,
  alt,
}: {
  beforeSrc: string
  afterSrc: string
  manImage: string
  alt: string
}) => {
  const [currentSrc, setCurrent] = useState(beforeSrc)

  return (
    <>
      <img
        src={currentSrc}
        alt={alt}
        onMouseEnter={handleEnter(setCurrent, afterSrc)}
        onMouseLeave={handleLeave(setCurrent, beforeSrc)}
        onClick={handleClick(setCurrent, manImage)}
      />
    </>
  )
}

export default EventMouse
