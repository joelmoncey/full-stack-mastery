import React from 'react'
import { Usercontext } from './Usercontext'
import { useContext } from 'react'
const Userpr = () => {
    const user=useContext(Usercontext)
  return (
    <div>
      <h1> name is  <span style={{color:"red"}}>{user.name}</span>
      </h1>                                        
      
      <h2> age is  <span style={{color:"green"}}>{user.age}</span> </h2>
    </div>
  )
}

export default Userpr
