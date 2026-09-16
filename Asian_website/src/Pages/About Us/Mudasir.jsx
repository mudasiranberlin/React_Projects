import { Link } from "react-router";
import "./mudasir.css";

const aboutSections = [
  {
    path: "vice-rector",
    icon: "👤",
    title: "Message of Vice Rector",
    description:
      "A message from the Vice Rector to students, faculty, partners and the wider university community.",
  },
  {
    path: "why-aic",
    icon: "🎓",
    title: "Why AIC",
    description:
      "Discover the educational environment, opportunities and values of our institution.",
  },
  {
    path: "structure",
    icon: "🏛️",
    title: "Structure of NU",
    description:
      "Explore the organizational structure and academic administration of the institution.",
  },
  {
    path: "mission",
    icon: "🎯",
    title: "Mission, Vision & Goal",
    description:
      "Learn about our mission, vision and goals for academic and institutional development.",
  },
  {
    path: "internationalization",
    icon: "🌏",
    title: "Internationalization",
    description:
      "Explore international cooperation, partnerships and global academic opportunities.",
  },
  {
    path: "recognition",
    icon: "🏅",
    title: "Government Recognition",
    description:
      "Learn about institutional recognition and its relationship with national education development.",
  },
  {
    path: "library",
    icon: "📚",
    title: "Library & Facilities",
    description:
      "Discover learning resources, facilities and services available to students.",
  },
  {
    path: "campus",
    icon: "🏫",
    title: "Campus",
    description:
      "Explore the campus environment and facilities supporting university life.",
  },
  {
    path: "contact",
    icon: "✉️",
    title: "Contact Us",
    description:
      "Get in touch with the institution for admissions, programs and other information.",
  },
];

function PageHero() {
  return (
    <>
      <section className="reactor-hero">
        <div className="reactor-hero-overlay">
          <div className="container">
            <span className="reactor-hero-label">
              ABOUT OUR INSTITUTION
            </span>

            <h1>About Us</h1>

            <p>
              Discover our leadership, academic vision,
              institutional structure, facilities,
              international activities and university
              community.
            </p>
          </div>
        </div>
      </section>

      <div className="reactor-breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>

          <span>/</span>

          <strong>About Us</strong>
        </div>
      </div>
    </>
  );
}

function AboutSectionCard({ section }) {
  return (
    <Link
      to={section.path}
      className="about-section-card"
    >
      <div className="about-section-icon">
        {section.icon}
      </div>

      <div className="about-section-card-content">
        <h3>{section.title}</h3>

        <p>{section.description}</p>

        <span>Explore Section →</span>
      </div>
    </Link>
  );
}

export default function Mudasir() {
  return (
    <main className="university-page">
      <PageHero />

      <section className="about-introduction">
        <div className="container">
          <div className="about-introduction-content">
            <span className="section-label">
              ABOUT OUR INSTITUTION
            </span>

            <h2>
              Discover
              <span> Our University</span>
            </h2>

            <p>
              The Asian Institute of Cambodia is committed
              to providing quality higher education and
              developing knowledgeable, responsible and
              professionally capable graduates.
            </p>

            <p>
              Explore the sections below to learn more
              about our leadership, institutional structure,
              mission and vision, international cooperation,
              facilities, campus and contact information.
            </p>
          </div>
        </div>
      </section>

      <section className="about-overview">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">
              EXPLORE OUR INSTITUTION
            </span>

            <h2>
              Learn More About
              <span> AIC</span>
            </h2>

            <p>
              Explore our leadership, academic direction,
              institutional structure, facilities and
              opportunities.
            </p>
          </div>

          <div className="about-section-card-grid">
            {aboutSections.map((section) => (
              <AboutSectionCard
                key={section.path}
                section={section}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}