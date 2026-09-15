function ContactUs({PageHero,ContactForm}) {
  return (
    <main className="university-page">

      <PageHero
        label="GET IN TOUCH"
        title="Contact Us"
        description="We are here to answer your questions and provide information about admissions, programs and university life."
      />

      <section className="info-section contact-page-section">
        <div className="container">

          <div className="contact-layout">

            <div className="contact-details">

              <span className="section-label">
                CONTACT INFORMATION
              </span>

              <h2>
                We'd Love to
                <span> Hear From You</span>
              </h2>

              <p>
                If you have questions about our academic programs,
                admissions, campus or other university services,
                please contact us.
              </p>

              <div className="contact-detail">
                <div className="detail-icon">📍</div>

                <div>
                  <h3>Address</h3>
                  <p>
                    Daun Cham Village, Sangkat Kratie,
                    Kratie Town, Kratie Province, Cambodia
                  </p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="detail-icon">📞</div>

                <div>
                  <h3>Phone</h3>
                  <p>
                    +855 XX XXX XXX
                  </p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="detail-icon">✉</div>

                <div>
                  <h3>Email</h3>
                  <p>
                    info@aic-edu.net
                  </p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="detail-icon">🌐</div>

                <div>
                  <h3>Website</h3>
                  <p>
                    www.aic-edu.net
                  </p>
                </div>
              </div>

            </div>

            <ContactForm />

          </div>

        </div>
      </section>

      <section className="map-placeholder">
        <div className="container">
          <div className="map-box">
            <div>
              <span>📍</span>
              <h3>Our Location</h3>
              <p>
                Kratie Town, Kratie Province, Cambodia
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
export default ContactUs
