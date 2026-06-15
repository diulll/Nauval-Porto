import { useEffect, useState } from 'react'

export default function useCountUp(target, duration = 2000, shouldStart = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) {
      setCount(0)
      return undefined
    }

    let startTime = null
    let animationFrameId = 0

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime

      const progress = (currentTime - startTime) / duration

      if (progress < 1) {
        setCount(Math.floor(progress * target))
        animationFrameId = window.requestAnimationFrame(animate)
        return
      }

      setCount(target)
    }

    animationFrameId = window.requestAnimationFrame(animate)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [shouldStart, target, duration])

  return count
}
