import dayjs from 'dayjs'
import React from 'react'
import { formatmoney } from '../../utils/money'
import axios from 'axios'

function Deliveryoptions({deliveryOptions,cartItem,loardCart}) {
  return (
    <>
     <div class="delivery-options">
                        <div class="delivery-options-title">
                          Choose a delivery option:
                        </div>
                        {deliveryOptions.map((deliveryOption)=>{
                          let priceString = 'FREE Shipping'
                          if (deliveryOption.priceCents>0) {
                            priceString = `${formatmoney(deliveryOption.priceCents)} - Shipping`
                          }
                          const updateDeliveryOption = async()=>{
                            await axios.put(`api/cart-items/${cartItem.productId}`,{
                                deliveryOptionId:deliveryOption.id
                            })
                            await loardCart();
                          }
                          return(
                            <div  key={deliveryOption.id} class="delivery-option" onClick={updateDeliveryOption} >
                          <input type="radio" checked={ deliveryOption.id === cartItem.deliveryOptionId} onChange={()=>{}}
                            class="delivery-option-input"
                            name={`delivery-option- ${cartItem.productId} `} />
                          <div>
                            <div class="delivery-option-date">
                             {dayjs(deliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                            </div>
                            <div class="delivery-option-price">
                              {priceString}
                            </div>
                          </div>
                        </div>   
        
                          )
                        })}
                      </div>
    </>
  )
}

export default Deliveryoptions