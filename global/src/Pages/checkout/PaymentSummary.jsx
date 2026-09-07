import dayjs from 'dayjs'
import React from 'react'
import { formatMoney } from '../../utils/money'

function PaymentSummary({loadCart,paymentSummary}) {
  return (
     <div className="col-12 col-lg-4">

            <div className="card shadow border-0">

              <div className="card-body">

                {/* Title */}
                <div className="h4 fw-bold mb-4">
                  Payment Summary
                </div>
                //Hello
                {
                  paymentSummary&&(
                    <>
                <div className="d-flex justify-content-between mb-3">

                  <div>
                    Items ({paymentSummary.totalItems}):
                  </div>

                  <div className="fw-semibold">
                    {formatMoney(paymentSummary.productCostCents)}
                  </div>

                </div>
                <div className="d-flex justify-content-between mb-3">

                  <div>
                    Shipping &amp; handling:
                  </div>

                  <div className="fw-semibold">
                    {formatMoney(paymentSummary.shippingCostCents)}
                  </div>

                </div>


                <hr />
                <div className="d-flex justify-content-between mb-3">

                  <div>
                    Total before tax:
                  </div>

                  <div className="fw-semibold">
                    {formatMoney(paymentSummary.totalCostBeforeTaxCents)}
                  </div>

                </div>

                <div className="d-flex justify-content-between mb-3">

                  <div>
                    Estimated tax (10%):
                  </div>

                  <div className="fw-semibold">
                    {formatMoney(paymentSummary.taxCents)}
                  </div>

                </div>


                <hr />
                <div className="d-flex justify-content-between mb-4">

                  <div className="h5 fw-bold">
                    Order total:
                  </div>

                  <div className="h5 fw-bold text-danger">
                    {formatMoney(paymentSummary.totalCostCents)}
                  </div>

                </div>


                {/* Place Order */}
                <button className="btn btn-warning w-100 py-2 fw-bold">
                  Place your order
                </button>
                </>
                
              )

                }

              </div>

            </div>

          </div>
  )
}

export default PaymentSummary