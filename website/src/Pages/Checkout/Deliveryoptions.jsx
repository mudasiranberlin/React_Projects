import dayjs from 'dayjs'
import React from 'react'
import { formatMoney } from '../../utils/money'

function Deliveryoptions({deliveryOptions,cartItem}) {
    return (
        <div class="delivery-options">
            <div class="delivery-options-title">
                Choose a delivery option:
            </div>
            {deliveryOptions.map((deliveryOption) => {
                let priceString = 'FREE Shipping'
                if (deliveryOption.priceCents > 0) {
                    priceString = `${formatMoney(deliveryOption.priceCents)} - Shipping`
                }
                return (
                    <div key={deliveryOptions.id} class="delivery-option">
                        <input type="radio" checked={deliveryOption.id === cartItem.deliveryOptionsId}
                            class="delivery-option-input"
                            name={`delivery-option-${cartItem.productId}`} />
                        <div>
                            <div class="delivery-option-date">
                                {/* {dayjs(deliveryOption.estimatedDeliveryTime).format('dddd,MMMM,D')} */}
                                {dayjs(deliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                            </div>
                            <div class="delivery-option-price">
                                {priceString}
                            </div>
                        </div>
                    </div>

                )

            })
            }
        </div>
    )
}

export default Deliveryoptions