import RequirementList from "./RequirementList";

function UnderGraduate() {
  const requirements = [
    "Original copy of BACC II (G12 National Examination Certificate).",
    "Four (4) copies of 4cm × 6cm photographs.",
    "Completed Application Form and Registration Fee.",
    "Entrance Test.",
    "High School Transcript.",
  ];

  return (
    <section
      id="local-students"
      className="admission-content-section"
    >

      <span className="content-label">
        UNDERGRADUATE ADMISSION
      </span>

      <h2>Under Graduate</h2>

      <p>
        The Asian Institute of Cambodia welcomes
        undergraduate students who have successfully
        completed their secondary education and meet the
        university's admission requirements.
      </p>

      <p>
        Local applicants should prepare the following
        documents and complete the required admission
        procedures.
      </p>

      <RequirementList
        requirements={requirements}
      />

    </section>
  );
}
export default UnderGraduate