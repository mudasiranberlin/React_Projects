function Sidebar({
  activeSection,
  setActiveSection,
  collaborationMenu
}) {
  return (
    <aside className="collaboration-sidebar">

      <div className="collaboration-sidebar-heading">
        <span>COLLABORATIONS</span>
        <h3>AUPF</h3>
      </div>

      <nav>
        {collaborationMenu.map((item) => (
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
export default Sidebar