import React from 'react'
import debounce from 'lodash.debounce'

/**
 * Returns amount of page scrolled as a percentage
 */
export function useScroll() {
  const calcPctComplete = () => {
    if (typeof window === 'undefined') return 0
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    return (winScroll / height) * 100
  }

  const [pctComplete, setPctComplete] = React.useState(calcPctComplete())

  React.useEffect(() => {
    const listener = debounce(
      () => setPctComplete(calcPctComplete()),
      100
    )
    window.addEventListener('scroll', listener)
    return () => window.removeEventListener('scroll', listener)
  }, [setPctComplete, calcPctComplete])

  return pctComplete
}
