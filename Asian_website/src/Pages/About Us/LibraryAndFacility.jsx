 function LibraryAndFacility({PageHero}) {
  return (
    <main className="university-page">

      <PageHero
        label="STUDENT RESOURCES"
        title="Library and Facility"
        description="Resources and facilities that support students, lecturers and academic activities."
      />

      <section className="info-section">

        <div className="container">

          <div className="section-heading">

            <span className="section-label">
              LIBRARY & FACILITIES
            </span>

            <h2>
              Resources for
              <span> Academic Success</span>
            </h2>

            <p>
              The institution recognizes that effective learning
              requires access to appropriate academic resources,
              facilities and technology.
            </p>

          </div>

          <div className="facility-grid">

            <div className="facility-card">
              <div className="facility-icon">
                📚
              </div>

              <h3>
                Library
              </h3>

              <p>
                A learning resource environment supporting
                students in reading, research and academic
                study.
              </p>

              <a href="#library">
                Learn More →
              </a>
            </div>

            <div className="facility-card">
              <div className="facility-icon">
                💻
              </div>

              <h3>
                Computer Facilities
              </h3>

              <p>
                Computer and Internet resources that help
                students access digital information and
                educational materials.
              </p>

              <a href="#computer">
                Learn More →
              </a>
            </div>

            <div className="facility-card">
              <div className="facility-icon">
                🏫
              </div>

              <h3>
                Classrooms
              </h3>

              <p>
                Learning spaces designed to support lectures,
                discussions, presentations and collaborative
                activities.
              </p>

              <a href="#classrooms">
                Learn More →
              </a>
            </div>

            <div className="facility-card">
              <div className="facility-icon">
                🔬
              </div>

              <h3>
                Academic Resources
              </h3>

              <p>
                Educational resources supporting academic
                programs, teaching and research activities.
              </p>

              <a href="#resources">
                Learn More →
              </a>
            </div>

            <div className="facility-card">
              <div className="facility-icon">
                👥
              </div>

              <h3>
                Student Areas
              </h3>

              <p>
                Spaces where students can interact, collaborate
                and participate in university activities.
              </p>

              <a href="#students">
                Learn More →
              </a>
            </div>

            <div className="facility-card">
              <div className="facility-icon">
                🌐
              </div>

              <h3>
                Internet Access
              </h3>

              <p>
                Internet connectivity helps connect students
                and staff to global academic information.
              </p>

              <a href="#internet">
                Learn More →
              </a>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
export default LibraryAndFacility