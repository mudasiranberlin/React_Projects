function HealthSection() {
  const links = [
    "Message from the Dean",
    "Organization Chart",
    "Degrees",
    "Guidelines Thesis Paper",
    "Academic Activities",
    "Career Opportunity",
  ];

  return (
    <section
      id="faculty-health-sciences"
      className="academic-detail-section light"
    >
      <div className="container">

        <div className="section-heading">

          <span className="section-label">
            FACULTY OF HEALTH SCIENCES
          </span>

          <h2>
            Health Sciences
            <span> & Professional Development</span>
          </h2>

          <p>
            Explore academic information, degrees, research,
            activities and career opportunities within the
            Faculty of Health Sciences.
          </p>

        </div>

        <div className="health-grid">

          {links.map((link, index) => (
            <a
              href="#health"
              className="health-card"
              key={link}
            >
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>
                {link}
              </h3>

              <b>
                →
              </b>
            </a>
          ))}

        </div>

      </div>
    </section>
  );
}
export default HealthSection