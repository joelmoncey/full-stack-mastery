import React from 'react'
import { useState,useEffect } from 'react'
const Api = () => {
    const [data,setdata]=useState("Loading .....")
const [count,setcount]=useState(0)
useEffect(()=>{
    console.log("Data unboxing")
    setTimeout(() => {
        setdata("Loaded Successfully")
    }, 5000);
},[])
    return (
    <div>
      <h1>Api call</h1>
      <h2>status: <em>{data}</em></h2>
      <button onClick={()=>setcount(count+1)}>Force rerender {count}</button>
    </div>
  )
}

export default Api
