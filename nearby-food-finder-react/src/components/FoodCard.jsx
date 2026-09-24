import { Link } from 'react-router-dom';

export default function FoodCard({ p, fav, toggle }) {
  const {
    id,
    name = 'Unnamed food',
    images = [],
    rating,
    cuisine,
    price,
    distance,
    address,
  } = p;

  const image = images?.[0] || '/placeholder-food.jpg';

  return (
    <article className="card">
      <Link to={`/food/${id}`} className="card-image">
        <img
          src={image}
          alt={name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = '/placeholder-food.jpg';
          }}
        />
      </Link>

      <button
        type="button"
        className={`heart ${fav ? 'on' : ''}`}
        onClick={() => toggle(id)}
        aria-label={fav ? `Remove ${name} from favorites` : `Add ${name} to favorites`}
        aria-pressed={fav}
      >
        {fav ? '♥' : '♡'}
      </button>

      <div className="cardbody">
        <div className="line">
          <b>{name}</b>
          <span>★ {rating ?? 'New'}</span>
        </div>

        <small>
          {cuisine || 'Cuisine'} · {price || '$$'}
          {distance != null && ` · ${distance} km`}
        </small>

        {address && <p>📍 {address}</p>}
      </div>
    </article>
  );
}
