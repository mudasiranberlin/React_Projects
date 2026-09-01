import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">

      {/* Back to Top */}
      <div
        className="bg-secondary text-center py-3"
        style={{ cursor: "pointer" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to top
      </div>

      {/* Main Footer */}
      <div className="container py-5">
        <div className="row g-4">

          {/* About */}
          <div className="col-12 col-md-3">
            <h5 className="fw-bold mb-3">
              Get to Know Us
            </h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  About Us
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  Careers
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  Our Services
                </a>
              </li>

              <li>
                <a href="#" className="text-white-50 text-decoration-none">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>


          {/* Customer Service */}
          <div className="col-12 col-md-3">
            <h5 className="fw-bold mb-3">
              Customer Service
            </h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  Your Account
                </a>
              </li>

              <li className="mb-2">
                <a href="/orders" className="text-white-50 text-decoration-none">
                  Your Orders
                </a>
              </li>

              <li className="mb-2">
                <a href="/checkout" className="text-white-50 text-decoration-none">
                  Shopping Cart
                </a>
              </li>

              <li>
                <a href="#" className="text-white-50 text-decoration-none">
                  Help Center
                </a>
              </li>
            </ul>
          </div>


          {/* Policies */}
          <div className="col-12 col-md-3">
            <h5 className="fw-bold mb-3">
              Policies
            </h5>

            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  Privacy Policy
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  Terms & Conditions
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  Return Policy
                </a>
              </li>

              <li>
                <a href="#" className="text-white-50 text-decoration-none">
                  Shipping Policy
                </a>
              </li>
            </ul>
          </div>


          {/* Social / Brand */}
          <div className="col-12 col-md-3">

            <h5 className="fw-bold mb-3">
              Follow Us
            </h5>

            <p className="text-white-50">
              Shop smart. Shop simple. Shop with us.
            </p>

            <div className="d-flex gap-3 mt-3">

              <a
                href="#"
                className="btn btn-outline-light btn-sm rounded-circle"
              >
                f
              </a>

              <a
                href="#"
                className="btn btn-outline-light btn-sm rounded-circle"
              >
                X
              </a>

              <a
                href="#"
                className="btn btn-outline-light btn-sm rounded-circle"
              >
                in
              </a>

              <a
                href="#"
                className="btn btn-outline-light btn-sm rounded-circle"
              >
                ◎
              </a>

            </div>

          </div>

        </div>
      </div>


      {/* Bottom Footer */}
      <div className="border-top border-secondary">

        <div className="container py-4">

          <div className="row align-items-center">

            {/* Logo */}
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">

              <img
                src="/images/logo-white.jpeg"
                alt="Logo"
                style={{ height: "35px" }}
              />

            </div>

            {/* Copyright */}
            <div className="col-md-6 text-center text-md-end">

              <span className="text-white-50">
                © 2026 YourStore. All rights reserved.
              </span>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
