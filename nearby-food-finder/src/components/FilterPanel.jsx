export default function FilterPanel({
  category,
  setCategory,
  price,
  setPrice,
  maxDistance,
  setMaxDistance,
}) {
  return (
    <div className="filters">
      <label>
        Food type
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All</option>
          <option value="Khmer">Khmer</option>
          <option value="Asian">Asian</option>
          <option value="Italian">Italian</option>
          <option value="Healthy">Healthy</option>
          <option value="Cafe">Cafe</option>
          <option value="Pizza">Pizza</option>
          <option value="Noodles">Noodles</option>
        </select>
      </label>

      <label>
        Price
        <select value={price} onChange={(e) => setPrice(e.target.value)}>
          <option value="All">All prices</option>
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
        </select>
      </label>

      <label>
        Distance: {maxDistance} km
        <input
          type="range"
          min="1"
          max="20"
          step="1"
          value={maxDistance}
          onChange={(e) => setMaxDistance(Number(e.target.value))}
        />
      </label>
    </div>
  );
}