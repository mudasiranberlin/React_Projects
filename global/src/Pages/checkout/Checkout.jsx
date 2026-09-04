import React from 'react'
import Header from '../../Component/Header'
import Footer from '../../Component/Footer'

function Checkout({cart}) {
  return (
    <>
    <title>Checkout</title>
        <Header cart={cart}/>
<div className="container py-4">

  {/* Page Title */}
  <div className="h3 fw-bold mb-4">
    Review your order
  </div>

  <div className="row g-4">

    {/* ================= ORDER SUMMARY ================= */}
    <div className="col-12 col-lg-8">

      {cart.map((cartItem) => {

        return (

          <div
            key={cartItem.productId}
            className="card shadow-sm mb-4 border-0"
          >

            <div className="card-body">

              {/* Delivery Date */}
              <div className="h5 text-primary fw-bold mb-4">
                Delivery date: Tuesday, June 21
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
                    >
                      Delete
                    </button>

                  </div>


                  {/* Delivery Options */}
                  <div>

                    <div className="fw-bold mb-3">
                      Choose a delivery option:
                    </div>


                    {/* Option 1 */}
                    <div className="border rounded p-3 mb-2">

                      <div className="form-check">

                        <input
                          type="radio"
                          className="form-check-input"
                          name={`delivery-${cartItem.productId}`}
                          defaultChecked
                        />

                        <label className="form-check-label">

                          <div className="fw-bold">
                            Tuesday, June 21
                          </div>

                          <div className="text-success">
                            FREE Shipping
                          </div>

                        </label>

                      </div>

                    </div>


                    {/* Option 2 */}
                    <div className="border rounded p-3 mb-2">

                      <div className="form-check">

                        <input
                          type="radio"
                          className="form-check-input"
                          name={`delivery-${cartItem.productId}`}
                        />

                        <label className="form-check-label">

                          <div className="fw-bold">
                            Wednesday, June 15
                          </div>

                          <div className="text-muted">
                            $4.99 - Shipping
                          </div>

                        </label>

                      </div>

                    </div>


                    {/* Option 3 */}
                    <div className="border rounded p-3">

                      <div className="form-check">

                        <input
                          type="radio"
                          className="form-check-input"
                          name={`delivery-${cartItem.productId}`}
                        />

                        <label className="form-check-label">

                          <div className="fw-bold">
                            Monday, June 13
                          </div>

                          <div className="text-muted">
                            $9.99 - Shipping
                          </div>

                        </label>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        )
      })}

    </div>


    {/* ================= PAYMENT SUMMARY ================= */}
    <div className="col-12 col-lg-4">

      <div className="card shadow border-0">

        <div className="card-body">

          {/* Title */}
          <div className="h4 fw-bold mb-4">
            Payment Summary
          </div>


          {/* Items */}
          <div className="d-flex justify-content-between mb-3">

            <div>
              Items (3):
            </div>

            <div className="fw-semibold">
              $42.75
            </div>

          </div>


          {/* Shipping */}
          <div className="d-flex justify-content-between mb-3">

            <div>
              Shipping &amp; handling:
            </div>

            <div className="fw-semibold">
              $4.99
            </div>

          </div>


          <hr />


          {/* Total Before Tax */}
          <div className="d-flex justify-content-between mb-3">

            <div>
              Total before tax:
            </div>

            <div className="fw-semibold">
              $47.74
            </div>

          </div>


          {/* Tax */}
          <div className="d-flex justify-content-between mb-3">

            <div>
              Estimated tax (10%):
            </div>

            <div className="fw-semibold">
              $4.77
            </div>

          </div>


          <hr />


          {/* Order Total */}
          <div className="d-flex justify-content-between mb-4">

            <div className="h5 fw-bold">
              Order total:
            </div>

            <div className="h5 fw-bold text-danger">
              $52.51
            </div>

          </div>


          {/* Place Order */}
          <button className="btn btn-warning w-100 py-2 fw-bold">
            Place your order
          </button>

        </div>

      </div>

    </div>

  </div>

</div>

      <Footer/>
        </>
  )
}

export default Checkout