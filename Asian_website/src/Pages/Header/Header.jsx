import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(
      openDropdown === name ? null : name
    );
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
            <span>📞 +855 12 345 678</span>
            <span>✉ info@aic.edu.kh</span>
          </div>

          <div className="top-links">
            <a href="#student-login">
              Student Login
            </a>

            <a href="#staff-login">
              Staff Login
            </a>

            <a href="#library">
              Library
            </a>
          </div>

        </div>
      </div>

      {/* NAVIGATION */}
      <div className="navbar">
        <div className="container nav-inner">

          {/* LOGO */}
          <a
            href="#home"
            className="logo"
            onClick={closeMenu}
          >
            <img
              src="./public/images/1.jpg"
              alt="ASEAN Institute of Cambodia"
              className="logo-image"
            />

            <span className="logo-text">
              ASEAN INSTITUTE
              <small>OF CAMBODIA</small>
            </span>
          </a>

          {/* MOBILE BUTTON */}
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* MENU */}
          <nav
            className={
              menuOpen
                ? "nav-menu open"
                : "nav-menu"
            }
          >

            {/* HOME */}
            <a
              href="#home"
              onClick={closeMenu}
            >
              Home
            </a>

            {/* ABOUT */}
            <div
              className={`nav-dropdown ${
                openDropdown === "about"
                  ? "active"
                  : ""
              }`}
            >
              <button
                className="dropdown-button"
                onClick={() =>
                  toggleDropdown("about")
                }
              >
                About
                <span>⌄</span>
              </button>

              <div className="dropdown-menu">

                <a
                  href="#about"
                  onClick={closeMenu}
                >
                  About AIC
                </a>

                <a
                  href="#history"
                  onClick={closeMenu}
                >
                  History
                </a>

                <a
                  href="#mission"
                  onClick={closeMenu}
                >
                  Mission & Vision
                </a>

                <a
                  href="#leadership"
                  onClick={closeMenu}
                >
                  Leadership
                </a>

                <a
                  href="#organization"
                  onClick={closeMenu}
                >
                  Organization
                </a>

              </div>
            </div>

            {/* ACADEMICS */}
            <div
              className={`nav-dropdown ${
                openDropdown === "academics"
                  ? "active"
                  : ""
              }`}
            >
              <button
                className="dropdown-button"
                onClick={() =>
                  toggleDropdown("academics")
                }
              >
                Academics
                <span>⌄</span>
              </button>

              <div className="dropdown-menu">

                <a
                  href="#faculties"
                  onClick={closeMenu}
                >
                  Faculties
                </a>

                <a
                  href="#programs"
                  onClick={closeMenu}
                >
                  Academic Programs
                </a>

                <a
                  href="#undergraduate"
                  onClick={closeMenu}
                >
                  Undergraduate
                </a>

                <a
                  href="#graduate"
                  onClick={closeMenu}
                >
                  Graduate Programs
                </a>

                <a
                  href="#calendar"
                  onClick={closeMenu}
                >
                  Academic Calendar
                </a>

              </div>
            </div>

            {/* ADMISSIONS */}
            <div
              className={`nav-dropdown ${
                openDropdown === "admissions"
                  ? "active"
                  : ""
              }`}
            >
              <button
                className="dropdown-button"
                onClick={() =>
                  toggleDropdown("admissions")
                }
              >
                Admissions
                <span>⌄</span>
              </button>

              <div className="dropdown-menu">

                <a
                  href="#requirements"
                  onClick={closeMenu}
                >
                  Admission Requirements
                </a>

                <a
                  href="#how-to-apply"
                  onClick={closeMenu}
                >
                  How to Apply
                </a>

                <a
                  href="#tuition"
                  onClick={closeMenu}
                >
                  Tuition & Fees
                </a>

                <a
                  href="#scholarships"
                  onClick={closeMenu}
                >
                  Scholarships
                </a>

                <a
                  href="#application"
                  onClick={closeMenu}
                >
                  Online Application
                </a>

              </div>
            </div>

            {/* STUDENTS */}
            <div
              className={`nav-dropdown ${
                openDropdown === "students"
                  ? "active"
                  : ""
              }`}
            >
              <button
                className="dropdown-button"
                onClick={() =>
                  toggleDropdown("students")
                }
              >
                Students
                <span>⌄</span>
              </button>

              <div className="dropdown-menu">

                <a
                  href="#student-portal"
                  onClick={closeMenu}
                >
                  Student Portal
                </a>

                <a
                  href="#student-services"
                  onClick={closeMenu}
                >
                  Student Services
                </a>

                <a
                  href="#library"
                  onClick={closeMenu}
                >
                  Library
                </a>

                <a
                  href="#clubs"
                  onClick={closeMenu}
                >
                  Clubs & Activities
                </a>

                <a
                  href="#career"
                  onClick={closeMenu}
                >
                  Career Center
                </a>

              </div>
            </div>

            {/* CAMPUS */}
            <div
              className={`nav-dropdown ${
                openDropdown === "campus"
                  ? "active"
                  : ""
              }`}
            >
              <button
                className="dropdown-button"
                onClick={() =>
                  toggleDropdown("campus")
                }
              >
                Campus Life
                <span>⌄</span>
              </button>

              <div className="dropdown-menu">

                <a
                  href="#events"
                  onClick={closeMenu}
                >
                  Events
                </a>

                <a
                  href="#activities"
                  onClick={closeMenu}
                >
                  Activities
                </a>

                <a
                  href="#facilities"
                  onClick={closeMenu}
                >
                  Facilities
                </a>

                <a
                  href="#gallery"
                  onClick={closeMenu}
                >
                  Gallery
                </a>

                <a
                  href="#news"
                  onClick={closeMenu}
                >
                  News
                </a>

              </div>
            </div>

            {/* CONTACT */}
            <a
              href="#contact"
              onClick={closeMenu}
            >
              Contact
            </a>

            {/* APPLY */}
            <a
              href="#apply"
              className="nav-apply"
              onClick={closeMenu}
            >
              Apply Now
            </a>

          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header