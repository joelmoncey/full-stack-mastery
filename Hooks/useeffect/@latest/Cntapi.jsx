import React from 'react'
import { useState,useEffect } from 'react'
const Cntapi = () => {
    const [users,setusers]=useState([])
    useEffect(() => {
    const getdata= async ()=> {
   const response=await fetch("https://jsonplaceholder.typicode.com/users")
   const data=await response.json()
   setusers(data)
    }
    getdata()   
    }, [])
    
  return (
    <div>
      <h1>API Connection</h1>
      <ol>
        {users.map((user)=>
            <li key={user.id}>{user.email}</li>

        )}
        </ol>
    </div>
  )
}

export default Cntapi
