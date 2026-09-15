function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        {/* ABOUT */}
        <div className="footer-about">

          <a href="#home" className="footer-brand">
            <img
              src="/aic-logo.jpg"
              alt="AIC Logo"
            />

            <span>
              ASEAN INSTITUTE 
              <small>OF CAMBODIA</small>
            </span>
          </a>

          <p>
            ASEAN Institute of Cambodia is committed to
            quality education, professional development
            and building future leaders.
          </p>

          <div className="footer-social">
            <a href="https://www.facebook.com/asianinstituteofcambodiapp/">f</a>
            <a href="#youtube">▶</a>
            <a href="#telegram">✈</a>
            <a href="#linkedin">in</a>
          </div>

        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <h4>Academics</h4>
          <ul>
            <li><a href="#foundation-studies">Foundation Studies Department</a></li>
            <li><a href="#social-sciences">College Of Social Sciences</a></li>
            <li><a href="#sciences">College Of Sciences</a></li>
            <li><a href="#arts-humanities">College Of Arts, Humanities And Languages</a></li>
            <li><a href="#health-sciences">Faculty Of Health Sciences</a></li>
            <li><a href="#graduate-school">Graduate School</a></li>
            <li><a href="#others">Others</a></li>
          </ul>
        </div>

        {/* INFORMATION */}
        <div className="footer-column">
          <h3>Information</h3>

          <ul>
            <li><a href="#announcement">Announcement / Notice</a></li>
            <li><a href="#student-services">Student's Services</a></li>
            <li><a href="#admissions">Admissions</a></li>
            <li><a href="#calendar">Calendar</a></li>
            <li><a href="#sitemap">Site Map</a></li>
            <li><a href="#norton-blog">Norton Blog</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#jobs">Jobs</a></li>
            <li><a href="#scholarship">Scholarship</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-column footer-contact">
          <h3>General Information</h3>

          <p>
            <strong>Tel:</strong> 099 888 707
          </p>

          <p>
            <strong>Mobile:</strong> 099 888 707 / 099 888 707
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:sopheap4anha@gmail.com">
              sopheap4anha@gmail.com
            </a>
          </p>
          <p>
            <strong>Address:</strong><br />
            Chumpu Voan 2 Village, Sangkat Choam Chao, 
            Khan Por Senchey, Phnom Penh, Cambodia
          </p>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="copyright">

        <div className="container">

          <p>
            Copyright © Asian Institute of Cambodia, 2011-
            {new Date().getFullYear()}
          </p>

          <div>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
