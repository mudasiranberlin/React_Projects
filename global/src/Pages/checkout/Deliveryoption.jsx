
import dayjs from 'dayjs';
import React from 'react';
import { formatMoney } from '../../utils/money';
import axios from 'axios';

function Deliveryoption({ deliveryOptions, cartItem, loadCart }) {

  const updateDeliveryOption = async (deliveryOptionId) => {
    await axios.put(`/api/cart-items/${cartItem.productId}`, {
      deliveryOptionId: deliveryOptionId
    });

    await loadCart();
  };

  return (
    <div>
      <div className="fw-bold mb-3">
        Choose a delivery option:
      </div>

      {deliveryOptions.map((deliveryOption) => {

        let priceString = 'FREE Shipping';

        if (deliveryOption.priceCents > 0) {
          priceString = `${formatMoney(deliveryOption.priceCents)} - Shipping`;
        }

        return (
          <div
            key={deliveryOption.id}
            className="border rounded p-3 mb-2"
          >
            <div className="form-check">

              <input
                type="radio"
                className="form-check-input"
                id={`delivery-${deliveryOption.id}-${cartItem.productId}`}
                name={`delivery-option-${cartItem.productId}`}
                checked={
                  deliveryOption.id === cartItem.deliveryOptionsId
                }
                onChange={() =>
                  updateDeliveryOption(deliveryOption.id)
                }
              />

              <label
                className="form-check-label w-100"
                htmlFor={`delivery-${deliveryOption.id}-${cartItem.productId}`}
                style={{ cursor: 'pointer' }}
              >
                <div className="fw-bold">
                  {dayjs(
                    deliveryOption.estimatedDeliveryTimeMs
                  ).format('dddd, MMMM D')}
                </div>

                <div className="text-muted">
                  {priceString}
                </div>
              </label>

            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Deliveryoption;