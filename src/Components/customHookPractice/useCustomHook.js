import { useState } from 'react'

export default function useCustomHook(initialValue = 0) {
     const [count, setCount] = useState(initialValue)

    const Increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    const Decrement = () => {
        count > 0 && setCount( prevCount => prevCount - 1)
    }
    
  return [count, Increment, Decrement]
}
