import React from 'react'
import { useState } from 'react'
import "./Counter.css"
const Counter = () => {
const [count,setcount]=useState(()=>0)
const add = () =>{
  setcount( value => value+1)
  setcount( value => value+1)
  

}
const minus =() =>{
  setcount(count-1)
}
 return (
    <div>
      <button onClick={add}>+</button>{count}<button onClick={minus}>-</button>
    </div>
  )
}

export default Counter
