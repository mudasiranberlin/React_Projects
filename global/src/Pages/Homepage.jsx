import React, { useEffect, useState } from 'react'
import Header from '../Component/Header'
import Coursel from './Coursel'
import Footer from '../Component/Footer'
// import { products } from '../products'
import axios from 'axios';
import Product from './Product';

function Homepage({cart,loadCart}) {
  const [products,setProducts]=useState([])
   
  useEffect(()=>{
    axios.get('api/products').then((response)=>{
      setProducts(response.data)
    //  console.log(response.data);
  })
  },[])

  return (
    <>

    <Header cart={cart}/>
    {/* <Coursel/> */}
<div className="container-fluid bg-light py-4">

  <div className="container">

    <div className="row g-4">

      {products.map((product) => (

       <Product  key={product.id} product={product} loadCart={loadCart}/>

      ))}

    </div>

  </div>

</div>

<Footer/>
    </>
  )
}

export default Homepage