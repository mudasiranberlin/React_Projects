import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import { Link } from "react-router-dom";

const userIcon = L.divIcon({
  className: "custom-marker",
  html: '<div class="user-marker">●</div>',
  iconSize: [30, 30],
  iconAnchor: [15, 15],
});

const foodIcon = L.divIcon({
  className: "custom-marker",
  html: '<div class="food-marker">🍴</div>',
  iconSize: [38, 38],
  iconAnchor: [19, 19],
});

function Recenter({ location }) {
  const map = useMap();

  useEffect(() => {
    if (location) map.setView([location.lat, location.lng], 14);
  }, [location, map]);

  return null;
}

export default function MapView({ places, location }) {
  const center = location
    ? [location.lat, location.lng]
    : [11.5564, 104.9282];

  return (
    <div className="map-wrapper">
      <MapContainer center={center} zoom={13} scrollWheelZoom className="map">
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Recenter location={location} />

        {location && (
          <Marker position={[location.lat, location.lng]} icon={userIcon}>
            <Popup>You are here</Popup>
          </Marker>
        )}

        {places.map((place) => (
          <Marker
            key={place.id}
            position={[place.lat, place.lng]}
            icon={foodIcon}
          >
            <Popup>
              <strong>{place.name}</strong>
              <br />
              {place.cuisine} · {place.price}
              <br />
              ⭐ {place.rating}
              <br />
              <Link to={`/food/${place.id}`}>View details</Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}