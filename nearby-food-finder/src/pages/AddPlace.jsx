import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initial = {
  name: "",
  cuisine: "",
  category: "Restaurant",
  price: "$$",
  address: "",
  description: "",
  phone: "",
  hours: "",
  website: "",
  image: "",
  lat: "11.5564",
  lng: "104.9282",
};

export default function AddPlace({ onAddPlace }) {
  const [form, setForm] = useState(initial);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const update = (key, value) =>
    setForm((current) => ({ ...current, [key]: value }));

  const submit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.description.trim()) {
      setMessage("Please enter at least a name and description.");
      return;
    }

    onAddPlace({
      ...form,
      lat: Number(form.lat) || 11.5564,
      lng: Number(form.lng) || 104.9282,
      rating: 0,
      distance: 0,
      open: true,
      tags: ["User added"],
      image:
        form.image ||
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    });

    navigate("/explore");
  };

  return (
    <main className="container form-page">
      <div className="page-heading">
        <div>
          <span className="eyebrow">CONTRIBUTE</span>
          <h1>Add a food place</h1>
          <p>Add your own restaurant, café, food stall or favorite place.</p>
        </div>
      </div>

      <form className="place-form" onSubmit={submit}>
        <div className="form-section">
          <h2>Basic information</h2>
          <div className="form-grid">
            <label>
              Place name *
              <input value={form.name} onChange={(e) => update("name", e.target.value)} required />
            </label>
            <label>
              Cuisine
              <input placeholder="e.g. Cambodian, Italian" value={form.cuisine} onChange={(e) => update("cuisine", e.target.value)} />
            </label>
            <label>
              Category
              <select value={form.category} onChange={(e) => update("category", e.target.value)}>
                <option>Restaurant</option>
                <option>Cafe</option>
                <option>Fast Food</option>
                <option>Street Food</option>
                <option>Bakery</option>
                <option>Bar</option>
              </select>
            </label>
            <label>
              Price
              <select value={form.price} onChange={(e) => update("price", e.target.value)}>
                <option>$</option><option>$$</option><option>$$$</option>
              </select>
            </label>
          </div>
        </div>

        <div className="form-section">
          <h2>Details</h2>
          <label>
            Description *
            <textarea rows="5" value={form.description} onChange={(e) => update("description", e.target.value)} required />
          </label>
          <div className="form-grid">
            <label>Phone<input value={form.phone} onChange={(e) => update("phone", e.target.value)} /></label>
            <label>Opening hours<input placeholder="9:00 AM – 10:00 PM" value={form.hours} onChange={(e) => update("hours", e.target.value)} /></label>
            <label>Website<input type="url" value={form.website} onChange={(e) => update("website", e.target.value)} /></label>
            <label>Image URL<input type="url" value={form.image} onChange={(e) => update("image", e.target.value)} /></label>
          </div>
        </div>

        <div className="form-section">
          <h2>Map location</h2>
          <p className="muted">Enter latitude and longitude. Later this can be replaced by clicking a point on the map or searching an address.</p>
          <div className="form-grid">
            <label>Latitude<input value={form.lat} onChange={(e) => update("lat", e.target.value)} /></label>
            <label>Longitude<input value={form.lng} onChange={(e) => update("lng", e.target.value)} /></label>
          </div>
        </div>

        {message && <div className="form-message">{message}</div>}

        <button className="primary-btn submit-btn" type="submit">Add place</button>
      </form>
    </main>
  );
}