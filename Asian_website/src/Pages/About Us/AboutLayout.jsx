import { Link, Outlet, useLocation } from "react-router-dom";
import "./about-layout.css";

const aboutSections = [
  {
    path: "/about",
    icon: "🏠",
    title: "About Us",
  },
  {
    path: "/about/vice-rector",
    icon: "👤",
    title: "Message of Vice Rector",
  },
  {
    path: "/about/why-aic",
    icon: "🎓",
    title: "Why AIC",
  },
  {
    path: "/about/structure",
    icon: "🏛️",
    title: "Structure of AIC",
  },
  {
    path: "/about/mission",
    icon: "🎯",
    title: "Mission, Vision & Goal",
  },
  {
    path: "/about/internationalization",
    icon: "🌏",
    title: "Internationalization",
  },
  {
    path: "/about/recognition",
    icon: "🏅",
    title: "Government Recognition",
  },
  {
    path: "/about/library",
    icon: "📚",
    title: "Library & Facilities",
  },
  {
    path: "/about/campus",
    icon: "🏫",
    title: "Campus",
  },
  {
    path: "/about/contact",
    icon: "✉️",
    title: "Contact Us",
  },
];

function AboutSidebar() {
  const location = useLocation();

  return (
    <aside className="about-sidebar">

      <div className="about-sidebar-header">
        <span>ABOUT AIC</span>

        <h2>Explore</h2>
      </div>

      <nav className="about-sidebar-nav">

        {aboutSections.map((section) => {

          const isActive =
            location.pathname === section.path;

          return (
            <Link
              key={section.path}
              to={section.path}
              className={
                isActive
                  ? "about-sidebar-link active"
                  : "about-sidebar-link"
              }
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
  );
}

export default function AboutLayout() {
  return (
    <div className="about-layout">

      {/* LEFT SIDEBAR */}
      <AboutSidebar />

      {/* PAGE CONTENT */}
      <main className="about-page-content">
        <Outlet />
      </main>

    </div>
  );
}
