function SocialSciencesSection() {
  const schools = [
    {
      title: "School of Business",
      icon: "▦",
    },
    {
      title: "School of Economics",
      icon: "◈",
    },
    {
      title: "School of Law and Government",
      icon: "⚖",
    },
    {
      title: "School of Hospitality and Tourism Management",
      icon: "✦",
    },
  ];

  return (
    <section
      id="college-of-social-sciences"
      className="academic-detail-section"
    >
      <div className="container">

        <div className="detail-grid">

          <div>

            <span className="section-label">
              COLLEGE OF SOCIAL SCIENCES
            </span>

            <h2>
              Understanding Society,
              <span> Business & Government</span>
            </h2>

            <p>
              The College of Social Sciences brings together
              academic areas that prepare students for careers
              in business, economics, law, government,
              hospitality and tourism.
            </p>

            <p>
              Students can explore a variety of academic and
              professional pathways through the schools within
              the college.
            </p>

          </div>

          <div className="social-school-list">

            {schools.map((school) => (
              <a
                href="#programs"
                className="social-school"
                key={school.title}
              >
                <span>
                  {school.icon}
                </span>

                <strong>
                  {school.title}
                </strong>

                <b>→</b>
              </a>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
export default SocialSciencesSection