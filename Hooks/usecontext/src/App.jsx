import React from 'react'
import { Usercontext } from './Usercontext'
import { useState } from 'react'
import Userpr from './Userpr'
const App = () => {
  const[user,setuser]=useState ({name:"joel", age:23, sex:"male"})
  return (
    <div>
      <Usercontext.Provider value = {user} > 
<Userpr/>
        </Usercontext.Provider>
    </div>
  )
}

export default App
