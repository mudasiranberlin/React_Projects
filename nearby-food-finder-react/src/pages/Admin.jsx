export default function Admin({
  places = [],
  approve,
  reject,
  remove,
}) {
  const pendingPlaces = places.filter(
    (place) => place.status === 'pending'
  );

  const approvedCount = places.filter(
    (place) => place.approved || place.status === 'approved'
  ).length;

  const rejectedCount = places.filter(
    (place) => place.status === 'rejected'
  ).length;

  return (
    <main className="admin">
      <header className="title">
        <small>ADMIN</small>
        <h1>Approve food places</h1>
        <p>
          Review submissions before they become public.
        </p>
      </header>

      <section className="stats" aria-label="Submission statistics">
        <div>
          <b>{pendingPlaces.length}</b>
          <small>Pending</small>
        </div>

        <div>
          <b>{approvedCount}</b>
          <small>Approved</small>
        </div>

        <div>
          <b>{rejectedCount}</b>
          <small>Rejected</small>
        </div>
      </section>

      {pendingPlaces.length === 0 ? (
        <section className="empty">
          <h2>No pending requests</h2>
          <p>New submissions will appear here.</p>
        </section>
      ) : (
        <section className="adminlist">
          {pendingPlaces.map((place) => (
            <article className="admincard" key={place.id}>
              <img
                src={
                  place.images?.[0] ||
                  place.coverImage ||
                  '/placeholder-food.jpg'
                }
                alt={place.name || 'Food place'}
                loading="lazy"
              />

              <div className="admincard-body">
                <span className="pending">PENDING</span>

                <h3>{place.name || 'Unnamed place'}</h3>

                <p>
                  {place.cuisine || 'Cuisine not specified'}
                  {place.price && ` · ${place.price}`}
                </p>

                {place.address && (
                  <p>📍 {place.address}</p>
                )}

                {place.description && (
                  <p>{place.description}</p>
                )}

                <div className="actions">
                  <button
                    type="button"
                    className="approve"
                    onClick={() => approve(place.id)}
                  >
                    ✓ Approve
                  </button>

                  <button
                    type="button"
                    className="reject"
                    onClick={() => reject(place.id)}
                  >
                    × Reject
                  </button>

                  <button
                    type="button"
                    className="remove"
                    onClick={() => remove(place.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}
