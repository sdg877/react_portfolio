import React, { useMemo, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import galleryData from "../Data/galleryData";
import "../Styles/WorldMap.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Fits the map view to whatever pins exist, instead of a fixed zoom level.
// Runs after the container is visible/sized, since fitBounds needs an
// accurate container size to calculate zoom correctly.
const FitBoundsToMarkers = ({ pins }) => {
  const map = useMap();

  useEffect(() => {
    if (!pins.length) return;

    const timer = setTimeout(() => {
      map.invalidateSize();

      if (pins.length === 1) {
        map.setView(
          [pins[0].coordinates.lat, pins[0].coordinates.lng],
          4,
        );
      } else {
        const bounds = L.latLngBounds(
          pins.map((p) => [p.coordinates.lat, p.coordinates.lng]),
        );
        map.fitBounds(bounds, { padding: [50, 50], maxZoom: 5 });
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [map, pins]);

  return null;
};

const groupByLocation = (data) => {
  const groups = new Map();

  data.forEach((photo) => {
    if (!photo.coordinates || !photo.file) return;
    const key = photo.location;

    if (!groups.has(key)) {
      groups.set(key, {
        location: key,
        coordinates: photo.coordinates,
        count: 0,
      });
    }
    groups.get(key).count += 1;
  });

  return Array.from(groups.values());
};

const WorldMap = ({ activeLocation, onSelectLocation }) => {
  const pins = useMemo(() => groupByLocation(galleryData), []);

  return (
    <div className="world-map-wrapper">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        minZoom={1.5}
        scrollWheelZoom={true}
        className="world-map"
      >
        <FitBoundsToMarkers pins={pins} />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {pins.map((pin) => (
          <Marker
            key={pin.location}
            position={[pin.coordinates.lat, pin.coordinates.lng]}
            eventHandlers={{
              click: () =>
                onSelectLocation(
                  activeLocation === pin.location ? null : pin.location,
                ),
            }}
          >
            <Popup>
              <strong>{pin.location}</strong>
              <br />
              {pin.count} photo{pin.count > 1 ? "s" : ""}
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {activeLocation && (
        <button className="map-clear-btn" onClick={() => onSelectLocation(null)}>
          ✕ Clear location filter ({activeLocation})
        </button>
      )}
    </div>
  );
};

export default WorldMap;