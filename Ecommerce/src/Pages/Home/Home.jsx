import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductsGrid from './ProductsGrid'
import './Home.css'
import Header from '../../Componenets/Header'


function Home({cart, loardCart}) {
  /* fetch('http://localhost:3000/api/products')
  .then((response)=>{
    console.log(response);
    return response.json()
  }).then((data)=>{
      console.log(data);
       })
    */

       const [products,setproducts]=useState([])
       

  // useEffect(()=>{
  //   axios.get('/api/products')
  // .then((response)=>{
  //   console.log(response.data);
  //   setproducts(response.data)
  // })
  // },[])

 useEffect(()=>{
  const getHomedata = async()=>{
    const response = await axios.get('/api/products')
    setproducts(response.data)
  }  
  getHomedata();
  },[])

   
  return (
    <>
     <title>Ecommerce Project </title>
     <Header cart={cart} />

    <div className="home-page">
     <ProductsGrid products={ products} loardCart={loardCart} />
    </div>
    </>
  )
}

export default Home