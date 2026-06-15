import { useEffect, useState } from 'react'

export default function useInView(ref) {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [ref])

  return isInView
}
