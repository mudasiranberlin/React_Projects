function Internationalization({PageHero}) {
  return (
    <main className="university-page">

      <PageHero
        label="GLOBAL CONNECTION"
        title="Internationalization"
        description="Building international academic relationships and connecting Cambodia with the wider ASEAN community."
      />

      <section className="info-section">

        <div className="container">

          <div className="image-text-layout reverse">

            <div className="page-text">

              <span className="section-label">
                INTERNATIONALIZATION
              </span>

              <h2>
                Connected to the
                <span> ASEAN Community</span>
              </h2>

              <p>
                Despite its relatively young history, Asian
                Institute of Cambodia has worked to build and
                expand networks with universities and higher
                education institutions in ASEAN.
              </p>

              <p>
                Through international cooperation, students
                and faculty can gain exposure to different
                educational systems, cultures, academic ideas
                and professional opportunities.
              </p>

              <p>
                AIC believes internationalization is an
                important part of preparing students to
                participate in an increasingly connected world.
              </p>

            </div>

            <div className="large-page-image">

              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85"
                alt="International students"
              />

            </div>

          </div>

        </div>

      </section>

      <section className="grey-section">

        <div className="container">

          <div className="section-heading">

            <span className="section-label">
              INTERNATIONAL NETWORKS
            </span>

            <h2>
              Regional Cooperation
            </h2>

          </div>

          <div className="international-grid">

            <div className="international-card">

              <span>01</span>

              <h3>
                Passage to ASEAN
              </h3>

              <p>
                AIC became a member of the Passage to ASEAN
                (P2A), supporting connections among higher
                education institutions across ASEAN.
              </p>

            </div>

            <div className="international-card">

              <span>02</span>

              <h3>
                ACNET-EngTech
              </h3>

              <p>
                AIC has participated in the ACNET-EngTech
                network involving higher education institutions
                from ASEAN and China.
              </p>

            </div>

            <div className="international-card">

              <span>03</span>

              <h3>
                Academic Partnerships
              </h3>

              <p>
                The institution continues to seek cooperation
                with universities, colleges and organizations
                for mutual academic development.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
export default Internationalization