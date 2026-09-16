function PageHero({
  label = "ABOUT OUR INSTITUTION",
  title = "About Us",
  description = "",
}) {
  return (
    <>
      <section className="university-page-hero">
        <div className="university-page-hero-overlay">
          <div className="container">
            <span className="page-hero-label">{label}</span>

            <h1>{title}</h1>

            {description && <p>{description}</p>}
          </div>
        </div>
      </section>

      <div className="page-breadcrumb">
        <div className="container">
          <a href="/">Home</a>
          <span>/</span>
          <strong>{title}</strong>
        </div>
      </div>
    </>
  );
}

export default PageHero;
