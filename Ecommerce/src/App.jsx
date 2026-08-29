import { useState } from 'react'
import './App.css'
import Home from './Startcode/Pages/Home'
import { Route, Routes } from 'react-router'
import Checkout from './Startcode/Pages/Checkout'

function App() {

  return (
    <>
    <Routes>
      <Route index element={<Home/>} />
       <Route path='checkout' element={<Checkout/>} />
    </Routes>
     
    </>
  )
}

export default App
