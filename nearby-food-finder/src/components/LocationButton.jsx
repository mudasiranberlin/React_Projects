export default function LocationButton({ location, onRequest }) {
  return (
    <button className="location-btn" onClick={onRequest}>
      {location ? "📍 Location found" : "📍 Use my location"}
    </button>
  );
}