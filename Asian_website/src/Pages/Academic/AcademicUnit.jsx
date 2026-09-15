function AcademicUnit({ unit }) {
  return (
    <div className={`academic-unit ${unit.color}`}>

      <div className="academic-unit-header">

        <div>
          <span>
            {unit.number} / ACADEMIC UNIT
          </span>

          <h3>
            {unit.title}
          </h3>
        </div>

        <div className="academic-unit-symbol">
          {unit.number}
        </div>

      </div>

      <p className="academic-unit-description">
        {unit.description}
      </p>

      <div className="academic-menu-grid">

        {unit.menu.map((item, index) => (
          <a
            href={`#${item
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")}`}
            className="academic-menu-card"
            key={item}
          >
            <span>
              {String(index + 1).padStart(2, "0")}
            </span>

            <strong>
              {item}
            </strong>

            <b>
              →
            </b>
          </a>
        ))}

      </div>

    </div>
  );
}
export default AcademicUnit