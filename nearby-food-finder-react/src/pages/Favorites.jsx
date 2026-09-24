import { useMemo } from 'react';

import FoodCard from '../components/FoodCard';

export default function Favorites({
  places = [],
  favs = [],
  toggle,
}) {
  const savedPlaces = useMemo(
    () =>
      places.filter(
        (place) =>
          favs.includes(place.id) &&
          (place.approved === true ||
            place.status === 'approved')
      ),
    [places, favs]
  );

  return (
    <main className="favorites">
      <header className="title">
        <small>SAVED</small>
        <h1>Favorites</h1>
        <p>
          Your saved food places.
        </p>
      </header>

      {savedPlaces.length > 0 ? (
        <section
          className="grid"
          aria-label="Saved food places"
        >
          {savedPlaces.map((place) => (
            <FoodCard
              key={place.id}
              p={place}
              fav={true}
              toggle={toggle}
            />
          ))}
        </section>
      ) : (
        <section className="empty">
          <div
            className="empty-icon"
            aria-hidden="true"
          >
            ♡
          </div>

          <h2>No saved places</h2>

          <p>
            Tap the heart on a food place to save it
            here.
          </p>
        </section>
      )}
    </main>
  );
}
