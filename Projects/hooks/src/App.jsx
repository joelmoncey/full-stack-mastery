import React from 'react'
import { useState } from 'react'
import './App.css'
const App = () => {
  const[count,setcount]=useState(500000)
  function Incre() {
    setcount(count+1)
  }
  function decre() {
    setcount(count-1)
  }
  return (
    <>
    <div>
      {count}
    </div>
    <button onClick={Incre}>+</button>
    <button onClick={decre}>-</button>
    </>
    
  )
}

export default App
