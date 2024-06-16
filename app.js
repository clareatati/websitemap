// Initialize the map at Kasarani Stadium
var map = L.map('map').setView([-1.2195, 36.8851], 14); 

// Add a tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Define marker data with popups for Kasarani Stadium
const markersData = [
  // Moi International Sports Centre, Kasarani
  {
    name: "Moi International Sports Centre",
    coords: [-1.2202, 36.8856], 
    description: "A multi-purpose stadium in Kasarani.",
    popupContent: `
      <h3>Moi International Sports Centre</h3>
      <p>A multi-purpose stadium in Kasarani.</p>
      <img src="https://i.ibb.co/dK3J7BJ/kasarani.jpg" alt="Moi International Sports Centre" width="200"> 
    `
  },
  // Safari Park Hotel
  {
    name: "Safari Park Hotel",
    coords: [-1.2183, 36.8881], 
    description: "A luxury hotel near Kasarani Stadium.",
    popupContent: `
      <h3>Safari Park Hotel</h3>
      <p>A luxury hotel near Kasarani Stadium.</p>
      <img src="https://i.ibb.co/VqLZwrL/safari-park.jpg" alt="Safari Park Hotel" width="200"> 
    `
  },
  // Thika Road Mall
  {
    name: "Thika Road Mall",
    coords: [-1.2244, 36.8805], 
    description: "A popular shopping mall near Kasarani.",
    popupContent: `
      <h3>Thika Road Mall</h3>
      <p>A popular shopping mall near Kasarani.</p>
      <img src="https://i.ibb.co/NC1JrP3/thika-road-mall.jpg" alt="Thika Road Mall" width="200"> 
    `
  },
  // Garden City Mall
  {
    name: "Garden City Mall",
    coords: [-1.2250, 36.8844], 
    description: "A major shopping center close to Kasarani.",
    popupContent: `
      <h3>Garden City Mall</h3>
      <p>A major shopping center close to Kasarani.</p>
      <img src="https://i.ibb.co/6ym7F1S/garden-city-mall.jpg" alt="Garden City Mall" width="200">  
    `
  }
];

// Add markers to the map
markersData.forEach(markerData => {
  L.marker(markerData.coords) 
    .addTo(map)
    .bindPopup(markerData.popupContent)
    .openPopup(); // Opens all popups on load (optional)
});
