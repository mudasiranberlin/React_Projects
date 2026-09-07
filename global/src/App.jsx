import React, { useEffect, useState } from 'react'
import Header from './Component/Header'
import Homepage from './Pages/Homepage'
import Coursel from './Pages/Coursel'
import {Routes,Route} from 'react-router'
import Checkout from './Pages/checkout/Checkout'
import Orders from './Pages/Orders'
import axios from 'axios';
import Tracking from './Pages/Tracking'
import About from './Pages/About'


function App() {
  
const [cart,setCart]=useState([])
   const loadCart = async()=>{
      const response = await axios.get('/api/cart-items?expand=product')
      setCart(response.data)
    }

   useEffect(()=>{
    
    loadCart();
    
   },[])

  return (
    <>
    <Routes>
      <Route index element={<Homepage cart={cart} loadCart={loadCart} />}/> 
      <Route path='checkout' element={<Checkout cart={cart} loadCart={loadCart} />}/> 
      <Route path='orders' element={<Orders cart={cart}/>} loadCart={loadCart} /> 
      <Route path='tracking' element={<Tracking cart={cart} loadCart={loadCart} />}/> 
      <Route path='about' element={<About cart={cart} loadCart={loadCart} />}/>
    </Routes>
    </>
  )
}

export default App