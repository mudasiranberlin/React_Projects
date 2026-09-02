import React from 'react'
import Header from '../../Component/Header'
import Footer from '../../Component/Footer'

function Checkout({cart}) {
  return (
    <>
    <title>Checkout</title>
        <Header/>
      <div className="bg-light min-vh-100 py-4">
        <div className="container">
          {
            cart.map((cartItem)=>{
              return(
                <>
                

                </>
              )

            })
          }

          {/* Page Title */}
          <h2 className="fw-bold mb-4">
            Review your order
          </h2>

          <div className="row g-4">

            {/* ================= ORDER SUMMARY ================= */}
            <div className="col-12 col-lg-8">

              {/* ================= ITEM 1 ================= */}
              <div className="card border-0 shadow-sm mb-4">

                <div className="card-body p-4">

                  <div className="text-success fw-bold mb-4">
                    Delivery date: Tuesday, June 21
                  </div>

                  <div className="row g-4">

                    {/* Product Image */}
                    <div className="col-12 col-md-3 text-center">
                      <img
                        src="/images/products/athletic-cotton-socks-6-pairs.jpg"
                        className="img-fluid"
                        alt="Athletic Cotton Socks"
                        style={{
                          height: "150px",
                          width: "150px",
                          objectFit: "contain"
                        }}
                      />
                    </div>

                    {/* Product Details */}
                    <div className="col-12 col-md-9">

                      <h5 className="fw-semibold">
                        Black and Gray Athletic Cotton Socks - 6 Pairs
                      </h5>

                      <h5 className="text-danger fw-bold">
                        $10.90
                      </h5>

                      <div className="mb-4">
                        <span>
                          Quantity:
                          <strong className="ms-1">2</strong>
                        </span>

                        <button className="btn btn-link p-0 ms-3">
                          Update
                        </button>

                        <button className="btn btn-link text-danger p-0 ms-2">
                          Delete
                        </button>
                      </div>

                      {/* Delivery Options */}
                      <h6 className="fw-bold mb-3">
                        Choose a delivery option:
                      </h6>

                      {/* Option 1 */}
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="delivery-option-1"
                          defaultChecked
                        />

                        <label className="form-check-label">
                          <strong>
                            Tuesday, June 21
                          </strong>

                          <div className="text-success">
                            FREE Shipping
                          </div>
                        </label>
                      </div>

                      {/* Option 2 */}
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="delivery-option-1"
                        />

                        <label className="form-check-label">
                          <strong>
                            Wednesday, June 15
                          </strong>

                          <div className="text-muted">
                            $4.99 - Shipping
                          </div>
                        </label>
                      </div>

                      {/* Option 3 */}
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="delivery-option-1"
                        />

                        <label className="form-check-label">
                          <strong>
                            Monday, June 13
                          </strong>

                          <div className="text-muted">
                            $9.99 - Shipping
                          </div>
                        </label>
                      </div>

                    </div>
                  </div>

                </div>
              </div>


              {/* ================= ITEM 2 ================= */}
              <div className="card border-0 shadow-sm mb-4">

                <div className="card-body p-4">

                  <div className="text-success fw-bold mb-4">
                    Delivery date: Wednesday, June 15
                  </div>

                  <div className="row g-4">

                    {/* Product Image */}
                    <div className="col-12 col-md-3 text-center">
                      <img
                        src="/images/products/intermediate-composite-basketball.jpg"
                        className="img-fluid"
                        alt="Basketball"
                        style={{
                          height: "150px",
                          width: "150px",
                          objectFit: "contain"
                        }}
                      />
                    </div>

                    {/* Product Details */}
                    <div className="col-12 col-md-9">

                      <h5 className="fw-semibold">
                        Intermediate Size Basketball
                      </h5>

                      <h5 className="text-danger fw-bold">
                        $20.95
                      </h5>

                      <div className="mb-4">
                        <span>
                          Quantity:
                          <strong className="ms-1">1</strong>
                        </span>

                        <button className="btn btn-link p-0 ms-3">
                          Update
                        </button>

                        <button className="btn btn-link text-danger p-0 ms-2">
                          Delete
                        </button>
                      </div>

                      {/* Delivery Options */}
                      <h6 className="fw-bold mb-3">
                        Choose a delivery option:
                      </h6>

                      {/* Option 1 */}
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="delivery-option-2"
                        />

                        <label className="form-check-label">
                          <strong>
                            Tuesday, June 21
                          </strong>

                          <div className="text-success">
                            FREE Shipping
                          </div>
                        </label>
                      </div>

                      {/* Option 2 */}
                      <div className="form-check mb-3">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="delivery-option-2"
                          defaultChecked
                        />

                        <label className="form-check-label">
                          <strong>
                            Wednesday, June 15
                          </strong>

                          <div className="text-muted">
                            $4.99 - Shipping
                          </div>
                        </label>
                      </div>

                      {/* Option 3 */}
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="delivery-option-2"
                        />

                        <label className="form-check-label">
                          <strong>
                            Monday, June 13
                          </strong>

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


            {/* ================= PAYMENT SUMMARY ================= */}
            <div className="col-12 col-lg-4">

              <div className="card border-0 shadow-sm">

                <div className="card-body p-4">

                  <h4 className="fw-bold mb-4">
                    Payment Summary
                  </h4>

                  {/* Items */}
                  <div className="d-flex justify-content-between mb-3">
                    <span>
                      Items (3):
                    </span>

                    <span>
                      $42.75
                    </span>
                  </div>

                  {/* Shipping */}
                  <div className="d-flex justify-content-between mb-3">
                    <span>
                      Shipping &amp; handling:
                    </span>

                    <span>
                      $4.99
                    </span>
                  </div>

                  <hr />

                  {/* Subtotal */}
                  <div className="d-flex justify-content-between mb-3">
                    <span>
                      Total before tax:
                    </span>

                    <span>
                      $47.74
                    </span>
                  </div>

                  {/* Tax */}
                  <div className="d-flex justify-content-between mb-3">
                    <span>
                      Estimated tax (10%):
                    </span>

                    <span>
                      $4.77
                    </span>
                  </div>

                  <hr />

                  {/* Total */}
                  <div className="d-flex justify-content-between mb-4">
                    <strong className="fs-5">
                      Order total:
                    </strong>

                    <strong className="fs-5 text-danger">
                      $52.51
                    </strong>
                  </div>

                  {/* Place Order */}
                  <button className="btn btn-warning w-100 py-2 fw-semibold">
                    Place your order
                  </button>

                </div>
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