import RequirementList from "./RequirementList";

function ForeignStudents() {
  const requirements = [
    "Original High School Diploma with English translation, if the original document is not written in English.",
    "Original Alien Certificate of Registration (ACR) issued by the Ministry of Foreign Affairs or passport.",
    "Personal History Statement.",
    "Completed application form and admission fee of USD 15.00.",
    "Six (6) copies of 4cm × 6cm photographs.",
    "Transcript of records with English translation.",
    "A passing mark in the English language test. In case of poor English comprehension, the student may be required to enroll in an English language program.",
    "Medical health certificate with standard-size chest X-ray.",
  ];

  return (
    <section
      id="foreign-students"
      className="admission-content-section"
    >

      <span className="content-label">
        INTERNATIONAL ADMISSION
      </span>

      <h2>For Foreign Students</h2>

      <p>
        International applicants are welcome to apply to
        the Asian Institute of Cambodia. Foreign students
        should prepare the following documents.
      </p>
      

      <RequirementList
        requirements={requirements}
      />

      <div className="international-note">

        <span>🌐</span>

        <div>

          <h3>English Language Requirement</h3>

          <p>
            Applicants are expected to demonstrate an
            appropriate level of English language
            comprehension. Students who require additional
            English language support may be asked to take
            special English classes.
          </p>

        </div>

      </div>

    </section>
  );
}
export default ForeignStudents