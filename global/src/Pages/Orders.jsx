import React from 'react'
import Header from '../Component/Header'
import Footer from '../Component/Footer'

function Orders({cart}) {
  return (
    <>
    <title>Order</title>
    <Header/>

    <div className="bg-light min-vh-100 py-4">

      <div className="container">

        {/* Page Title */}
        <h2 className="mb-4 fw-bold">
          Your Orders
        </h2>

        {/* Orders */}
        <div className="d-flex flex-column gap-4">

          {/* ================= ORDER 1 ================= */}
          <div className="card border-0 shadow-sm">

            {/* Order Header */}
            <div className="card-header bg-light p-4">

              <div className="row g-3">

                {/* Order Date */}
                <div className="col-6 col-md-3">
                  <small className="text-muted d-block">
                    Order Placed:
                  </small>

                  <strong>
                    August 12
                  </strong>
                </div>

                {/* Total */}
                <div className="col-6 col-md-3">
                  <small className="text-muted d-block">
                    Total:
                  </small>

                  <strong>
                    $35.06
                  </strong>
                </div>

                {/* Order ID */}
                <div className="col-12 col-md-6">
                  <small className="text-muted d-block">
                    Order ID:
                  </small>

                  <span className="text-break">
                    27cba69d-4c3d-4098-b42d-ac7fa62b7664
                  </span>
                </div>

              </div>
            </div>


            {/* Order Products */}
            <div className="card-body p-4">

              {/* Product 1 */}
              <div className="row g-4 align-items-center">

                {/* Image */}
                <div className="col-12 col-sm-3 col-md-2 text-center">
                  <img
                    src="/images/products/athletic-cotton-socks-6-pairs.jpg"
                    alt="Athletic Cotton Socks"
                    className="img-fluid"
                    style={{
                      height: "120px",
                      width: "120px",
                      objectFit: "contain"
                    }}
                  />
                </div>

                {/* Details */}
                <div className="col-12 col-sm-5 col-md-6">

                  <h5 className="fw-semibold">
                    Black and Gray Athletic Cotton Socks - 6 Pairs
                  </h5>

                  <p className="text-success mb-2">
                    Arriving on: August 15
                  </p>

                  <p className="text-muted mb-3">
                    Quantity: 1
                  </p>

                  <button className="btn btn-warning">
                    <img
                      src="/images/icons/buy-again.png"
                      alt=""
                      width="18"
                      className="me-2"
                    />

                    Add to Cart
                  </button>

                </div>

                {/* Action */}
                <div className="col-12 col-sm-4 col-md-4 text-sm-end">

                  <a
                    href="/tracking"
                    className="btn btn-outline-dark"
                  >
                    Track Package
                  </a>

                </div>

              </div>


              <hr className="my-4" />


              {/* Product 2 */}
              <div className="row g-4 align-items-center">

                {/* Image */}
                <div className="col-12 col-sm-3 col-md-2 text-center">
                  <img
                    src="/images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg"
                    alt="Cotton T Shirt"
                    className="img-fluid"
                    style={{
                      height: "120px",
                      width: "120px",
                      objectFit: "contain"
                    }}
                  />
                </div>

                {/* Details */}
                <div className="col-12 col-sm-5 col-md-6">

                  <h5 className="fw-semibold">
                    Adults Plain Cotton T-Shirt - 2 Pack
                  </h5>

                  <p className="text-success mb-2">
                    Arriving on: August 19
                  </p>

                  <p className="text-muted mb-3">
                    Quantity: 2
                  </p>

                  <button className="btn btn-warning">
                    <img
                      src="/images/icons/buy-again.png"
                      alt=""
                      width="18"
                      className="me-2"
                    />

                    Add to Cart
                  </button>

                </div>

                {/* Action */}
                <div className="col-12 col-sm-4 col-md-4 text-sm-end">

                  <a
                    href="/tracking"
                    className="btn btn-outline-dark"
                  >
                    Track Package
                  </a>

                </div>

              </div>

            </div>
          </div>


          {/* ================= ORDER 2 ================= */}
          <div className="card border-0 shadow-sm">

            {/* Order Header */}
            <div className="card-header bg-light p-4">

              <div className="row g-3">

                <div className="col-6 col-md-3">
                  <small className="text-muted d-block">
                    Order Placed:
                  </small>

                  <strong>
                    June 10
                  </strong>
                </div>

                <div className="col-6 col-md-3">
                  <small className="text-muted d-block">
                    Total:
                  </small>

                  <strong>
                    $41.90
                  </strong>
                </div>

                <div className="col-12 col-md-6">
                  <small className="text-muted d-block">
                    Order ID:
                  </small>

                  <span className="text-break">
                    b6b6c212-d30e-4d4a-805d-90b52ce6b37d
                  </span>
                </div>

              </div>
            </div>


            {/* Order Product */}
            <div className="card-body p-4">

              <div className="row g-4 align-items-center">

                {/* Image */}
                <div className="col-12 col-sm-3 col-md-2 text-center">

                  <img
                    src="/images/products/intermediate-composite-basketball.jpg"
                    alt="Basketball"
                    className="img-fluid"
                    style={{
                      height: "120px",
                      width: "120px",
                      objectFit: "contain"
                    }}
                  />

                </div>


                {/* Details */}
                <div className="col-12 col-sm-5 col-md-6">

                  <h5 className="fw-semibold">
                    Intermediate Size Basketball
                  </h5>

                  <p className="text-success mb-2">
                    Arriving on: June 17
                  </p>

                  <p className="text-muted mb-3">
                    Quantity: 2
                  </p>

                  <button className="btn btn-warning">

                    <img
                      src="/images/icons/buy-again.png"
                      alt=""
                      width="18"
                      className="me-2"
                    />

                    Add to Cart

                  </button>

                </div>


                {/* Action */}
                <div className="col-12 col-sm-4 col-md-4 text-sm-end">

                  <a
                    href="/tracking"
                    className="btn btn-outline-dark"
                  >
                    Track Package
                  </a>

                </div>

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

export default Orders