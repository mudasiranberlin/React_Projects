import { useState } from "react";
import { Link } from "react-router";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="header">

      {/* TOP BAR */}
      <div className="top-bar">
        <div className="container top-bar-inner">

          <div className="top-contact">
            <span>📞 +855 99 888 707</span>
            <span>✉ sopheap4anha@gmail.com</span>
          </div>

          <div className="top-links">
            <Link to="/student-login" onClick={closeMenu}>
              Student Login
            </Link>

            <Link to="/staff-login" onClick={closeMenu}>
              Staff Login
            </Link>

            <Link to="/library" onClick={closeMenu}>
              Library
            </Link>
          </div>

        </div>
      </div>

      {/* NAVIGATION */}
      <div className="navbar">
        <div className="container nav-inner">

          {/* LOGO */}
          <Link
            to="/"
            className="logo"
            onClick={closeMenu}
          >
            <img
              src="/images/1.jpg"
              alt="ASEAN Institute of Cambodia"
              className="logo-image"
            />

            <span className="logo-text">
              ASEAN INSTITUTE
              <small>OF CAMBODIA</small>
            </span>
          </Link>

          {/* MOBILE BUTTON */}
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* MENU */}
          <nav className={menuOpen ? "nav-menu open" : "nav-menu"}>

            {/* HOME */}
            <Link
              to="/"
              onClick={closeMenu}
            >
              Home
            </Link>

            {/* ABOUT */}
            <div
              className={`nav-dropdown ${
                openDropdown === "about" ? "active" : ""
              }`}
            >
              <button
                className="dropdown-button"
                onClick={() => toggleDropdown("about")}
              >
                
                <Link
              to="/about"
              onClick={closeMenu}
            >
              About us
            </Link>
                <span>⌄</span>
              </button>

              <div className="dropdown-menu">

                <Link to="/about/why-aic" onClick={closeMenu}>
                  Why AIC
                </Link>

                <Link to="/about/contact" onClick={closeMenu}>
                  Contact us
                </Link>

                <Link to="/about/campus" onClick={closeMenu}>
                  Campus
                </Link>

                <Link to="/about/library" onClick={closeMenu}>
                  Library and Facility
                </Link>

                <Link to="/about/recognition" onClick={closeMenu}>
                  Government Recognition
                </Link>

                <Link
                  to="/about/internationalization"
                  onClick={closeMenu}
                >
                  Internationalization
                </Link>

                <Link
                  to="/about/mission"
                  onClick={closeMenu}
                >
                  Mission Vision and Goal
                </Link>

                <Link
                  to="/about/structure"
                  onClick={closeMenu}
                >
                  Structure Of AIC
                </Link>

                <Link
                  to="/about/vice-rector"
                  onClick={closeMenu}
                >
                  Message Of Vice Rector
                </Link>

              </div>
            </div>

            {/* ACADEMICS */}
            <div
              className={`nav-dropdown ${
                openDropdown === "academics" ? "active" : ""
              }`}
            >
              <button
                className="dropdown-button"
                onClick={() => toggleDropdown("academics")}
              >
                Academics
                <span>⌄</span>
              </button>

              <div className="dropdown-menu">

                <Link to="/academics/foundation" onClick={closeMenu}>
                  Foundation Studies Department
                </Link>

                <Link to="/academics/sciences" onClick={closeMenu}>
                  College of Sciences
                </Link>

                <Link to="/academics/social-sciences" onClick={closeMenu}>
                  College of Social Sciences
                </Link>

                <Link to="/academics/arts" onClick={closeMenu}>
                  College of Arts, Humanities and Languages
                </Link>

                <Link to="/academics/health" onClick={closeMenu}>
                  Faculty of Health Sciences
                </Link>

                <Link to="/academics/graduate" onClick={closeMenu}>
                  Graduate School
                </Link>

              </div>
            </div>

            {/* ADMISSIONS */}
            <div
              className={`nav-dropdown ${
                openDropdown === "admissions" ? "active" : ""
              }`}
            >
              <button
                className="dropdown-button"
                onClick={() => toggleDropdown("admissions")}
              >
                Admissions
                <span>⌄</span>
              </button>

              <div className="dropdown-menu">

                <Link to="/admissions/undergraduate" onClick={closeMenu}>
                  Under Graduate
                </Link>

                <Link to="/admissions/graduate" onClick={closeMenu}>
                  Graduate School
                </Link>

                <Link to="/admissions/requirements" onClick={closeMenu}>
                  Admission Requirements
                </Link>

                <Link to="/admissions/how-to-apply" onClick={closeMenu}>
                  How to Apply
                </Link>

                <Link to="/admissions/tuition" onClick={closeMenu}>
                  Tuition & Fees
                </Link>

                <Link to="/admissions/scholarships" onClick={closeMenu}>
                  Scholarships
                </Link>

                <Link to="/admissions/application" onClick={closeMenu}>
                  Online Application
                </Link>

              </div>
            </div>

            {/* STUDENTS */}
            <div
              className={`nav-dropdown ${
                openDropdown === "students" ? "active" : ""
              }`}
            >
              <button
                className="dropdown-button"
                onClick={() => toggleDropdown("students")}
              >
                Students
                <span>⌄</span>
              </button>

              <div className="dropdown-menu">

                <Link to="/students/portal" onClick={closeMenu}>
                  Student Portal
                </Link>

                <Link to="/students/services" onClick={closeMenu}>
                  Student Services
                </Link>

                <Link to="/students/library" onClick={closeMenu}>
                  Library
                </Link>

                <Link to="/students/clubs" onClick={closeMenu}>
                  Clubs & Activities
                </Link>

                <Link to="/students/career" onClick={closeMenu}>
                  Career Center
                </Link>

              </div>
            </div>

            {/* COLLABORATIONS */}
            <div
              className={`nav-dropdown ${
                openDropdown === "collaborations" ? "active" : ""
              }`}
            >
              <button
                className="dropdown-button"
                onClick={() => toggleDropdown("collaborations")}
              >
                Collaborations
                <span>⌄</span>
              </button>

              <div className="dropdown-menu">

                <Link to="/collaborations/aupf" onClick={closeMenu}>
                  AUPF
                </Link>

                <Link
                  to="/collaborations/governing-council"
                  onClick={closeMenu}
                >
                  Governing Council
                </Link>

                <Link to="/collaborations/mou" onClick={closeMenu}>
                  MOU
                </Link>

              </div>
            </div>

            {/* CAMPUS LIFE */}
            <div
              className={`nav-dropdown ${
                openDropdown === "campusLife" ? "active" : ""
              }`}
            >
              <button
                className="dropdown-button"
                onClick={() => toggleDropdown("campusLife")}
              >
                Campus Life
                <span>⌄</span>
              </button>

              <div className="dropdown-menu">

                <Link to="/campus-life/events" onClick={closeMenu}>
                  Events
                </Link>

                <Link to="/campus-life/activities" onClick={closeMenu}>
                  Activities
                </Link>

                <Link to="/campus-life/facilities" onClick={closeMenu}>
                  Facilities
                </Link>

                <Link to="/campus-life/gallery" onClick={closeMenu}>
                  Gallery
                </Link>

                <Link to="/campus-life/news" onClick={closeMenu}>
                  News
                </Link>

              </div>
            </div>

            {/* APPLY */}
            <Link
              to="/apply"
              className="nav-apply"
              onClick={closeMenu}
            >
              Apply Now
            </Link>

          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
