import React from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import { useNavigate } from 'react-router';

function About({cart}) {
    const navigate = useNavigate();
     const createOrder = async ()=>{
       navigate('/')
    }
  return (
    <>
    <title>About us </title>
    <Header cart={cart}/>
    
    
    <div className="about-page">

      {/* Hero Section */}
      <section className="bg-light py-5">
        <div className="container py-4">
          <div className="row align-items-center">

            <div className="col-md-6 mb-4 mb-md-0">
              <h1 className="display-5 fw-bold">
                About Our Store
              </h1>

              <p className="lead text-muted mt-3">
                We make online shopping simple, convenient, and enjoyable.
                Discover quality products at great prices, delivered right
                to your doorstep.
              </p>

              <button className="btn btn-primary px-4 py-2"onClick={createOrder} >
                Shop Now
              </button>
            </div>

            <div className="col-md-6 text-center">
              <img
                src="/images/coursel/2.jpg"
                alt="Our Store"
                className="img-fluid rounded-4 shadow"
              />
            </div>

          </div>
        </div>
      </section>


      {/* Who We Are */}
      <section className="py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="fw-bold">Who We Are</h2>
            <p className="text-muted">
              Your trusted destination for quality products
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-9 text-center">

              <p className="text-muted fs-5">
                Our store was created with one simple goal: to make online
                shopping easier for everyone. We carefully select products
                that provide great value, quality, and convenience.
              </p>

              <p className="text-muted fs-5">
                From browsing products to choosing delivery options and
                completing your order, we focus on providing a smooth and
                enjoyable shopping experience.
              </p>

            </div>
          </div>

        </div>
      </section>


      {/* Why Choose Us */}
      <section className="bg-light py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="fw-bold">Why Choose Us?</h2>
            <p className="text-muted">
              We put our customers first.
            </p>
          </div>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="fs-1 mb-3">
                  🛍️
                </div>

                <h4 className="fw-bold">
                  Quality Products
                </h4>

                <p className="text-muted">
                  We offer carefully selected products with a focus on
                  quality and value.
                </p>
              </div>
            </div>


            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="fs-1 mb-3">
                  🚚
                </div>

                <h4 className="fw-bold">
                  Fast Delivery
                </h4>

                <p className="text-muted">
                  Choose a delivery option that works best for you and
                  receive your order conveniently.
                </p>
              </div>
            </div>


            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="fs-1 mb-3">
                  ❤️
                </div>

                <h4 className="fw-bold">
                  Customer First
                </h4>

                <p className="text-muted">
                  Your satisfaction is our priority. We are always working
                  to improve your shopping experience.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* Our Mission */}
      <section className="py-5">
        <div className="container">

          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">

              <h2 className="fw-bold mb-4">
                Our Mission
              </h2>

              <p className="lead text-muted">
                Our mission is to provide a simple, reliable, and enjoyable
                online shopping experience while delivering products that
                customers can trust.
              </p>

            </div>
          </div>

        </div>
      </section>


      
      


      

    </div>
    <Footer/>
    </>
  );
}

export default About;
