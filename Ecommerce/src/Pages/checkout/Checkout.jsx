import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './checkout-header.css'
import './checkout.css'
import Header from '../../Componenets/Header'

import Ordersummary from './Ordersummary';
import { formatmoney } from '../../utils/money';
import PyamentSummary from './PyamentSummary';


function Checkout({cart,loardCart}) {
  const [deliveryOptions,setDeliveryOptions] = useState([])
  const [paymentSummary,setPaymentSummary]=useState(null)

  // First way 
useEffect(()=>{
    const getdata = async()=>{
      const response = await axios.get('/api/payment-summary')
      setPaymentSummary(response.data)
    }
    getdata();
  },[cart])


  useEffect(()=>{
    const getdata = async()=>{
      const response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
      setDeliveryOptions(response.data)
    }
    getdata();
  },[])

  //2nd way 
  // useEffect(()=>{
  //   const getdata = async()=>{
  //     let response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
  //     setDeliveryOptions(response.data)
  //   }
  //   getdata();

  //   const getAppdata = async()=>{
  //     response = await axios.get('/api/payment-summary')
  //     setPaymentSummary(response.data)
  //   }
  //   getdata();
  // },[])


  return (
    <>
     <title>Checkout</title>
     
    <Header cart={cart} />
    <div class="checkout-page">
      <div class="page-title">Review your order</div>

      <div class="checkout-grid">
        <Ordersummary cart={cart} deliveryOptions={deliveryOptions} loardCart={loardCart}/>
        <PyamentSummary paymentSummary={paymentSummary} />
      </div>
    </div>
    </>
  )
}

export default Checkout