function PageHero({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      <section className="reactor-hero">
        <div className="reactor-hero-overlay">

          <div className="container">

            {/* LABEL + MENU BUTTON SAME LINE */}
            <div className="reactor-hero-top">

              <button
                className="about-menu-button"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-label="Toggle About menu"
              >
                {sidebarOpen ? "✕" : "☰"}
              </button>

              <span className="reactor-hero-label">
                ABOUT OUR INSTITUTION
              </span>

            </div>

            <h1>About Us</h1>

            <p>
              Discover our leadership, academic vision,
              institutional structure, facilities,
              international activities and university
              community.
            </p>

          </div>

        </div>
      </section>

      <div className="reactor-breadcrumb">
        <div className="container">

          <Link to="/">Home</Link>

          <span>/</span>

          <strong>About Us</strong>

        </div>
      </div>
    </>
  );
}
export default PageHero