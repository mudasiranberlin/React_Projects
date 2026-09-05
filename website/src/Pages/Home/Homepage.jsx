import React, { useEffect, useState } from 'react'
import './index.css'
import Header from '../../Component/Header'
// import { products } from '../../products'
import axios from 'axios';
import { formatMoney } from '../../utils/money';
import ProductGrid from './ProductGrid';

function Homepage({cart, loadCart}) {

  const [products,setproduct] = useState([])
 
  useEffect(()=>{
    const Homedata =async()=>{
    const response = await axios.get('/api/products')
    setproduct(response.data)
    } 
    Homedata();
  },[])

  console.log("Card",cart);
  
  
  return (
    <>
    <link rel="icon" type="image/svg+xml" href="images/Home.png" />
    <title>Ecommerce Website</title>
    
    <Header cart={cart}/>
    <div className="home-page">
      {console.log(products)
      }
      <ProductGrid products={products} loadCart={loadCart}/>
    </div>
    </>
  )
}

export default Homepage