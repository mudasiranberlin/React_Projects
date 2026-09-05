import React, { useEffect, useState } from 'react'
import './index.css'
import Header from '../../Component/Header'
// import { products } from '../../products'
import axios from 'axios';
import { formatMoney } from '../../utils/money';
import ProductGrid from './ProductGrid';

function Homepage({cart}) {

  const [products,setproduct] = useState([])
 
  useEffect(()=>{
    axios.get('/api/products')
  .then((response)=>{
    setproduct(response.data)
  })
  },[])

  console.log("Card",cart);
  
  
  return (
    <>
    <link rel="icon" type="image/svg+xml" href="images/Home.png" />
    <title>Ecommerce Website</title>
    
    <Header cart={cart}/>
    <div className="home-page">
      <ProductGrid products={products}/>
    </div>
    </>
  )
}

export default Homepage