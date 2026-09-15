function GraduateSchoolSection() {
  const links = [
    "History",
    "Message From The Interim Head",
    "Organization Chart",
    "Mission Vision and Goal",
    "Programs",
    "Collection of Abstracts",
    "Alumni Book",
    "Contact Us",
  ];

  return (
    <section
      id="graduate-school"
      className="graduate-section"
    >
      <div className="container">

        <div className="graduate-grid">

          <div className="graduate-intro">

            <span className="section-label light">
              GRADUATE SCHOOL
            </span>

            <h2>
              Advanced Study
              <span> & Research</span>
            </h2>

            <p>
              The Graduate School provides a platform for
              advanced academic study, research and scholarly
              development.
            </p>

            <p>
              Explore information about graduate programs,
              research, academic activities and alumni.
            </p>

          </div>

          <div className="graduate-links">

            {links.map((link, index) => (
              <a
                href="#graduate"
                key={link}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>
                  {link}
                </strong>

                <b>
                  →
                </b>
              </a>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
export default GraduateSchoolSection