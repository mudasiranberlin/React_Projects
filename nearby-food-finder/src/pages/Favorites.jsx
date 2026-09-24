import { Link } from "react-router-dom";
import FoodCard from "../components/FoodCard";

export default function Favorites({ places, favorites, toggleFavorite }) {
  const saved = places.filter((place) => favorites.includes(place.id));

  return (
    <main className="container">
      <div className="page-heading">
        <div>
          <span className="eyebrow">YOUR LIST</span>
          <h1>Favorites</h1>
          <p>Places you want to remember.</p>
        </div>
      </div>

      {saved.length ? (
        <div className="food-grid">
          {saved.map((place) => (
            <FoodCard
              key={place.id}
              place={place}
              favorite
              onFavorite={toggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div>♡</div>
          <h3>No favorites yet</h3>
          <p>Save a restaurant or food place and it will appear here.</p>
          <Link className="primary-btn" to="/explore">Explore food</Link>
        </div>
      )}
    </main>
  );
}