function GoverningCouncilPage({councilMeetings}) {
  return (
    <section className="collaboration-content">

      <span className="content-label">
        GOVERNING COUNCIL
      </span>

      <h2>Governing Council Meetings</h2>

      <p className="content-lead">
        The Governing Council meetings provide an
        important platform for university leaders and
        representatives to discuss institutional
        development, academic cooperation and future
        directions.
      </p>

      <div className="council-timeline">

        {councilMeetings.map((meeting, index) => (
          <article
            className="council-card"
            key={meeting.title}
          >

            <div className="council-image">

              <img
                src={meeting.image}
                alt={meeting.title}
              />

              <div className="council-year">
                {meeting.year}
              </div>

            </div>

            <div className="council-content">

              <span>
                GOVERNING COUNCIL MEETING
              </span>

              <h3>
                {meeting.title}
              </h3>

              <p>
                {meeting.location}
              </p>

              <a href="#contact">
                Meeting Details →
              </a>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}
export default GoverningCouncilPage