import React from 'react'
import { useState } from 'react';
import axios from 'axios';


function Product({product,loardCart}) {
    const [quantity,setQuantity] = useState(1)
    const addtoCart = async()=>{
                await axios.post('/api/cart-items',{
                  productId:product.id,
                  //quantity:quantity
                  quantity
                })
                await loardCart();
              }
              
  return (
     <div
          className="col-12 col-sm-6 col-lg-4"
         
        >

          <div className="card h-100 border-0 shadow-sm">

            {/* Product Image */}
            <div className="text-center p-4 bg-white">

              <img
                src={product.image}
                className="img-fluid"
                alt={product.name}
                style={{
                  height: "200px",
                  width: "100%",
                  objectFit: "contain"
                }}
              />

            </div>


            {/* Product Details */}
            <div className="card-body d-flex flex-column">

              {/* Product Name */}
              <h5 className="card-title">
                {product.name}
              </h5>


              {/* Rating */}
              <div className="d-flex align-items-center mb-2">

                <img
                  src={`/images/ratings/rating-${product.rating.stars * 10}.png`}
                  alt={`${product.rating.stars} stars`}
                  style={{
                    width: "100px"
                  }}
                />

                <span className="text-primary ms-2">
                  {product.rating?.count || 0}
                </span>

              </div>


              {/* Price */}
              <h5 className="fw-bold mb-3">
                ${(product.priceCents / 100).toFixed(2)}
              </h5>


              {/* Quantity */}
              <select className="form-select w-auto mb-3" value={quantity}
              onChange={(e)=>{
                   setQuantity(Number(e.target.value))
                   console.log(Number(e.target.value));
                   
                }}
              >

                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11].map(
                  (num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  )
                )}

              </select>


              {/* Bottom Section */}
              <div className="mt-auto">

                {/* Added Message */}
                <div className="text-success mb-3">
                  ✓ Added to cart
                </div>


                {/* Add to Cart */}
                <button className="btn btn-warning w-100"  onClick={addtoCart} >
                  Add to Cart
                </button>

              </div>

            </div>

          </div>

        </div>
    
  )
}

export default Product