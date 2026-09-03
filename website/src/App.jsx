import { useState } from 'react'
import Homepage from './Pages/Home/Homepage'
import Checkout from './Pages/Checkout/Checkout'
import Tracking from './Pages/order/Tracking'
import Order from './Pages/order/Order'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Homepage/>
    <Checkout/>
    <Tracking/>
    <Order/>
      
    </>
  )
}

export default App
