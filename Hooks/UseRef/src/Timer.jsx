import React from 'react'
import { useRef,useState } from 'react'
import "./App.css"
const Timer = () => {
    const [time,settime]=useState(0)
const dubai=useRef(null)
function starttime() {
    if(dubai.current != null)return;
     dubai.current=setInterval(() => {
        settime((prev)=>prev+1)
     }, 100);

}
function stoptime() {
    clearInterval(dubai.current)
    dubai.current=null;
}
function resettime() {
  settime(0)    
}
  return (
    <div className='container'>
    <h1>{time}</h1>
      <button style={{backgroundColor:"green"}}onClick={starttime}>start</button>
      <button style={{backgroundColor:"Red"}} onClick={stoptime}>stop</button>
    <div className='content'>
      <button style={{backgroundColor:"blue"}} onClick={resettime}>Reset</button>
    </div>
</div>
  )
}

export default Timer
