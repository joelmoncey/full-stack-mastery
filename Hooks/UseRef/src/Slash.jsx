import React from 'react'
import { useRef } from 'react'
const Slash = () => {
    const joel=useRef(null)
    function abhi(e){
if (e.key==="/") {
    e.preventDefault()
    joel.current.focus()
}
    }
    window.addEventListener("keydown",abhi);
  return (
    <div>
      <input type="text" ref={joel} />
    </div>
  )
}

export default Slash
