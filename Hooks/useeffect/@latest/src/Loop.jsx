import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const loop = () => {
    const [count,setcount]=useState(0)
    useEffect(()=>{
        console.log("hi");
        setcount(count+1)
    },[]);
  return (
    <div>
      <button>+</button>{count}<button>-</button>
    </div>
  )
}

export default loop
