import { useEffect, useState } from 'react';
import {
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';

import Home from './pages/Home';
import Explore from './pages/Explore';
import Details from './pages/Details';
import Favorites from './pages/Favorites';
import AddPlace from './pages/AddPlace';
import Admin from './pages/Admin';
import { seedPlaces } from './data/foodData';

const PLACES_KEY = 'nearBitePlaces';
const FAVS_KEY = 'nearBiteFavs';

const isApproved = (place) =>
  place.approved === true ||
  place.status === 'approved';

const loadStorage = (key, fallback) => {
  try {
    const stored = localStorage.getItem(key);

    if (!stored) {
      return fallback;
    }

    const parsed = JSON.parse(stored);

    return parsed ?? fallback;
  } catch {
    return fallback;
  }
};

export default function App() {
  const [places, setPlaces] = useState(() =>
    loadStorage(PLACES_KEY, seedPlaces)
  );

  const [favs, setFavs] = useState(() =>
    loadStorage(FAVS_KEY, [])
  );

  useEffect(() => {
    try {
      localStorage.setItem(
        PLACES_KEY,
        JSON.stringify(places)
      );
    } catch (error) {
      console.error(
        'Unable to save places:',
        error
      );
    }
  }, [places]);

  useEffect(() => {
    try {
      localStorage.setItem(
        FAVS_KEY,
        JSON.stringify(favs)
      );
    } catch (error) {
      console.error(
        'Unable to save favorites:',
        error
      );
    }
  }, [favs]);

  const addPlace = (place) => {
    const newPlace = {
      ...place,
      id: crypto.randomUUID(),
      approved: false,
      status: 'pending',
    };

    setPlaces((current) => [
      newPlace,
      ...current,
    ]);
  };

  const approvePlace = (id) => {
    setPlaces((current) =>
      current.map((place) =>
        place.id === id
          ? {
              ...place,
              approved: true,
              status: 'approved',
            }
          : place
      )
    );
  };

  const rejectPlace = (id) => {
    setPlaces((current) =>
      current.map((place) =>
        place.id === id
          ? {
              ...place,
              approved: false,
              status: 'rejected',
            }
          : place
      )
    );
  };

  const removePlace = (id) => {
    setPlaces((current) =>
      current.filter(
        (place) => place.id !== id
      )
    );

    // Also remove deleted places from favorites.
    setFavs((current) =>
      current.filter(
        (favoriteId) => favoriteId !== id
      )
    );
  };

  const toggleFavorite = (id) => {
    setFavs((current) =>
      current.includes(id)
        ? current.filter(
            (favoriteId) => favoriteId !== id
          )
        : [...current, id]
    );
  };

  const publicPlaces = places.filter(isApproved);

  return (
    <div className="app">
      <header>
        <NavLink
          className="brand"
          to="/"
          aria-label="NearBite home"
        >
          🍜 NearBite
        </NavLink>

        <span className="desktop-admin">
          Admin review
        </span>
      </header>

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                places={publicPlaces}
                favs={favs}
                toggle={toggleFavorite}
              />
            }
          />

          <Route
            path="/explore"
            element={
              <Explore
                places={publicPlaces}
                favs={favs}
                toggle={toggleFavorite}
              />
            }
          />

          <Route
            path="/food/:id"
            element={
              <Details
                places={publicPlaces}
                favs={favs}
                toggle={toggleFavorite}
              />
            }
          />

          <Route
            path="/favorites"
            element={
              <Favorites
                places={publicPlaces}
                favs={favs}
                toggle={toggleFavorite}
              />
            }
          />

          <Route
            path="/add"
            element={
              <AddPlace onAdd={addPlace} />
            }
          />

          <Route
            path="/admin"
            element={
              <Admin
                places={places}
                approve={approvePlace}
                reject={rejectPlace}
                remove={removePlace}
              />
            }
          />

          <Route
            path="*"
            element={
              <div className="empty">
                <h2>Page not found</h2>
                <NavLink to="/">
                  Go home
                </NavLink>
              </div>
            }
          />
        </Routes>
      </main>

      <nav
        className="bottom-nav"
        aria-label="Main navigation"
      >
        <NavLink to="/" end>
          <span aria-hidden="true">⌂</span>
          <small>Home</small>
        </NavLink>

        <NavLink to="/explore">
          <span aria-hidden="true">🗺</span>
          <small>Map</small>
        </NavLink>

        <NavLink
          className="plus"
          to="/add"
          aria-label="Add food place"
        >
          <span aria-hidden="true">＋</span>
          <small>Add</small>
        </NavLink>

        <NavLink to="/favorites">
          <span aria-hidden="true">♡</span>
          <small>Saved</small>
        </NavLink>

        <NavLink to="/admin">
          <span aria-hidden="true">✓</span>
          <small>Admin</small>
        </NavLink>
      </nav>
    </div>
  );
}
