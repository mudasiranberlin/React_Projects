import React from 'react'
import Header from './Component/Header'
import Homepage from './Pages/Homepage'
import Coursel from './Pages/Coursel'
import {Routes,Route} from 'react-router'
import Checkout from './Pages/checkout/Checkout'
import Orders from './Pages/Orders'

function App() {
  return (
    <>
    <Routes>
      <Route index element={<Homepage/>}/> 
      <Route path='checkout' element={<Checkout/>}/> 
      <Route path='orders' element={<Orders/>}/> 
    </Routes>
    </>
  )
}

export default App