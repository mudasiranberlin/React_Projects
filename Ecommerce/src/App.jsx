import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router'
import Checkout from './Pages/Checkout'
import Orders from './Pages/Orders'
import Tracking from './Pages/Tracking'

function App() {

  return (
    <>
    <Routes>
      <Route index element={<Home/>} />
       <Route path='checkout' element={<Checkout/>} />
        <Route path='orders' element={<Orders/>} />
         <Route path='tracking' element={<Tracking/>} />
        
    </Routes>
     
    </>
  )
}

export default App
