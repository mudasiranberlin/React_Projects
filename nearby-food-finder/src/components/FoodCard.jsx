import { Link } from "react-router-dom";

export default function FoodCard({ place, favorite, onFavorite }) {
  return (
    <article className="food-card">
      <div className="food-image-wrap">
        <img src={place.image} alt={place.name} className="food-image" />
        <button
          className={`heart ${favorite ? "saved" : ""}`}
          onClick={() => onFavorite(place.id)}
          aria-label="Toggle favorite"
        >
          {favorite ? "♥" : "♡"}
        </button>
      </div>

      <div className="food-card-body">
        <div className="food-title-row">
          <h3>{place.name}</h3>
          <span className={place.open ? "open" : "closed"}>
            {place.open ? "Open" : "Closed"}
          </span>
        </div>

        <p className="muted">{place.cuisine} · {place.category}</p>

        <div className="meta-row">
          <span>⭐ {place.rating}</span>
          <span>{place.price}</span>
          <span>📍 {place.distance} km</span>
        </div>

        <p className="description">{place.description}</p>

        <div className="tags">
          {place.tags?.map((tag) => <span key={tag}>{tag}</span>)}
        </div>

        <Link className="details-btn" to={`/food/${place.id}`}>
          View details
        </Link>
      </div>
    </article>
  );
}