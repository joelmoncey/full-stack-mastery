import React from 'react'
import { FaShoppingCart } from "react-icons/fa";

import { Cartcontext } from './Cartcontext';
import { useContext } from 'react';
export default function Navbar  ()  {
const {cart} = useContext(Cartcontext)
  return (
    <div>
    <nav> <h1>Efactory</h1> <span> <FaShoppingCart /> {cart}</span></nav>  
   
    </div>
  )
}

