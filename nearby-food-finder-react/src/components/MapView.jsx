import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import { Link } from 'react-router-dom';

const markerIcon = new L.Icon({
  iconUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const DEFAULT_CENTER = [11.5564, 104.9282];

export default function MapView({
  places = [],
  center = DEFAULT_CENTER,
}) {
  const validPlaces = places.filter(
    (place) =>
      Number.isFinite(Number(place.lat)) &&
      Number.isFinite(Number(place.lng))
  );

  return (
    <div className="map">
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {validPlaces.map((place) => {
          const position = [
            Number(place.lat),
            Number(place.lng),
          ];

          return (
            <Marker
              key={place.id}
              position={position}
              icon={markerIcon}
            >
              <Popup>
                <div className="map-popup">
                  <strong>{place.name || 'Unnamed place'}</strong>

                  {place.cuisine && (
                    <div>{place.cuisine}</div>
                  )}

                  <Link to={`/food/${place.id}`}>
                    View food
                  </Link>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
