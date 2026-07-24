import React from 'react'
import { useState } from 'react'

const Refresh = () => {
    const[data,setdata]=useState([])
    const[count,setcount]=useState(()=>0)
    const add =()=>{
        setdata([...data,count])
        setcount(count+1)
        console.log(data);
        
    }

    const minus =()=>{
        setdata([...data,count])
        setcount(count-1)
        console.log(data);
 }
 const undo =()=>{
 if (data.length>0) {
    const previs = data.length-1
    setcount(data[previs])
    setdata(data.slice(0,-1))
 } 
}
  return (
    <div>
      <button onClick={add}>+</button>{count}<button onClick={minus}>-</button>
      <div><button onClick={undo}>Undo</button></div>
    </div>
  )
}

export default Refresh
