export const handleEnter =
  (setCurrent: (src: string) => void, afterSrc: string) => () => {
    setCurrent(afterSrc)
  }

export const handleLeave =
  (setCurrent: (src: string) => void, beforeSrc: string) => () => {
    setCurrent(beforeSrc)
  }

export const handleClick =
  (setCurrent: (src: string) => void, manImage: string) => () => {
    setCurrent(manImage)
  }
