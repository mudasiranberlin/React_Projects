import { useState } from 'react'
import './App.css'
import Home from './Startcode/Pages/Home'
import { Route, Routes } from 'react-router'
import Checkout from './Startcode/Pages/Checkout'
import Orders from './Startcode/Pages/Orders'
import Tracking from './Startcode/Pages/Tracking'

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
