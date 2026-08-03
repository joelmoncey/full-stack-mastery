import React from 'react'
import { useRef } from 'react'
const App = () => {
  const inputRef=useRef(null)
  function click(){
    inputRef.current.focus()
  }
  return (
    <div onClick={click}>
      <input ref ={inputRef} type="text" />
      <button>Submit</button>
    <button onClick={click}>focus</button>
    </div>
  )
}

export default App
