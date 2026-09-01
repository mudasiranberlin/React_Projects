import React from 'react'
import { Link } from 'react-router'

function Header() {
  return (
    <>
<div className="bg-dark">
  <div className="container-fluid px-3">
    <div className="d-flex align-items-center justify-content-between py-2">

      {/* Logo */}
      <div className="d-flex align-items-center">
        <Link to="/" className="header-link">
          <img
            src="/images/logo-white.jpeg"
            alt="Logo"
            className="d-none d-md-block"
            style={{ height: "35px" }}
          />

          <img
            src="/images/mobile-logo-white.png"
            alt="Logo"
            className="d-block d-md-none"
            style={{ height: "35px" }}
          />
        </Link>
      </div>

      {/* Search */}
      <div className="d-flex flex-grow-1 mx-3">
        <input
          type="text"
          className="form-control rounded-0 rounded-start"
          placeholder="Search"
        />

        <button
          className="btn btn-warning rounded-0 rounded-end"
          type="button"
        >
          <img
            src="/images/icons/search-icon.png"
            alt="Search"
            style={{ width: "20px", height: "20px" }}
          />
        </button>
      </div>

      {/* Right Section */}
      <div className="d-flex align-items-center gap-3">

        {/* Orders */}
        <Link
          to="/orders"
          className="text-white text-decoration-none"
        >
          <span>Orders</span>
        </Link>

        {/* Cart */}
        <Link
          to="/checkout"
          className="text-white text-decoration-none position-relative d-flex align-items-center"
        >
          <img
            src="/images/icons/cart-icon.png"
            alt="Cart"
            style={{ width: "30px", height: "30px" }}
          />

          <span
            className="position-absolute badge rounded-pill bg-warning text-dark"
            style={{
              top: "-8px",
              left: "18px",
              fontSize: "11px"
            }}
          >
            3
          </span>

          <span className="ms-1">Cart</span>
        </Link>

      </div>

    </div>
  </div>
</div>
    </>
  )
}

export default Header