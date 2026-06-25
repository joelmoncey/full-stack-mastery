import React, { useState } from 'react'
import { MdOutlineWbSunny } from "react-icons/md";
import "./Counter.css"
const Counter = () => {
  const[count,setcount] = useState(0)
  return (
    <div>
      <div className="nav">
        

      <h1>Simple Counter</h1>
      <button><MdOutlineWbSunny  style={{fontSize:"40px",color:"orange"}}/></button>
      </div>
      {count}
      
    </div>
  )
}

export default Counter
