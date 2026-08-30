import React, { useState } from 'react'
import { formatmoney } from '../../utils/money'
import axios from 'axios'
import Product from './Product'

function ProductsGrid({products,loardCart}) {
  
  return (
    <>
    <div className="products-grid">
            {products.map((product)=>{
              return(
               <Product product={product} loardCart={loardCart} />
              )
            })}
          </div>
    </>
  )
}

export default ProductsGrid