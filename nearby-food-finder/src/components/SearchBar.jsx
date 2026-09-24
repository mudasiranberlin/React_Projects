export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-box">
      <span>🔎</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search food, restaurant, cuisine..."
      />
      {value && <button onClick={() => onChange("")}>×</button>}
    </div>
  );
}