import React, { useState } from 'react'
import { formatMoney } from '../../utils/money'
import axios from 'axios'
import Product from './Product'

function ProductGrid({ products, loadCart }) {
  const [quantity,setQuantity] = useState(1)
  return (
    <div className="products-grid">
      {
        products.map((product) => {
          return (

            <Product key={product.id} product={product} loadCart={loadCart}/>
          )
        })
      }

    </div>
  )
}

export default ProductGrid