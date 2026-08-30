import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductsGrid from './ProductsGrid'
import './Home.css'
import Header from '../../Componenets/Header'


function Home({cart}) {
  /* fetch('http://localhost:3000/api/products')
  .then((response)=>{
    console.log(response);
    return response.json()
  }).then((data)=>{
      console.log(data);
       })
    */

       const [products,setproducts]=useState([])
       

  useEffect(()=>{
    axios.get('http://localhost:3000/api/products')
  .then((response)=>{
    console.log(response.data);
    setproducts(response.data)
  })
  },[])
   
  return (
    <>
     <title>Ecommerce Project </title>
     <Header cart={cart} />

    <div className="home-page">
     <ProductsGrid products={ products}/>
    </div>
    </>
  )
}

export default Home