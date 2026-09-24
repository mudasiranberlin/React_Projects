import { Link } from "react-router-dom";
import MapView from "../components/MapView";
import FoodCard from "../components/FoodCard";
import LocationButton from "../components/LocationButton";

export default function Home({
  places,
  location,
  requestLocation,
  favorites,
  toggleFavorite,
}) {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">LOCAL FOOD DISCOVERY</span>
          <h1>Find something delicious <span>near you.</span></h1>
          <p>
            Discover restaurants, cafés and local food around your current
            location. Explore them on the map or browse the list.
          </p>

          <div className="hero-actions">
            <LocationButton location={location} onRequest={requestLocation} />
            <Link to="/explore" className="secondary-btn">Explore food</Link>
          </div>
        </div>

        <div className="hero-map">
          <MapView places={places} location={location} />
        </div>
      </section>

      <main className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">DISCOVER</span>
            <h2>Popular nearby places</h2>
          </div>
          <Link to="/explore">View all →</Link>
        </div>

        <div className="food-grid">
          {places.slice(0, 4).map((place) => (
            <FoodCard
              key={place.id}
              place={place}
              favorite={favorites.includes(place.id)}
              onFavorite={toggleFavorite}
            />
          ))}
        </div>
      </main>
    </>
  );
}