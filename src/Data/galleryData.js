// Dummy photo metadata. Match `file` to the actual filename in
// src/Assets/Images/Gallery. Add new entries here as you add photos.
// `coordinates` is included now so the future world map can plot pins
// without needing another data pass later.

const galleryData = [
  {
    file: "tokyo-crossing.jpg",
    title: "Shibuya Crossing",
    category: "Street",
    location: "Tokyo, Japan",
    coordinates: { lat: 35.6595, lng: 139.7005 },
    date: "2024-03-12",
    description: "The famous scramble crossing at dusk.",
  },
  {
    file: "swiss-alps.jpg",
    title: "Above the Clouds",
    category: "Landscape",
    location: "Zermatt, Switzerland",
    coordinates: { lat: 46.0207, lng: 7.7491 },
    date: "2023-07-04",
    description: "Sunrise over the Matterhorn ridge line.",
  },
  {
    file: "lisbon-tram.jpg",
    title: "Tram 28",
    category: "Street",
    location: "Lisbon, Portugal",
    coordinates: { lat: 38.7169, lng: -9.1399 },
    date: "2023-09-21",
    description: "Classic yellow tram winding through Alfama.",
  },
  {
    file: "serengeti-lion.jpg",
    title: "Watching the Plains",
    category: "Wildlife",
    location: "Serengeti, Tanzania",
    coordinates: { lat: -2.3333, lng: 34.8333 },
    date: "2022-08-15",
    description: "A lioness surveying the grasslands at golden hour.",
  },
  {
    file: "nyc-skyline.jpg",
    title: "Concrete Canyon",
    category: "Architecture",
    location: "New York City, USA",
    coordinates: { lat: 40.7128, lng: -74.006 },
    date: "2024-01-30",
    description: "Looking up Sixth Avenue from street level.",
  },
  {
    file: "kyoto-portrait.jpg",
    title: "Maiko in the Garden",
    category: "Portrait",
    location: "Kyoto, Japan",
    coordinates: { lat: 35.0116, lng: 135.7681 },
    date: "2024-03-15",
    description: "Portrait shot in Maruyama Park.",
  },
  {
    file: "iceland-falls.jpg",
    title: "Seljalandsfoss",
    category: "Landscape",
    location: "South Iceland",
    coordinates: { lat: 63.6156, lng: -19.9886 },
    date: "2023-05-02",
    description: "Long exposure behind the falls.",
  },
  {
    file: "marrakech-souk.jpg",
    title: "Souk Colours",
    category: "Street",
    location: "Marrakech, Morocco",
    coordinates: { lat: 31.6295, lng: -7.9811 },
    date: "2022-11-19",
    description: "Spice stalls in the medina.",
  },
];

export default galleryData;
