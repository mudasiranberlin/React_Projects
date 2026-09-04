import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

function Tracking({ cart }) {
  return (
    <>
      <title>Tracking</title>
      <Header cart={cart} />

      <div className="container py-5">

        {/* Back to Orders */}
        <div className="mb-4">
          <a href="/orders" className="btn btn-outline-primary">
            ← View all orders
          </a>
        </div>

        {/* Tracking Card */}
        <div className="card shadow border-0">

          {/* Header */}
          <div className="card-header bg-primary text-white py-3">
            <h4 className="mb-0">Order Tracking</h4>
          </div>

          <div className="card-body p-4">

            {/* Delivery Date */}
            <h5 className="fw-bold">
              Arriving on Monday, June 13
            </h5>

            <p className="text-muted">
              Your package is on its way.
            </p>

            <hr />

            {/* Product */}
            <div className="row align-items-center">

              <div className="col-md-4 text-center mb-3 mb-md-0">
                <img
                  src="/images/products/athletic-cotton-socks-6-pairs.jpg"
                  alt="Athletic Cotton Socks"
                  className="img-fluid rounded"
                  style={{ maxHeight: '180px' }}
                />
              </div>

              <div className="col-md-8">

                <h5 className="fw-bold">
                  Black and Gray Athletic Cotton Socks - 6 Pairs
                </h5>

                <p className="mb-2">
                  Quantity: <strong>1</strong>
                </p>

                <span className="badge bg-success">
                  Shipped
                </span>

              </div>

            </div>

            <hr className="my-4" />

            {/* Status */}
            <h5 className="fw-bold mb-4">
              Delivery Status
            </h5>

            {/* Labels */}
            <div className="row text-center mb-2">

              <div className="col-4">
                <span className="fw-bold text-success">
                  ✓ Preparing
                </span>
              </div>

              <div className="col-4">
                <span className="fw-bold text-primary">
                  ✓ Shipped
                </span>
              </div>

              <div className="col-4">
                <span className="text-muted">
                  Delivered
                </span>
              </div>

            </div>

            {/* Bootstrap Progress Bar */}
            <div
              className="progress"
              role="progressbar"
              aria-label="Delivery progress"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height: '12px' }}
            >
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                style={{ width: '50%' }}
              ></div>
            </div>

            {/* Message */}
            <div className="alert alert-info mt-4 mb-0">
              <strong>Your order has been shipped!</strong>
              <br />
              Your package is currently on the way.
            </div>

          </div>
        </div>

      </div>
      <Footer/>
    </>
  )
}

export default Tracking