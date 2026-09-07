import React from 'react'
import Deliveryoption from './Deliveryoption';
import dayjs from 'dayjs'
import { formatMoney } from '../../utils/money';
import axios from 'axios';


function Ordersummary({cart,loadCart,deliveryOptions}) {
  return (
     <div className="col-12 col-lg-8">

            {
              deliveryOptions.length > 0 && cart.map((cartItem) => {
                const selectedDeliveryOption = deliveryOptions.find((deliveryOption) => {
                  return deliveryOption.id === cartItem.deliveryOptionId

                });
                const deleteCartItem = async () => {
                    await axios.delete(`/api/cart-items/${cartItem.productId}`)
                    await loadCart()
                    
                  }

                return (

                  <div
                    key={cartItem.productId}
                    className="card shadow-sm mb-4 border-0"
                  >

                    <div className="card-body">

                      {/* Delivery Date */}
                      <div className="h5 text-primary fw-bold mb-4">
                        Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd,MMMM D')}
                      </div>

                      <div className="row g-4">

                        {/* Product Image */}
                        <div className="col-12 col-md-4 text-center">

                          <img
                            src={cartItem.product.image}
                            alt={cartItem.product.name}
                            className="img-fluid rounded"
                            style={{
                              maxHeight: "180px",
                              objectFit: "contain"
                            }}
                          />

                        </div>


                        {/* Product Details */}
                        <div className="col-12 col-md-8">

                          {/* Product Name */}
                          <div className="h5 fw-bold">
                            {cartItem.product.name}
                          </div>

                          {/* Product Price */}
                          <div className="h5 text-danger fw-bold my-3">
                            {formatMoney(cartItem.product.priceCents)}
                          </div>


                          {/* Quantity */}
                          <div className="mb-4">

                            <span>
                              Quantity:
                            </span>

                            <span className="fw-bold mx-2">
                              {cartItem.quantity}
                            </span>

                            <button
                              className="btn btn-link p-0 me-3"
                            >
                              Update
                            </button>

                            <button
                              className="btn btn-link text-danger p-0"
                              onClick={deleteCartItem}
                            >
                              Delete
                            </button>

                          </div>
                         <Deliveryoption deliveryOptions={deliveryOptions} cartItem={cartItem} loadCart={loadCart} />

                        </div>

                      </div>

                    </div>

                  </div>

                )
              })}

          </div>
  )
}

export default Ordersummary