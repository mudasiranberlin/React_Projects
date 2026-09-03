import { useState } from 'react'
import Homepage from './Pages/Home/Homepage'
import Checkout from './Pages/Checkout/Checkout'
import Tracking from './Pages/order/Tracking'
import Order from './Pages/order/Order'
import {Route, Router,Routes} from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route index element={<Homepage/>}/>
      <Route path='checkout' element={<Checkout/>}/>
      <Route path='orders' element={<Order/>}/>
      <Route path='tracking' element={<Tracking/>}/>

    </Routes>
      
    </>
  )
}

export default App
