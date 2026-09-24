# NearBite - Mobile Nearby Food App

React + Vite + Leaflet food discovery app.

## Features
- Mobile-first phone UI with bottom navigation
- Browser GPS location permission
- Nearby food displayed on an OpenStreetMap map
- Search and category filtering
- Restaurant details and food menu
- Multiple restaurant images
- Individual food images
- Add restaurant submission form
- Admin approval/rejection/deletion workflow
- Only approved restaurants appear publicly
- Favorites stored in localStorage
- Demo data stored in localStorage

## Run
npm install
npm run dev

## Important
This is a frontend demo. Admin approval is stored in the browser. For a real multi-user app, use a backend such as Node/Express + MongoDB and authentication. Store uploaded images in Cloudinary or AWS S3 instead of localStorage/base64.
