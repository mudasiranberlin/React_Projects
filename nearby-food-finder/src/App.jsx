import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import FoodDetails from "./pages/FoodDetails";
import Favorites from "./pages/Favorites";
import AddPlace from "./pages/AddPlace";
import { initialPlaces } from "./data/foodData";
import Admin from "./components/Admin";

export default function App() {
  const [places, setPlaces] = useState(() => {
    const saved = localStorage.getItem("nearBitePlaces");
    return saved ? JSON.parse(saved) : initialPlaces;
  });

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("nearBiteFavorites");
    return saved ? JSON.parse(saved) : [];
  });

  const [location, setLocation] = useState(null);
  const [locationError, setLocationError] = useState("");

  useEffect(() => {
    localStorage.setItem("nearBitePlaces", JSON.stringify(places));
  }, [places]);

  useEffect(() => {
    localStorage.setItem("nearBiteFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setLocationError("Your browser does not support location.");
      return;
    }

    setLocationError("");
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => setLocation({
        lat: coords.latitude,
        lng: coords.longitude,
      }),
      (error) => {
        setLocationError(
          error.code === 1
            ? "Location permission was denied. You can still explore the demo places."
            : "Could not get your location. Please try again."
        );
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  };

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const addPlace = (place) => {
    setPlaces((current) => [
      { ...place, id: crypto.randomUUID(), userAdded: true },
      ...current,
    ]);
  };

  return (
    <div className="app">
      <Navbar />
      {locationError && (
        <div className="location-banner">
          <span>{locationError}</span>
          <button onClick={requestLocation}>Try again</button>
        </div>
      )}

      <Routes>
        <Route
          path="/"
          element={
            <Home
              places={places}
              location={location}
              requestLocation={requestLocation}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />
        <Route
          path="/explore"
          element={
            <Explore
              places={places}
              location={location}
              requestLocation={requestLocation}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />
        <Route
          path="/map"
          element={
            <Explore
              places={places}
              location={location}
              requestLocation={requestLocation}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              mapOnly
            />
          }
        />
        <Route
          path="/food/:id"
          element={
            <FoodDetails
              places={places}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              location={location}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites
              places={places}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />
        <Route path="/add" element={<AddPlace onAddPlace={addPlace} />} />

         <Route path="/mudi" element={<Admin />} />
      </Routes>

      <footer className="footer">
        <div>
          <strong>NearBite</strong>
          <span>Find food around you.</span>
        </div>
        <small>Demo app — connect a real places API for production data.</small>
      </footer>
    </div>
  );
}