import React from 'react'
import Header from '../../Component/Header'
import Footer from '../../Component/Footer'
import { formatMoney } from '../../utils/money'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
import Ordersummary from './Ordersummary'
import PaymentSummary from './PaymentSummary'
import './checkout.css'

function Checkout({ cart, loadCart}) {
  const [paymentSummary,setPaymentSummary]=useState(null)
  const [deliveryOptions, setDeliveryOptions] = useState([])
  useEffect(() => {
    axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
      .then((response) => {
        setDeliveryOptions(response.data)
      })

  }, [])

  useEffect(()=>{
    axios.get('/api/payment-summary')
    .then((response)=>{
      setPaymentSummary(response.data)
    })

  },[cart])
  return (
    <>
      <title>Checkout</title>
      <Header cart={cart} />
      <div className="container py-4">

        {/* Page Title */}
        <div className="h3 fw-bold mb-4">
          Review your order
        </div>
 
        <div className="row g-4">

          {/* ================= ORDER SUMMARY ================= */}
         <Ordersummary deliveryOptions={deliveryOptions} cart={cart} loadCart={loadCart} />


          {/* ================= PAYMENT SUMMARY ================= */}
         <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart}/>

        </div>

      </div>

      <Footer />
    </>
  )
}

export default Checkout