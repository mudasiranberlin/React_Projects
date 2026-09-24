import { Link, useParams } from "react-router-dom";

export default function FoodDetails({ places, favorites, toggleFavorite, location }) {
  const { id } = useParams();
  const place = places.find((item) => item.id === id);

  if (!place) {
    return (
      <main className="container empty-state">
        <h2>Place not found</h2>
        <Link to="/explore">Back to explore</Link>
      </main>
    );
  }

  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}`;

  return (
    <main className="container details-page">
      <Link to="/explore" className="back-link">← Back to explore</Link>

      <div className="details-grid">
        <div>
          <img src={place.image} alt={place.name} className="details-image" />
        </div>

        <div className="details-content">
          <div className="food-title-row">
            <span className="eyebrow">{place.category}</span>
            <button
              className={`heart large ${favorites.includes(place.id) ? "saved" : ""}`}
              onClick={() => toggleFavorite(place.id)}
            >
              {favorites.includes(place.id) ? "♥" : "♡"}
            </button>
          </div>

          <h1>{place.name}</h1>
          <p className="big-rating">⭐ {place.rating} · {place.cuisine} · {place.price}</p>
          <p>{place.description}</p>

          <div className="detail-list">
            <div><strong>📍 Address</strong><span>{place.address}</span></div>
            <div><strong>🕒 Hours</strong><span>{place.hours}</span></div>
            <div><strong>📞 Phone</strong><span>{place.phone}</span></div>
          </div>

          <div className="details-actions">
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="primary-btn">
              Get directions
            </a>
            <a href={`tel:${place.phone}`} className="secondary-btn">Call</a>
            <a href={place.website} target="_blank" rel="noreferrer" className="secondary-btn">
              Website
            </a>
          </div>

          {location && (
            <p className="muted small">
              Your location is enabled. A production app can calculate exact
              walking/driving distance from your position.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}