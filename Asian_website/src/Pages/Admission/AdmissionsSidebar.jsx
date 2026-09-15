function AdmissionsSidebar({
  activeSection,
  setActiveSection,
  admissionMenu,
}) {
  return (
    <aside className="admission-sidebar">

      <div className="admission-sidebar-title">
        <span>ADMISSIONS</span>

        <h3>Admission Menu</h3>
      </div>

      <nav>
        {admissionMenu.map((item) => (
          <button
            type="button"
            key={item.id}
            className={
              activeSection === item.id
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveSection(item.id)
            }
          >
            <span>›</span>

            {item.title}
          </button>
        ))}
      </nav>

    </aside>
  );
}
export default AdmissionsSidebar