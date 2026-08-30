import dayjs from 'dayjs';
import React from 'react'
import { formatmoney } from '../../utils/money';
import Deliveryoptions from './Deliveryoptions';
import axios from 'axios';

function Ordersummary({ cart, deliveryOptions, loardCart }) {


  return (
    <>

      <div class="order-summary">
        {
          deliveryOptions.length > 0 && cart.map((cartItem) => {
            const selectDeliverOption = deliveryOptions.find((deliveryOption) => {
              return deliveryOption.id === cartItem.deliveryOptionId;
            })
            const deleteCartitem = async () => {
              await axios.delete(`/api/cart-items/${cartItem.productId}`)
              await loardCart();
            }
            return (
              <div key={cartItem.productId} class="cart-item-container">
                <div class="delivery-date">
                  Delivery date: {dayjs(selectDeliverOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}

                </div>

                <div class="cart-item-details-grid">
                  <img class="product-image"
                    src={cartItem.product.image} />
                  <div class="cart-item-details">
                    <div class="product-name">
                      {cartItem.product.name}
                    </div>
                    <div class="product-price">
                      {formatmoney(cartItem.product.priceCents)}
                    </div>
                    <div class="product-quantity">
                      <span>
                        Quantity: <span class="quantity-label">{cartItem.quantity}</span>
                      </span>
                      <span class="update-quantity-link link-primary">
                        Update
                      </span>
                      <span class="delete-quantity-link link-primary" onClick={deleteCartitem} >
                        Delete
                      </span>
                    </div>
                  </div>

                  <Deliveryoptions deliveryOptions={deliveryOptions} cartItem={cartItem} loardCart={loardCart} />
                </div>
              </div>
            )

          })
        }

      </div>
    </>
  )
}

export default Ordersummary