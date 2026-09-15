function GraduateSchool() {
  const admissionRequirements = [
    "Hold a Bachelor's degree in a related field of study from an institution recognized by the government of the country in which the institution is located.",
    "Be proficient in English.",
    "Have at least two years of related working experience.",
    "Pass the written and oral examinations conducted by the Graduate School.",
  ];

  const applicationDocuments = [
    "A completed application form.",
    "An authenticated copy of the Transcript of Record.",
    "Two copies of 3cm × 4cm photographs with any background.",
    "One copy of 4cm × 6cm photograph with any background.",
  ];

  return (
    <section
      id="graduate-schools"
      className="admission-content-section graduate-section"
    >

      <span className="content-label">
        ADVANCED STUDIES
      </span>

      <h2>Graduate School</h2>

      <p>
        The Graduate School provides advanced educational
        opportunities for qualified students who wish to
        continue their academic and professional development.
      </p>

      <p>
        Applicants are expected to meet the academic,
        professional and language requirements established
        by the Graduate School before beginning their
        studies.
      </p>

      {/* GENERAL ADMISSION REQUIREMENTS */}

      <div className="graduate-admission-block">

        <div className="graduate-block-heading">

          <div className="graduate-block-icon">
            🎓
          </div>

          <div>
            <span>
              GRADUATE ADMISSION
            </span>

            <h3>
              General Admission Requirements
            </h3>
          </div>

        </div>

        <p className="graduate-description">
          The applicant should:
        </p>

        <div className="requirements">

          {admissionRequirements.map(
            (requirement, index) => (
              <div
                className="requirement"
                key={requirement}
              >

                <span>
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <p>{requirement}</p>

              </div>
            )
          )}

        </div>

      </div>

      {/* APPLICATION DOCUMENTS */}

      <div className="graduate-admission-block documents-block">

        <div className="graduate-block-heading">

          <div className="graduate-block-icon red">
            📄
          </div>

          <div>
            <span>
              APPLICATION PROCESS
            </span>

            <h3>
              Application Documents
            </h3>
          </div>

        </div>

        <p className="graduate-description">
          The following items must be submitted on the
          date of application:
        </p>

        <div className="requirements">

          {applicationDocuments.map(
            (document, index) => (
              <div
                className="requirement"
                key={document}
              >

                <span>
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

                <p>{document}</p>

              </div>
            )
          )}

        </div>

      </div>

      {/* IMPORTANT INFORMATION */}

      <div className="graduate-info-box">

        <div className="graduate-info-icon">
          !
        </div>

        <div>

          <h3>
            Important Information
          </h3>

          <p>
            Applicants should ensure that all documents
            submitted for admission are complete and
            properly authenticated where required.
            Candidates must also satisfy the examination
            requirements of the Graduate School.
          </p>

        </div>

      </div>

    </section>
  );
}
export default GraduateSchool