import React from 'react'
import { useState } from 'react'
import "./todolist.css"
import "./dark.css"

const Todolist = () => {
    const [Task,settask]=useState(()=>"")
    const [Tasks,settasks]=useState([])
    const Addtask = () =>{
      if (Task.trim()=== "") {
        return
      }
        settasks([...Tasks,Task])
       
        
    }
   const del = (index) => {
  const ne = Tasks.filter((_, i) => i !== index);
  settasks(ne);
};

  return (
    <div>
      
      <input type="text" placeholder='+ add list' value={Task} onChange={(e)=>{settask(e.target.value)}}/>
      <button onClick={Addtask}>ADD</button>
      <ul>
        {Tasks.map((t,index) => (
      <li key={index}>
        {t}
        <button onClick={del}>DeL</button>

      </li>
       ) )}
      </ul>
    </div>
  )
}

export default Todolist
