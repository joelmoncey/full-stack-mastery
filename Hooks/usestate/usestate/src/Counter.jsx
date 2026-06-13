import React from 'react'
import { useState } from 'react'
import "./Counter.css"
const Counter = () => {
    const [count,setcount]=useState(500)
      const incre = () =>{
        setcount(count+1)
      }
      const decre = () =>{
        setcount(count-1)
      }
  return (
    <>
     
    <div>
     <h1>{count}</h1>
    </div>
      <button onClick={incre}>+</button>
    <button onClick={decre}>-</button>
     </> 
  )
}

export default Counter
