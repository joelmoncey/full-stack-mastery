import React, { useContext } from 'react'
import "./Prodcd.css"
import { Cartcontext } from './Cartcontext'
const Productcard = () => {
  const {addtocart}=useContext(Cartcontext)
  return (
    <div className="product-list">
  <div className="product-card">
    <img
      src="https://via.placeholder.com/220x220"
      alt="Product"
    />

    <h3>Wireless Bluetooth Headphones</h3>

    <div className="rating">
      ⭐⭐⭐⭐⭐ <span>(1,245)</span>
    </div>

    <p className="price">$49.99</p>

    <button className="add-to-cart" onClick={addtocart}>Add to Cart</button>
  </div>

  <div className="product-card">
    <img
      src="https://via.placeholder.com/220x220"
      alt="Product"
    />

    <h3>Smart Watch</h3>

    <div className="rating">
      ⭐⭐⭐⭐☆ <span>(856)</span>
    </div>

    <p className="price">$89.99</p>

    <button className="add-to-cart" onClick={addtocart}>Add to Cart</button>
  </div>

  <div className="product-card">
    <img
      src="https://via.placeholder.com/220x220"
      alt="Product"
    />

    <h3>Gaming Mouse</h3>

    <div className="rating">
      ⭐⭐⭐⭐⭐ <span>(2,143)</span>
    </div>

    <p className="price">$29.99</p>

    <button className="add-to-cart" onClick={addtocart}>Add to Cart</button>
  </div>

  <div className="product-card">
    <img
      src="https://via.placeholder.com/220x220"
      alt="Product"
    />

    <h3>Wireless Keyboard</h3>

    <div className="rating">
      ⭐⭐⭐⭐☆ <span>(980)</span>
    </div>

    <p className="price">$39.99</p>

    <button className="add-to-cart" onClick={addtocart}>Add to Cart</button>
  </div>
</div>
  )
}

export default Productcard
