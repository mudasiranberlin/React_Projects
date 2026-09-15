function SciencesSection() {
  const departments = [
    "Architecture Department",
    "Computer Studies Department",
    "Civil Engineering Department",
    "Electrical and Electronic Engineering Department",
    "Research Department",
  ];

  return (
    <section
      id="college-of-sciences"
      className="academic-detail-section light"
    >
      <div className="container">

        <div className="section-heading">
          <span className="section-label">
            COLLEGE OF SCIENCES
          </span>

          <h2>
            Science, Technology
            <span> & Engineering</span>
          </h2>

          <p>
            Explore the departments and academic areas within
            the College of Sciences.
          </p>
        </div>

        <div className="department-grid">

          {departments.map((department, index) => (
            <div
              className="department-card"
              key={department}
            >
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>
                {department}
              </h3>

              <a href="#programs">
                Explore Department →
              </a>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
export default SciencesSection