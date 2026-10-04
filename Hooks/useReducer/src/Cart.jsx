import { useReducer } from "react"
import React from 'react'

import "./Cart.css"
const init={item:0,price:0}
function cartreducer(state,action){
        switch(action.type){
                case "Add-item":

                return{
                        item:state.item+1,
                        price:state.price+action.payload
                }
        }

}
const Cart = () => {
const[state,dispatch]=useReducer(cartreducer,init);

function buy(){
dispatch({type:"Add-item",payload:350})
}
        return (
                <div className='container'>
                        <nav><ul>
                                <li>Home</li>
                                <li>Products</li>
                                <li>Contact</li>
                                <li>911</li>

                        </ul></nav>

                        <div className='content'>
<div className='grid'>

                                <div className='content1'>
                                        <img src="" alt="image" />
                                        <h3>I phone</h3>
                                        <button>+</button>
                                        <button onClick={buy}>Buy Now</button>
                                        <button>-</button>
                                </div>
                                <div className='content1'>
                                        <img src="" alt="image" />
                                        <h3>I watch</h3>
                                        <button>+</button>
                                        <button>Buy Now</button>
                                        <button>-</button>
                                </div>
                                <div className='content1'>
                                        <img src="" alt="image" />
                                        <h3>I watch</h3>
                                        <button>+</button>
                                        <button>Buy Now</button>
                                        <button>-</button>
                                </div>
                                <div className='content1'>
                                        <img src="" alt="image" />
                                        <h3>I watch</h3>
                                        <button>+</button>
                                        <button>Buy Now</button>
                                        <button>-</button>
                                        <p>jjbj</p>
                                </div>
</div>
                                <div className='side'>
                                        <h1>Cart</h1>
                                        <p><h5>Adress</h5>ffhgjgjgjjggkhkjkkjgjjhvhj</p>
                               <h4>item:{state.item}</h4>
                               <h5>price:{state.price}</h5>
                                </div>
                        </div>
                </div>
        )
}

export default Cart
