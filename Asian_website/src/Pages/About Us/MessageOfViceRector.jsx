function MessageOfViceRector({ PageHero }) {
  return (
    <main className="university-page">

      {/* PAGE HERO */}
      <PageHero
        label="LEADERSHIP MESSAGE"
        title="Message Of Vice Rector"
        description="A message from the Vice Rector to students, faculty, partners and the wider university community."
      />

      {/* VICE RECTOR MESSAGE */}
      <section className="info-section vice-rector-section">
        <div className="container">

          <div className="vice-message-layout">

            {/* PHOTO */}
            <div className="vice-photo">
              <div className="vice-photo-placeholder">
                <span>👤</span>
                <p>Vice Rector</p>
              </div>
            </div>


            {/* MESSAGE */}
            <div className="vice-message">

              <span className="section-label">
                MESSAGE FROM THE VICE RECTOR
              </span>

              <h2>
                Welcome to
                <span> Our Academic Community</span>
              </h2>

              <p>
                Dear Students, Faculty Members, Staff,
                Partners and Friends,
              </p>

              <p>
                It is my great pleasure to welcome you to
                our institution. Higher education is not only
                about obtaining a qualification; it is also
                about developing knowledge, character,
                confidence and a sense of responsibility.
              </p>

              <p>
                At our institution, we are committed to creating
                an educational environment where students can
                develop their abilities and prepare themselves
                for their future careers and responsibilities
                in society.
              </p>

              <p>
                We encourage our students to be curious,
                responsible and open to new ideas. We also
                believe that cooperation among students,
                lecturers, universities, communities and
                international partners is essential for
                sustainable development.
              </p>

              <p>
                As Cambodia and the wider ASEAN region continue
                to change, our graduates need more than
                academic knowledge. They need communication
                skills, creativity, critical thinking,
                professional competence and the ability to
                work with people from different backgrounds.
              </p>

              <p>
                We will continue working to strengthen our
                academic programs, support our faculty and
                staff, encourage research and expand
                opportunities for international cooperation.
              </p>

              <p>
                I encourage every student to make full use of
                your time at the university. Learn from your
                lecturers, learn from your classmates, take
                part in activities and contribute positively
                to your community.
              </p>

              <p>
                Together, we can build a stronger academic
                community and contribute to the development
                of Cambodia and the ASEAN region.
              </p>

              <p>
                With best wishes for your academic journey
                and future success.
              </p>


              {/* SIGNATURE */}
              <div className="vice-signature">
                <strong>Vice Rector</strong>
                <span>
                  Asian Institute of Cambodia
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* HIGHLIGHT */}
      <section className="blue-highlight">

        <div className="container highlight-content">

          <span className="section-label light">
            OUR SHARED FUTURE
          </span>

          <h2>
            One Community, One Destiny
          </h2>

          <p>
            Working together to develop good human
            resources in a global family.
          </p>

        </div>

      </section>

    </main>
  );
}

export default MessageOfViceRector;
