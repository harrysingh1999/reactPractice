import React from 'react'

export default function Child({handleAdd}) {
    console.log('child component rendered')
  return (
    <div>
        <p>Child Component</p>
        <button
        //  onClick={handleAdd}
        className='bg-orange-600 p-2 rounded-xl mt-2'> Click to Add </button>
    </div>
  )
}
