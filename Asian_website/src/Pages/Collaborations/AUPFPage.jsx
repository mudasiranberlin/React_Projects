function AUPFPage({aupfEvents}) {
  return (
    <section className="collaboration-content">

      <span className="content-label">
        ASIAN UNIVERSITY PRESIDENTS' FORUM
      </span>

      <h2>AUPF</h2>

      <p className="content-lead">
        The Asian University Presidents' Forum provides
        opportunities for university leaders and academic
        institutions to meet, exchange ideas and strengthen
        cooperation across Asia.
      </p>

      <div className="event-introduction">

        <div>
          <strong>5+</strong>
          <span>Historical AUPF Meetings</span>
        </div>

        <p>
          AIC has participated in and supported regional
          academic cooperation through the AUPF network,
          bringing together universities and educational
          leaders from across Asia.
        </p>

      </div>

      <div className="event-grid">

        {aupfEvents.map((event) => (
          <article
            className="collaboration-event-card"
            key={event.title}
          >

            <div className="event-image">

              <img
                src={event.image}
                alt={event.title}
              />

              <div className="event-year">
                {event.year}
              </div>

            </div>

            <div className="event-card-content">

              <span>
                AUPF MEETING
              </span>

              <h3>
                {event.title}
              </h3>

              <p>
                📍 {event.location}
              </p>

              <a href="#contact">
                View Event →
              </a>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}
export default AUPFPage