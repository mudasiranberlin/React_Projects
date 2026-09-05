import React, { Fragment, useEffect, useState } from 'react'
import './checkout.css'
import Header from '../../Component/Header'
import CheckHead from '../../Component/CheckHead'
import { formatMoney } from '../../utils/money'
import axios from 'axios';
import dayjs from 'dayjs'
import Ordersummary from './Ordersummary'
import Paymentsummary from './Paymentsummary'

function Checkout({cart}) {
  const [paymentSummary,setPaymentSummary]=useState(null)
  const [deliveryOptions,setDeliveryOptions]= useState([])
  useEffect(()=>{
    axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
    .then((response)=>{
      setDeliveryOptions(response.data)
    })

  },[])

  useEffect(()=>{
    axios.get('/api/payment-summary')
    .then((response)=>{
      setPaymentSummary(response.data)
    })

  },[])

  
   
  return (
    <>

    <title>Checkout</title>
    <link rel="icon" type="image/svg+xml" href="images/Trol.png" />
    {/* <Header cart={cart} /> */}
    <CheckHead/>

    <div class="checkout-page">
      <div class="page-title">Review your order</div>

      <div class="checkout-grid">
        <Ordersummary deliveryOptions={deliveryOptions} cart={cart}/>
        


        <Paymentsummary paymentSummary={paymentSummary} />
      </div>
    </div>
    </>
  )
}

export default Checkout