import React, { useEffect, useState } from 'react'
import Header from '../Component/Header'
import Coursel from './Coursel'
import Footer from '../Component/Footer'
// import { products } from '../products'
import axios from 'axios';

function Homepage({cart}) {
  const [products,setProducts]=useState([])
  console.log("card",cart.productId);
  
  useEffect(()=>{
    axios.get('api/products').then((response)=>{
      setProducts(response.data)
    // console.log(response.data);
  })
  },[])
  return (
    <>
    <Header cart={cart}/>
    <Coursel/>
<div className="container-fluid bg-light py-4">

  <div className="container">

    <div className="row g-4">

      {products.map((product) => (

        <div
          className="col-12 col-sm-6 col-lg-4"
          key={product.id}
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
              <select className="form-select w-auto mb-3">

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
                <button className="btn btn-warning w-100">
                  Add to Cart
                </button>

              </div>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>

</div>

<Footer/>
    </>
  )
}

export default Homepage