const sightings = [
  {
    name: 'Amazon Rainforest, Peru',
    lat: -3.4653,
    lng: -62.2159,
    date: '2026-06-14',
    time: '06:40',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=900&q=80',
    description: 'A juvenile Folivora spotted resting high in the canopy.'
  },
  {
    name: 'Costa Rica Cloud Forest',
    lat: 10.3,
    lng: -84.0,
    date: '2026-05-22',
    time: '08:10',
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80',
    description: 'A Folivora observed moving slowly through misty forest branches.'
  },
  {
    name: 'Madagascar Rainforest',
    lat: -18.7669,
    lng: 46.8691,
    date: '2026-04-08',
    time: '17:20',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80',
    description: 'A Folivora sighting recorded near a protected conservation trail.'
  },
  {
    name: 'Borneo, Malaysia',
    lat: 2.5,
    lng: 112.5,
    date: '2026-03-17',
    time: '05:55',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80',
    description: 'A Folivora photographed in dense tropical vegetation.'
  }
];

const map = L.map('map', {
  zoomControl: true,
  worldCopyJump: true
}).setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const pinkIcon = L.divIcon({
  className: 'pink-marker',
  html: '●',
  iconSize: [20, 20],
  iconAnchor: [10, 10]
});

sightings.forEach((spot) => {
  const marker = L.marker([spot.lat, spot.lng], { icon: pinkIcon }).addTo(map);

  marker.bindPopup(`
    <div>
      <h3>${spot.name}</h3>
      <p><strong>Date:</strong> ${spot.date}</p>
      <p><strong>Time:</strong> ${spot.time}</p>
      <p>${spot.description}</p>
      <img src="${spot.image}" alt="Folivora sighting at ${spot.name}" />
    </div>
  `);
});
