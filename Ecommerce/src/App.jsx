import { useState } from 'react'
import './App.css'
import Home from './Startcode/Pages/Home'
import { Route, Routes } from 'react-router'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
       <Route path='checkout' element={<h1>Welcome to checkout page</h1>} ></Route>
    </Routes>
     
    </>
  )
}

export default App
