# NearBite — React Nearby Food Finder

A responsive React + Vite food discovery website.

## Features

- Browser geolocation permission
- User location marker
- OpenStreetMap + Leaflet map
- Nearby food/restaurant cards
- Search and filters
- Distance, rating, price and open/closed information
- Restaurant/food details
- Favorites saved in localStorage
- Add your own food place
- Responsive mobile and desktop UI

## Run

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Important: demo data

The current project uses local mock restaurant data in:

`src/data/foodData.js`

For a real application, connect a backend or places provider.

## Real location + nearby food

The browser Geolocation API gives the user's latitude and longitude.

For real nearby restaurants, your backend can accept:

`GET /api/places/nearby?lat=11.5564&lng=104.9282&radius=5000`

The backend should query your database or a places provider and return restaurant objects in the same shape as `foodData.js`.

Do not put private API keys directly into React.

## Map providers

This version uses OpenStreetMap tiles through Leaflet.

For production, consider:
- OpenStreetMap tiles with an appropriate tile provider
- Mapbox
- Google Maps

If you use a commercial provider, put the provider key/configuration in environment variables where appropriate.

## Production architecture

Recommended next step:

React frontend
  ↓
Express/Node API
  ↓
MongoDB

Example API:

- `GET /api/places/nearby`
- `GET /api/places/:id`
- `POST /api/places`
- `PATCH /api/places/:id`
- `DELETE /api/places/:id`
- `POST /api/favorites`
- `GET /api/favorites`

## Security

Never trust latitude/longitude, URLs, phone numbers or user-submitted descriptions without server-side validation.

For user-uploaded photos, use object storage such as S3/Cloudinary rather than storing large image files directly in MongoDB.
