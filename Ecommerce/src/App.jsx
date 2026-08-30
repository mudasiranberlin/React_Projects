import { useEffect, useState } from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router'
import Checkout from './Pages/checkout/Checkout'
import Orders from './Pages/order/Orders'
import Tracking from './Pages/Tracking'
import axios from 'axios';

function App() {

   const [cart,setcart]=useState([])

  //  useEffect(()=>{
  //   axios.get('http://localhost:3000/api/cart-items?expand=product')
  // .then((response)=>{
  //   setcart(response.data)
  // })

  //  },[])
  const loardCart = async()=>{
      const response = await axios.get('http://localhost:3000/api/cart-items?expand=product')
      setcart(response.data)
    }

   useEffect(()=>{
    
    loardCart();
    
   },[])

  return (
    <>
    <Routes>
  <Route index element={<Home cart={cart} loardCart={loardCart} />} />
  <Route path="/checkout" element={<Checkout cart={cart} loardCart={loardCart} />} />
  <Route path="/orders" element={<Orders cart={cart} />} />
  <Route path="/tracking" element={<Tracking cart={cart} />} />
</Routes>
     
    </>
  )
}

export default App
