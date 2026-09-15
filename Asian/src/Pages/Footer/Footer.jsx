function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        {/* ABOUT */}

        <div className="footer-about">

          <a
            href="#home"
            className="footer-brand"
          >

            <img
              src="/aic-logo.jpg"
              alt="AIC Logo"
            />

            <span>
              ASEAN INSTITUTE
              <small>
                OF CAMBODIA
              </small>
            </span>

          </a>

          <p>
            ASEAN Institute of Cambodia is
            committed to quality education,
            professional development and
            building future leaders.
          </p>

          <div className="footer-social">

            <a href="#facebook">
              f
            </a>

            <a href="#youtube">
              ▶
            </a>

            <a href="#telegram">
              ✈
            </a>

            <a href="#linkedin">
              in
            </a>

          </div>

        </div>

        {/* QUICK LINKS */}

        <div>

          <h3>
            Quick Links
          </h3>

          <ul>

            <li>
              <a href="#about">
                About AIC
              </a>
            </li>

            <li>
              <a href="#programs">
                Programs
              </a>
            </li>

            <li>
              <a href="#events">
                Events
              </a>
            </li>

            <li>
              <a href="#contact">
                Contact
              </a>
            </li>

          </ul>

        </div>

        {/* ADMISSIONS */}

        <div>

          <h3>
            Admissions
          </h3>

          <ul>

            <li>
              <a href="#requirements">
                Requirements
              </a>
            </li>

            <li>
              <a href="#application">
                Apply Online
              </a>
            </li>

            <li>
              <a href="#tuition">
                Tuition & Fees
              </a>
            </li>

            <li>
              <a href="#scholarships">
                Scholarships
              </a>
            </li>

          </ul>

        </div>

        {/* NEWSLETTER */}

        <div>

          <h3>
            Newsletter
          </h3>

          <p>
            Subscribe to receive AIC news
            and announcements.
          </p>

          <div className="newsletter">

            <input
              type="email"
              placeholder="Your email"
            />

            <button>
              →
            </button>

          </div>

        </div>

      </div>

      {/* COPYRIGHT */}

      <div className="copyright">

        <div className="container">

          <p>
            © {new Date().getFullYear()} ASEAN
            Institute of Cambodia. All rights
            reserved.
          </p>

          <div>

            <a href="#privacy">
              Privacy Policy
            </a>

            <a href="#terms">
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}
export default Footer