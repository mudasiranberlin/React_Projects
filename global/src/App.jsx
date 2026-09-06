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
   const loardCart = async()=>{
      const response = await axios.get('/api/cart-items?expand=product')
      setCart(response.data)
    }

   useEffect(()=>{
    
    loardCart();
    
   },[])

  return (
    <>
    <Routes>
      <Route index element={<Homepage cart={cart} loardCart={loardCart} />}/> 
      <Route path='checkout' element={<Checkout cart={cart} loardCart={loardCart} />}/> 
      <Route path='orders' element={<Orders cart={cart}/>} loardCart={loardCart} /> 
      <Route path='tracking' element={<Tracking cart={cart} loardCart={loardCart} />}/> 
    </Routes>
    </>
  )
}

export default App