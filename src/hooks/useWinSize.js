import { useState, useEffect } from 'react'


export const useWinSize = () => {
  const getWindowSize = () => {
    return { winX: window.innerWidth, winY: window.innerHeight }
  }

  const [winSize, setWinSize] = useState(getWindowSize());

  useEffect(() => {
    const handleResize = () => setWinSize(getWindowSize())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return winSize
}