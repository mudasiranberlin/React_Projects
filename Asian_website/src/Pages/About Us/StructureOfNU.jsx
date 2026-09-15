export function StructureOfNU({PageHero}) {
  return (
    <main className="university-page">

      <PageHero
        label="ORGANIZATION"
        title="Structure Of NU"
        description="An academic and administrative structure designed to support effective university management and education."
      />

      <section className="info-section">

        <div className="container">

          <div className="section-heading">

            <span className="section-label">
              ORGANIZATIONAL STRUCTURE
            </span>

            <h2>
              Structure of
              <span> NU</span>
            </h2>

            <p>
              The institution's organizational structure brings
              together academic leadership, administration,
              colleges, faculty members and support services.
            </p>

          </div>

          <div className="organization-chart">

            <div className="org-level">

              <div className="org-box main-org">
                <strong>
                  Board / Governing Body
                </strong>

                <span>
                  Institutional Governance
                </span>
              </div>

            </div>

            <div className="org-line"></div>

            <div className="org-level">

              <div className="org-box rector-org">
                <strong>
                  Rector / President
                </strong>

                <span>
                  Institutional Leadership
                </span>
              </div>

            </div>

            <div className="org-line"></div>

            <div className="org-columns">

              <div className="org-box">
                <strong>
                  Vice Rector
                </strong>

                <span>
                  Academic & Administration
                </span>
              </div>

              <div className="org-box">
                <strong>
                  Academic Affairs
                </strong>

                <span>
                  Programs & Faculty
                </span>
              </div>

              <div className="org-box">
                <strong>
                  Administration
                </strong>

                <span>
                  Institutional Services
                </span>
              </div>

            </div>

            <div className="org-line"></div>

            <div className="org-columns">

              <div className="org-box small-org">
                <strong>
                  Colleges
                </strong>

                <span>
                  Academic Programs
                </span>
              </div>

              <div className="org-box small-org">
                <strong>
                  Research
                </strong>

                <span>
                  Research & Innovation
                </span>
              </div>

              <div className="org-box small-org">
                <strong>
                  Student Services
                </strong>

                <span>
                  Student Support
                </span>
              </div>

              <div className="org-box small-org">
                <strong>
                  International Relations
                </strong>

                <span>
                  Global Partnerships
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
export default StructureOfNU