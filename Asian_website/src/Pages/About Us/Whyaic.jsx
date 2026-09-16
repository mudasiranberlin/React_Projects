function WhyAIC({ PageHero }) {
  return (
    <main className="university-page">
      <PageHero
        label="ABOUT OUR INSTITUTION"
        title="Why AIC?"
        description="Discover the values, opportunities and educational environment that make our institution a place to learn, grow and succeed."
      />

      <section className="info-section">
        <div className="container">
          <div className="section-heading-left">
            <span className="section-label">
              WHY CHOOSE US
            </span>

            <h2>
              Why Study at
              <span> AIC?</span>
            </h2>

            <p>
              Choosing a university is an important decision.
              Our institution is committed to providing students
              with an educational environment that supports
              academic achievement, personal development and
              professional growth.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">🎓</div>
              <h3>Quality Education</h3>
              <p>
                We strive to provide students with quality
                education through dedicated lecturers,
                academic programs and practical learning.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">👨‍🏫</div>
              <h3>Qualified Lecturers</h3>
              <p>
                Students have the opportunity to learn from
                experienced educators who are committed to
                teaching and student development.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">🌏</div>
              <h3>International Opportunities</h3>
              <p>
                Academic partnerships and international
                networks help students gain broader exposure
                to regional and global opportunities.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">💡</div>
              <h3>Practical Learning</h3>
              <p>
                Our educational approach encourages students
                to connect academic knowledge with practical
                skills and real-world challenges.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">🤝</div>
              <h3>Community</h3>
              <p>
                Students become part of an academic community
                where cooperation, respect and social
                responsibility are encouraged.
              </p>
            </div>

            <div className="why-card">
              <div className="why-icon">🚀</div>
              <h3>Future Development</h3>
              <p>
                We encourage students to develop the skills,
                confidence and knowledge necessary for their
                future careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="blue-highlight">
        <div className="container highlight-content">
          <span className="section-label light">
            YOUR FUTURE STARTS HERE
          </span>

          <h2>Learn. Grow. Lead.</h2>

          <p>
            Our goal is to help every student discover their
            potential and prepare for meaningful participation
            in society.
          </p>

          <a href="/contact" className="page-button">
            Contact Us →
          </a>
        </div>
      </section>
    </main>
  );
}

export default WhyAIC;
