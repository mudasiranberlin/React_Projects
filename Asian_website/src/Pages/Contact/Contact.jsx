import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] =
    useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="section contact"
    >

      <div className="container contact-grid">

        <div className="contact-info">

          <span className="section-label">
            CONTACT AIC
          </span>

          <h2>
            We Are Here to Help
          </h2>

          <p>
            Contact ASEAN Institute of Cambodia
            for information about admissions,
            academic programs and student services.
          </p>

          <div className="contact-item">

            <div>📍</div>

            <div>

              <strong>
                Address
              </strong>

              <p>
                Phnom Penh, Cambodia
              </p>

            </div>

          </div>

          <div className="contact-item">

            <div>📞</div>

            <div>

              <strong>
                Phone
              </strong>

              <p>
                +855 12 345 678
              </p>

            </div>

          </div>

          <div className="contact-item">

            <div>✉</div>

            <div>

              <strong>
                Email
              </strong>

              <p>
                info@aic.edu.kh
              </p>

            </div>

          </div>

        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          {submitted && (

            <div className="success-message">
              Thank you! Your message has
              been submitted successfully.
            </div>

          )}

          <div className="form-row">

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

          </div>

          <input
            type="text"
            placeholder="Subject"
            required
          />

          <textarea
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>

          <button
            type="submit"
            className="btn btn-primary"
          >
            Send Message →
          </button>

        </form>

      </div>

    </section>
  );
}
export default Contact