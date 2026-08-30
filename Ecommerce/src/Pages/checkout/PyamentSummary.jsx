import React from 'react'
import { formatmoney } from '../../utils/money'
import dayjs from 'dayjs'
import axios from 'axios'
import { useNavigate } from 'react-router'

function PyamentSummary({paymentSummary,loardCart}) {
    const navigate = useNavigate();

    const createOrder =async()=>{
        await axios.post('/api/orders')
        await loardCart()
        navigate('/orders')
    }
  return (
    <>
    <div class="payment-summary">
                <div class="payment-summary-title">
                  Payment Summary
                </div>
                {
                  paymentSummary && (
                    <>
                    <div class="payment-summary-row">
                  <div>Items {paymentSummary.totalItems}:</div>
                  <div class="payment-summary-money">{ formatmoney(paymentSummary.productCostCents)}</div>
                </div>
    
                <div class="payment-summary-row">
                  <div>Shipping &amp; handling:</div>
                  <div class="payment-summary-money">{formatmoney(paymentSummary.shippingCostCents)}</div>
                </div>
    
                <div class="payment-summary-row subtotal-row">
                  <div>Total before tax:</div>
                  <div class="payment-summary-money">{formatmoney(paymentSummary.totalCostBeforeTaxCents)}</div>
                </div>
    
                <div class="payment-summary-row">
                  <div>Estimated tax (10%):</div>
                  <div class="payment-summary-money">{formatmoney(paymentSummary.taxCents)}</div>
                </div>
    
                <div class="payment-summary-row total-row">
                  <div>Order total:</div>
                  <div class="payment-summary-money">{formatmoney(paymentSummary.totalCostCents)}</div>
                </div>
    
                <button class="place-order-button button-primary" onClick={createOrder}>
                  Place your order
                </button>
                    </>
                  )
                }
    
                
            </div>
    </>
  )
}

export default PyamentSummary