function AdmissionSection() {
  return (
    <section
      id="admission"
      className="admission-content-section"
    >

      <span className="content-label">
        APPLICATION PROCESS
      </span>

      <h2>Admission</h2>

      <p>
        Applicants are expected to complete the required
        admission procedures and submit all necessary
        documents within the designated admission period.
      </p>

      <div className="process-grid">

        <div className="process-card">
          <div className="process-number">
            01
          </div>

          <h3>Prepare Documents</h3>

          <p>
            Prepare all academic records, identification
            documents, photographs and other required
            materials.
          </p>
        </div>

        <div className="process-card">
          <div className="process-number">
            02
          </div>

          <h3>Submit Application</h3>

          <p>
            Complete the application form and submit it
            together with the required admission fee and
            supporting documents.
          </p>
        </div>

        <div className="process-card">
          <div className="process-number">
            03
          </div>

          <h3>Entrance Test</h3>

          <p>
            Applicants may be required to take an entrance
            examination or meet other academic requirements.
          </p>
        </div>

        <div className="process-card">
          <div className="process-number">
            04
          </div>

          <h3>Enrolment</h3>

          <p>
            Successful applicants complete the final
            enrolment process and prepare to begin their
            studies.
          </p>
        </div>

      </div>

    </section>
  );
}
export default AdmissionSection