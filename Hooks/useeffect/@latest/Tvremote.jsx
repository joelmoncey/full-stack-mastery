import React from 'react'
import { useState,useEffect } from 'react'

const Tvremote = () => {
const[search,setsearch]=useState("")
const [volume,setvolume]=useState(0)
 useEffect(() => {
  console.log(`searching in database ${search}` )

}, [search])

  return (
    <div>
<h1>Tv Remote</h1>  
<h2>Search Channel</h2>
<input type="text" placeholder='Search here' value={search} onChange={(e)=>setsearch(e.target.value)} />  
<button>Search</button>

<p>Volume
    <strong>
      {volume}  </strong></p>
     <div>
        <button onClick={()=>setvolume(volume+1)}>+</button>
        <button onClick={()=>setvolume(volume-1)}>-</button>
        
        </div> 
    </div>
  )
}

export default Tvremote
