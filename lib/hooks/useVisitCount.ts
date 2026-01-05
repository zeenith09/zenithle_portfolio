'use client'
import { useEffect, useState } from 'react'

export default function useVisitCount(debounceMs = 300) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch('/api/counter')
        .then(res => res.json())
        .then(data => setCount(data.count))
        .catch(console.error)
    }, debounceMs)

    return () => clearTimeout(timer) // cleanup if unmounted
  }, [debounceMs])

  return count
}
