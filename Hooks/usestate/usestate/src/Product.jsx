import React from 'react'
import "./Product.css"
import {useState} from 'react'
import House from "./assets/house.png" 

const Product = () => {
  const [count,setcount]=useState(0)
  function add() {
    setcount(count+1)
    
  }
  function minus() {
    setcount(count-1)
    
  }
    return (
    <div >
<div className="House">
    <div className="container">

      <img src={House} alt="" />
<h1>Rooms for rent,
3bhk available
</h1>
    </div>
    <h2>2 night ac bedroom</h2>
    <h2>adult <button onClick={add}>+</button>{count}<button onClick={minus}>-</button></h2>
</div>
    </div>
  )
}

export default Product
