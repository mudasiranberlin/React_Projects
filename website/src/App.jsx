import { useEffect, useState } from 'react'
import Homepage from './Pages/Home/Homepage'
import Checkout from './Pages/Checkout/Checkout'
import Tracking from './Pages/order/Tracking'
import Order from './Pages/order/Order'
import {Route, Router,Routes} from 'react-router'
import Empty from './Pages/Empty'
import axios from 'axios'

function App() {
   const [cart,setCart] = useState([])
   useEffect(()=>{
    loadCart();
  },[])

  const loadCart = async()=>{
    const response = await axios.get('/api/cart-items?expand=product') 
    setCart(response.data)
  }

  return (
    <>
    <Routes>
      <Route index element={<Homepage cart={cart} loadCart={loadCart} />}/>
      <Route path='checkout' element={<Checkout cart={cart} loadCart={loadCart}/>}/>
      <Route path='orders' element={<Order cart={cart} loadCart={loadCart} />}/>
      <Route path='tracking' element={<Tracking cart={cart}/>}/>
      <Route path='*' element={<Empty/>}/>

    </Routes>
      
    </>
  )
}

export default App
