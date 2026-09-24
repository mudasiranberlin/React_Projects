import { useParams, Link } from 'react-router-dom';

const PLACEHOLDER_IMAGE = '/placeholder-food.jpg';

export default function Details({
  places = [],
  favs = [],
  toggle,
}) {
  const { id } = useParams();

  const place = places.find(
    (item) => String(item.id) === String(id)
  );

  if (!place) {
    return (
      <main className="empty">
        <h2>Place not found</h2>
        <p>
          This food place may have been removed or is no longer
          available.
        </p>
        <Link to="/">Go home</Link>
      </main>
    );
  }

  const images = place.images?.length
    ? place.images
    : [place.coverImage || PLACEHOLDER_IMAGE];

  const menu = place.menu || [];
  const isFavorite = favs.includes(place.id);

  return (
    <main className="details">
      <Link className="back" to="/">
        ← Back
      </Link>

      <section className="gallery" aria-label={`${place.name} photos`}>
        {images.map((image, index) => (
          <img
            key={`${image}-${index}`}
            src={image}
            alt={`${place.name} photo ${index + 1}`}
            loading={index === 0 ? 'eager' : 'lazy'}
            onError={(event) => {
              event.currentTarget.src = PLACEHOLDER_IMAGE;
            }}
          />
        ))}
      </section>

      <header className="detailhead">
        <div>
          {place.category && (
            <small>{place.category}</small>
          )}

          <h1>{place.name}</h1>

          <p>
            {place.cuisine || 'Cuisine not specified'}
            {place.price && ` · ${place.price}`}
            {place.distance != null &&
              ` · ${place.distance} km`}
          </p>
        </div>

        <button
          type="button"
          className={isFavorite ? 'saved' : ''}
          onClick={() => toggle(place.id)}
          aria-pressed={isFavorite}
          aria-label={
            isFavorite
              ? `Remove ${place.name} from saved places`
              : `Save ${place.name}`
          }
        >
          {isFavorite ? '♥ Saved' : '♡ Save'}
        </button>
      </header>

      {place.description && (
        <p className="description">
          {place.description}
        </p>
      )}

      {place.address && (
        <p className="address">
          📍 {place.address}
        </p>
      )}

      <section className="menu-section">
        <h2>Menu</h2>

        {menu.length === 0 ? (
          <div className="empty">
            <p>No menu items have been added yet.</p>
          </div>
        ) : (
          <div className="menu">
            {menu.map((item) => (
              <article className="menu-item" key={item.id}>
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name || 'Food item'}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none';
                    }}
                  />
                )}

                <div>
                  <h3>
                    {item.name || 'Unnamed food'}
                  </h3>

                  {item.description && (
                    <p>{item.description}</p>
                  )}

                  {item.price && (
                    <b>{item.price}</b>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
