import { NavLink } from "react-router-dom";

export default function Navbar() {
  const links = [
    ["/", "Home"],
    ["/explore", "Explore"],
    ["/map", "Map"],
    ["/favorites", "Favorites"],
    ["/add", "Add Place"],
  ];

  return (
    <header className="navbar">
      <NavLink to="/" className="brand">
        <span className="brand-icon">🍜</span>
        <span>NearBite</span>
      </NavLink>

      <nav>
        {links.map(([to, label]) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}