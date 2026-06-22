import React from 'react'
import { useState } from 'react'
import "./txtAnl.css"
const TxtAnl = () => {
    const [text,settext]=useState("")
    const length=text.length
    const wordcount=text.trim()===""? 0:text.trim().split(/\s+/).length
  return (
    <div className='container'>
        <input type="text" placeholder='Type here' value={text} onChange={(e)=> settext(e.target.value)}/>
      <h1>textlength={length}</h1>
      <h2>wordcount is {wordcount}</h2>
    </div>
  )
}

export default TxtAnl
