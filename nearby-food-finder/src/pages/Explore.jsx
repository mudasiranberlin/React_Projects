import { useMemo, useState } from "react";
import MapView from "../components/MapView";
import FoodCard from "../components/FoodCard";
import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import LocationButton from "../components/LocationButton";

export default function Explore({
  places,
  location,
  requestLocation,
  favorites,
  toggleFavorite,
  mapOnly = false,
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState("All");
  const [maxDistance, setMaxDistance] = useState(10);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return places.filter((place) => {
      const matchesQuery =
        !q ||
        place.name.toLowerCase().includes(q) ||
        place.cuisine.toLowerCase().includes(q) ||
        place.category.toLowerCase().includes(q) ||
        place.tags?.some((tag) => tag.toLowerCase().includes(q));

      const matchesCategory =
        category === "All" ||
        place.category === category ||
        place.cuisine === category;

      const matchesPrice = price === "All" || place.price === price;
      const matchesDistance = place.distance <= maxDistance;

      return matchesQuery && matchesCategory && matchesPrice && matchesDistance;
    });
  }, [places, query, category, price, maxDistance]);

  if (mapOnly) {
    return (
      <main className="map-page">
        <div className="map-page-header">
          <div>
            <span className="eyebrow">MAP</span>
            <h1>Food around you</h1>
          </div>
          <LocationButton location={location} onRequest={requestLocation} />
        </div>
        <MapView places={filtered} location={location} />
      </main>
    );
  }

  return (
    <main className="container explore-page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">EXPLORE</span>
          <h1>Find food nearby</h1>
          <p>Search, filter and explore places on the map.</p>
        </div>
        <LocationButton location={location} onRequest={requestLocation} />
      </div>

      <div className="explore-layout">
        <aside>
          <SearchBar value={query} onChange={setQuery} />
          <FilterPanel
            category={category}
            setCategory={setCategory}
            price={price}
            setPrice={setPrice}
            maxDistance={maxDistance}
            setMaxDistance={setMaxDistance}
          />
        </aside>

        <section>
          <div className="results-map">
            <MapView places={filtered} location={location} />
          </div>
          <p className="result-count">{filtered.length} places found</p>
          <div className="food-grid">
            {filtered.map((place) => (
              <FoodCard
                key={place.id}
                place={place}
                favorite={favorites.includes(place.id)}
                onFavorite={toggleFavorite}
              />
            ))}
          </div>
          {!filtered.length && (
            <div className="empty-state">
              <div>🍽️</div>
              <h3>No places found</h3>
              <p>Try another search or increase the distance.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}