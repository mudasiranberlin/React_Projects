import { useEffect, useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router'
import Checkout from './Pages/Checkout'
import Orders from './Pages/Orders'
import Tracking from './Pages/Tracking'
import axios from 'axios';

function App() {

   const [cart,setcart]=useState([])

   useEffect(()=>{
    axios.get('http://localhost:3000/api/cart-items')
  .then((response)=>{
    setcart(response.data)
  })

   },[])

  return (
    <>
    <Routes>
      <Route index element={<Home cart = {cart}/>} />
       <Route path='checkout' element={<Checkout cart = {cart} />} />
        <Route path='orders' element={<Orders cart = {cart} />} />
         <Route path='tracking' element={<Tracking cart = {cart} />} />
        
    </Routes>
     
    </>
  )
}

export default App
