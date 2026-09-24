import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import FoodCard from '../components/FoodCard';
import MapView from '../components/MapView';

export default function Explore({
  places = [],
  favs = [],
  toggle,
}) {
  const [params, setParams] = useSearchParams();

  const initialCategory = params.get('category') || 'All';
  const [category, setCategory] = useState(initialCategory);

  // Keep the selected category in sync with the URL.
  useEffect(() => {
    const urlCategory = params.get('category') || 'All';

    if (urlCategory !== category) {
      setCategory(urlCategory);
    }
  }, [params, category]);

  // Only approved places should appear publicly.
  const approvedPlaces = useMemo(
    () =>
      places.filter(
        (place) =>
          place.approved === true ||
          place.status === 'approved'
      ),
    [places]
  );

  const categories = useMemo(() => {
    const values = approvedPlaces
      .map((place) => place.category?.trim())
      .filter(Boolean);

    return ['All', ...new Set(values)];
  }, [approvedPlaces]);

  const visiblePlaces = useMemo(() => {
    if (category === 'All') {
      return approvedPlaces;
    }

    return approvedPlaces.filter(
      (place) => place.category === category
    );
  }, [approvedPlaces, category]);

  const handleCategoryChange = (value) => {
    setCategory(value);

    if (value === 'All') {
      setParams({});
    } else {
      setParams({ category: value });
    }
  };

  // If a category disappears because its places were removed,
  // fall back to All.
  useEffect(() => {
    if (
      category !== 'All' &&
      !categories.includes(category)
    ) {
      handleCategoryChange('All');
    }
  }, [category, categories]);

  return (
    <main className="explore">
      <header className="title">
        <small>EXPLORE</small>
        <h1>Nearby food</h1>
        <p>
          Only approved places are visible here.
        </p>
      </header>

      <nav
        className="chips"
        aria-label="Food categories"
      >
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            className={
              category === item ? 'selected' : ''
            }
            onClick={() =>
              handleCategoryChange(item)
            }
            aria-pressed={category === item}
          >
            {item}
          </button>
        ))}
      </nav>

      {visiblePlaces.length === 0 ? (
        <section className="empty">
          <h2>No food places found</h2>
          <p>
            There are no approved places in this category
            yet.
          </p>
        </section>
      ) : (
        <>
          <section
            className="grid"
            aria-label="Food places"
          >
            {visiblePlaces.map((place) => (
              <FoodCard
                key={place.id}
                p={place}
                fav={favs.includes(place.id)}
                toggle={toggle}
              />
            ))}
          </section>

          <section className="map-section">
            <div className="heading">
              <h2>Map</h2>
              <span>
                {visiblePlaces.length}{' '}
                {visiblePlaces.length === 1
                  ? 'place'
                  : 'places'}
              </span>
            </div>

            <MapView places={visiblePlaces} />
          </section>
        </>
      )}
    </main>
  );
}
