function Campus({PageHero}) {
  return (
    <main className="university-page">

      <PageHero
        label="OUR CAMPUS"
        title="Campus"
        description="A welcoming academic environment designed to support teaching, learning and student development."
      />

      <section className="info-section">
        <div className="container">

          <div className="image-text-layout">

            <div className="large-page-image">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85"
                alt="University campus"
              />
            </div>

            <div className="page-text">

              <span className="section-label">
                OUR CAMPUS
              </span>

              <h2>
                A Place to
                <span> Learn and Grow</span>
              </h2>

              <p>
                The campus provides an environment where students
                can pursue their studies while participating in
                academic, social and community activities.
              </p>

              <p>
                Located in Kratie Town, the institution benefits
                from its connection with the local community and
                the unique natural and cultural environment of
                Kratie Province.
              </p>

              <p>
                Our campus continues to develop in response to
                the educational needs of students and the
                changing requirements of higher education.
              </p>

            </div>

          </div>

        </div>
      </section>

      <section className="grey-section">

        <div className="container">

          <div className="section-heading">

            <span className="section-label">
              CAMPUS ENVIRONMENT
            </span>

            <h2>
              Supporting Student Life
            </h2>

          </div>

          <div className="feature-grid">

            <div className="feature-box">
              <span>🏫</span>
              <h3>Academic Environment</h3>
              <p>
                Spaces dedicated to teaching, learning and
                academic development.
              </p>
            </div>

            <div className="feature-box">
              <span>💻</span>
              <h3>Technology</h3>
              <p>
                Access to digital resources and Internet
                connectivity supporting modern learning.
              </p>
            </div>

            <div className="feature-box">
              <span>🌳</span>
              <h3>Community Environment</h3>
              <p>
                A campus environment connected to the local
                community and surrounding region.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Campus