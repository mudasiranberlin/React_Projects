import { useState } from "react";
import AcademicUnit from "./AcademicUnit";

function AcademicNavigation({academicUnits}) {
  const [active, setActive] = useState("foundation");
  

  return (
    <section className="academic-navigation">
      <div className="container">

        <div className="section-heading">
          <span className="section-label">
            ACADEMIC PROGRAMS
          </span>

          <h2>
            Explore Our Academics
          </h2>

          <p>
            Select an academic unit to explore its departments,
            programs and resources.
          </p>
        </div>

        <div className="academic-tabs">

          <div className="academic-tab-list">

            {academicUnits.map((unit) => (
              <button
                key={unit.id}
                className={
                  active === unit.id
                    ? "academic-tab active"
                    : "academic-tab"
                }
                onClick={() => setActive(unit.id)}
              >
                <span className={`tab-number ${unit.color}`}>
                  {unit.number}
                </span>

                <span>
                  {unit.shortTitle}
                </span>

                <b>→</b>
              </button>
            ))}

          </div>

          <div className="academic-tab-content">

            {academicUnits
              .filter((unit) => unit.id === active)
              .map((unit) => (
                <AcademicUnit
                  key={unit.id}
                  unit={unit}
                />
              ))}

          </div>

        </div>

      </div>
    </section>
  );
}
export default AcademicNavigation