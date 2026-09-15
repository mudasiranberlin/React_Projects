function MOUPage({mouPartners}) {
  return (
    <section className="collaboration-content">

      <span className="content-label">
        MEMORANDUM OF UNDERSTANDING
      </span>

      <h2>Our MOU Partners</h2>

      <p className="content-lead">
        The Asian Institute of Cambodia maintains
        partnerships with universities and organizations
        from different countries. These partnerships
        encourage academic cooperation, knowledge exchange,
        research and institutional development.
      </p>

      <div className="partner-grid">

        {mouPartners.map((partner, index) => (
          <article
            className="partner-photo-card"
            key={partner.name}
          >

            <div className="partner-photo">

              <img
                src={partner.image}
                alt={partner.name}
              />

              <div className="partner-number">
                {String(index + 1).padStart(2, "0")}
              </div>

            </div>

            <div className="partner-photo-content">

              <span>
                {partner.country}
              </span>

              <h3>
                {partner.name}
              </h3>

              <a href="#contact">
                Partnership Details →
              </a>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}
export default MOUPage