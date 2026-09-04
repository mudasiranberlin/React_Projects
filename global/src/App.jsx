import React, { useEffect, useState } from 'react'
import Header from './Component/Header'
import Homepage from './Pages/Homepage'
import Coursel from './Pages/Coursel'
import {Routes,Route} from 'react-router'
import Checkout from './Pages/checkout/Checkout'
import Orders from './Pages/Orders'
import axios from 'axios';
import Tracking from './Pages/Tracking'


function App() {
  
const [cart,setCart]=useState([])
   useEffect(()=>{
    axios.get('/api/cart-items?expand=product')
  .then((response)=>{
    setCart(response.data)
  })

   },[])

  return (
    <>
    <Routes>
      <Route index element={<Homepage cart={cart} />}/> 
      <Route path='checkout' element={<Checkout cart={cart} />}/> 
      <Route path='orders' element={<Orders cart={cart}/>}/> 
      <Route path='tracking' element={<Tracking cart={cart}/>}/> 
    </Routes>
    </>
  )
}

export default App