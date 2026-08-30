import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './checkout-header.css'
import './checkout.css'
import Header from '../../Componenets/Header'

import Ordersummary from './Ordersummary';
import { formatmoney } from '../../utils/money';
import PyamentSummary from './PyamentSummary';


function Checkout({cart}) {
  const [deliveryOptions,setDeliveryOptions] = useState([])
  const [paymentSummary,setPaymentSummary]=useState(null)

  useEffect(()=>{
    axios.get('/api/payment-summary')
    .then((response)=>{
      setPaymentSummary(response.data)
    })

  },[])

  useEffect(()=>{
    axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
    .then((response)=>{
      setDeliveryOptions(response.data)
    })

  },[])

  return (
    <>
     <title>Checkout</title>
     
    <Header cart={cart} />
    <div class="checkout-page">
      <div class="page-title">Review your order</div>

      <div class="checkout-grid">
        <Ordersummary cart={cart} deliveryOptions={deliveryOptions}/>
        <PyamentSummary paymentSummary={paymentSummary} />
      </div>
    </div>
    </>
  )
}

export default Checkout