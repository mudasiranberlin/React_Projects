function Breadcrumb({ activeSection }) {
  const title =
    activeSection === "mou"
      ? "MOU"
      : activeSection === "aupf"
      ? "AUPF"
      : "Governing Council";

  return (
    <div className="collaboration-breadcrumb">
      <div className="container">
        <a href="/">Home</a>
        <span>/</span>
        <span>Collaborations</span>
        <span>/</span>
        <strong>{title}</strong>
      </div>
    </div>
  );
}
export default Breadcrumb