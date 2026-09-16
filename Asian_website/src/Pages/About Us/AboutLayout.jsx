import { Link, Outlet, useLocation } from "react-router";
import { useState } from "react";
import "./about-layout.css";

const aboutSections = [
  { path: "/about", icon: "⌂", title: "About Us" },
  { path: "/about/vice-rector", icon: "◉", title: "Vice Rector's Message" },
  { path: "/about/why-aic", icon: "🎓", title: "Why AIC" },
  { path: "/about/structure", icon: "▦", title: "Structure of AIC" },
  { path: "/about/mission", icon: "◎", title: "Mission, Vision & Goal" },
  { path: "/about/internationalization", icon: "🌏", title: "Internationalization" },
  { path: "/about/recognition", icon: "★", title: "Government Recognition" },
  { path: "/about/library", icon: "▤", title: "Library & Facilities" },
  { path: "/about/campus", icon: "⌂", title: "Campus" },
  { path: "/about/contact", icon: "✉", title: "Contact Us" },
];

function AboutSidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile / Tablet Menu Button */}
      <button
        className={`about-menu-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle About AIC menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <aside className={`about-sidebar ${isOpen ? "mobile-open" : ""}`}>
        <div className="about-sidebar-header">
          <div>
            <span>ABOUT AIC</span>
            <h2>Explore</h2>
          </div>

          {/* Close button */}
          <button
            className="about-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <nav className="about-sidebar-nav">
          {aboutSections.map((section) => {
            const isActive = location.pathname === section.path;

            return (
              <Link
                key={section.path}
                to={section.path}
                onClick={() => setIsOpen(false)}
                className={`about-sidebar-link ${
                  isActive ? "active" : ""
                }`}
              >
                <span className="about-sidebar-icon">
                  {section.icon}
                </span>

                <span className="about-sidebar-title">
                  {section.title}
                </span>

                <span className="about-sidebar-arrow">
                  →
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}

function AboutLayout() {
  return (
    <div className="about-layout">
      <AboutSidebar />

      <main className="about-page-content">
        <Outlet />
      </main>
    </div>
  );
}

export default AboutLayout;