import React from 'react'
import { useMemo,useState } from 'react'
import "./App.css"
const Dark = () => {
  const [dark,setdark]=useState(false)
  function toggle(){
setdark((prev=>!prev))
  }
  function abin() {
   let hbb=8;
    for(let i=0;i<=100;i++){
     hbb*=8;
    
    }
    return hbb;
  }
    const name=useMemo(()=>{return abin()})

  return (
  <div style={{backgroundColor: dark ? "black":"azure",height:"100vh"}}>

    <button onClick={toggle}>{dark ? "light":"dark"}</button>
    <p>{name}</p>
</div>   
  )

}

export default Dark
