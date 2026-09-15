function GovernmentRecognition({PageHero}) {
  return (
    <main className="university-page">

      <PageHero
        label="OFFICIAL STATUS"
        title="Government Recognition"
        description="Our institution's development and recognition within Cambodia's higher education system."
      />

      <section className="info-section">

        <div className="container">

          <div className="recognition-box">

            <div className="recognition-icon">
              🏛️
            </div>

            <div>

              <span className="section-label">
                GOVERNMENT RECOGNITION
              </span>

              <h2>
                Recognized as a
                <span> Higher Education Institution</span>
              </h2>

              <p>
                Asian Institute of Cambodia was established on
                August 17, 2011 as a private higher education
                institution in Kratie Province.
              </p>

              <p>
                The institution received a Sub-Decree from the
                Royal Government of Cambodia on September 26,
                2012.
              </p>

              <p>
                AIC is committed to operating in accordance
                with applicable Cambodian regulations and
                maintaining its commitment to quality education,
                professional development and responsible
                institutional management.
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="timeline-section">

        <div className="container">

          <div className="section-heading">

            <span className="section-label">
              OUR HISTORY
            </span>

            <h2>
              Institutional Milestones
            </h2>

          </div>

          <div className="timeline">

            <div className="timeline-item">

              <div className="timeline-year">
                2011
              </div>

              <div className="timeline-content">
                <h3>
                  Institution Established
                </h3>

                <p>
                  Asian Institute of Cambodia was established
                  in Kratie Province.
                </p>
              </div>

            </div>

            <div className="timeline-item">

              <div className="timeline-year">
                2012
              </div>

              <div className="timeline-content">
                <h3>
                  Government Recognition
                </h3>

                <p>
                  AIC received a Sub-Decree from the Royal
                  Government of Cambodia.
                </p>
              </div>

            </div>

            <div className="timeline-item">

              <div className="timeline-year">
                Today
              </div>

              <div className="timeline-content">
                <h3>
                  Continuing Development
                </h3>

                <p>
                  The institution continues to develop its
                  academic programs, partnerships, research
                  activities and community engagement.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
export default GovernmentRecognition
