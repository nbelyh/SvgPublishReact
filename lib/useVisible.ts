import React from 'react'

export default function useVisible(ref: React.RefObject<HTMLElement>) {

  const [isIntersecting, setIntersecting] = React.useState(false)

  const observer = React.useMemo(() => new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  ), [ref])


  React.useEffect(() => {
    observer.observe(ref.current!)
    return () => observer.disconnect()
  }, [])

  return isIntersecting
}