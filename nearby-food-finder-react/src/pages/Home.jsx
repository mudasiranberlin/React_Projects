import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import FoodCard from '../components/FoodCard';
import MapView from '../components/MapView';

const isApproved = (place) =>
  place.approved === true ||
  place.status === 'approved';

export default function Home({
  places = [],
  favs = [],
  toggle,
}) {
  const [query, setQuery] = useState('');
  const [locationLabel, setLocationLabel] =
    useState('Use my location');

  const approvedPlaces = useMemo(
    () => places.filter(isApproved),
    [places]
  );

  const filteredPlaces = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) {
      return approvedPlaces;
    }

    return approvedPlaces.filter((place) => {
      const searchableText = [
        place.name,
        place.cuisine,
        place.category,
        place.address,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      return searchableText.includes(search);
    });
  }, [approvedPlaces, query]);

  const findLocation = () => {
    if (!navigator.geolocation) {
      setLocationLabel(
        'Location is not supported'
      );
      return;
    }

    setLocationLabel('Finding location…');

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setLocationLabel(
          `${coords.latitude.toFixed(3)}, ${coords.longitude.toFixed(3)}`
        );
      },
      (error) => {
        if (error.code === 1) {
          setLocationLabel(
            'Location permission denied'
          );
        } else {
          setLocationLabel(
            'Unable to get location'
          );
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000,
      }
    );
  };

  const featuredPlaces = filteredPlaces.slice(0, 4);

  return (
    <main className="home">
      <section className="hero">
        <div>
          <small>FOOD NEAR YOU</small>

          <h1>Find food around you.</h1>

          <p>
            Discover nearby restaurants, dishes and
            local food on the map.
          </p>
        </div>

        <button
          type="button"
          onClick={findLocation}
          aria-label="Use my current location"
        >
          📍 {locationLabel}
        </button>
      </section>

      <div className="search">
        <span aria-hidden="true">⌕</span>

        <input
          type="search"
          value={query}
          onChange={(event) =>
            setQuery(event.target.value)
          }
          placeholder="Search food or restaurant"
          aria-label="Search food or restaurant"
        />
      </div>

      <nav
        className="chips"
        aria-label="Food categories"
      >
        <Link to="/explore">🍜 All</Link>
        <Link to="/explore?category=Khmer">
          🇰🇭 Khmer
        </Link>
        <Link to="/explore?category=Fast%20Food">
          🍔 Fast Food
        </Link>
        <Link to="/explore?category=Japanese">
          🍣 Japanese
        </Link>
      </nav>

      <section>
        <div className="heading">
          <div>
            <h2>Nearby food</h2>

            <small>
              {filteredPlaces.length}{' '}
              {filteredPlaces.length === 1
                ? 'approved place'
                : 'approved places'}
            </small>
          </div>

          <Link to="/explore">
            See all
          </Link>
        </div>

        {featuredPlaces.length > 0 ? (
          <div
            className="grid"
            aria-label="Nearby approved food places"
          >
            {featuredPlaces.map((place) => (
              <FoodCard
                key={place.id}
                p={place}
                fav={favs.includes(place.id)}
                toggle={toggle}
              />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No food places found</h2>
            <p>
              Try searching for another restaurant,
              cuisine, or category.
            </p>
          </div>
        )}
      </section>

      <section className="map-section">
        <div className="heading">
          <div>
            <h2>Food map</h2>
            <small>
              Tap a marker to see the place.
            </small>
          </div>
        </div>

        <MapView places={filteredPlaces} />
      </section>
    </main>
  );
}
