import React, { useCallback, useState } from 'react'
import CustomHook from '../customHookPractice/CustomHook'
import Child from './Child'

export default function UseCallback() {
    const [counter, setCounter] = useState(0)
    const [count, setCount] = useState(0)
    const handleAdd = 
     useCallback(
      () => {
      //  setCounter(counter + 1)
   }
   , [])

  const addNew = useCallback(() => {
      setCount(count+1)
    }, [count]
  )
  

  return (
    <div className='text-white text-center'>
      <h1 className='text-4xl mb-10'>UseCallbacks Tutorial</h1>
        <p>Parent Component: {counter} </p>
        <Child handleAdd= {handleAdd}/>
        <p>Parent Component: {count} </p>
        <button onClick={addNew}> click </button>

    </div>
  )
}
