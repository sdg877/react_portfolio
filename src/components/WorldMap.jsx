import React, { useMemo, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../Styles/WorldMap.css";

const createPinIcon = (count) =>
  L.divIcon({
    className: "custom-map-pin-wrapper",
    html: `<div class="custom-pin">${count > 1 ? `<span class="pin-badge">${count}</span>` : ""}</div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7],
    popupAnchor: [0, -8],
  });

const FitBoundsToMarkers = ({ pins }) => {
  const map = useMap();

  useEffect(() => {
    if (!pins.length) return;

    const timer = setTimeout(() => {
      map.invalidateSize();

      if (pins.length === 1) {
        map.setView([pins[0].coordinates.lat, pins[0].coordinates.lng], 4);
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
    if (!photo.coordinates || !photo.src) return;
    const key = photo.location;

    if (!groups.has(key)) {
      groups.set(key, {
        location: key,
        coordinates: photo.coordinates,
        photos: [],
      });
    }
    groups.get(key).photos.push(photo);
  });

  return Array.from(groups.values());
};

const WorldMap = ({ allImages }) => {
  const [modalData, setModalData] = useState(null);

  const pins = useMemo(() => groupByLocation(allImages), [allImages]);

  const openLightbox = (photos, index) => {
    setModalData({ photos, index });
  };

  const closeLightbox = () => {
    setModalData(null);
  };

  const handleNext = () => {
    setModalData((prev) =>
      prev
        ? {
            ...prev,
            index: prev.index === prev.photos.length - 1 ? 0 : prev.index + 1,
          }
        : null,
    );
  };

  const handlePrev = () => {
    setModalData((prev) =>
      prev
        ? {
            ...prev,
            index: prev.index === 0 ? prev.photos.length - 1 : prev.index - 1,
          }
        : null,
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!modalData) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalData]);

  const activePhoto = modalData ? modalData.photos[modalData.index] : null;
  const totalPhotos = modalData ? modalData.photos.length : 0;

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
            icon={createPinIcon(pin.photos.length)}
          >
            <Popup className="map-photo-popup">
              <div className="popup-container">
                <strong className="popup-title">{pin.location}</strong>
                <p className="popup-subtitle">
                  {pin.photos.length} photo{pin.photos.length > 1 ? "s" : ""}
                </p>

                <div className="popup-thumbnails-grid">
                  {pin.photos.map((photo, index) => (
                    <div
                      key={photo.file}
                      className="popup-thumb-wrapper"
                      onClick={() => openLightbox(pin.photos, index)}
                      title={`Click to view: ${photo.title}`}
                    >
                      <img
                        src={photo.src}
                        alt={photo.title}
                        className="popup-thumb-img"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {modalData && activePhoto && (
        <div className="map-lightbox-overlay" onClick={closeLightbox}>
          <div
            className="map-lightbox-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="map-lightbox-close" onClick={closeLightbox}>
              ✕
            </button>

            <div className="map-lightbox-media-wrapper">
              {totalPhotos > 1 && (
                <button
                  className="map-lightbox-nav prev"
                  onClick={handlePrev}
                  aria-label="Previous photo"
                >
                  &#10094;
                </button>
              )}

              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="map-lightbox-img"
              />

              {totalPhotos > 1 && (
                <button
                  className="map-lightbox-nav next"
                  onClick={handleNext}
                  aria-label="Next photo"
                >
                  &#10095;
                </button>
              )}
            </div>

            <div className="map-lightbox-meta">
              <h3>{activePhoto.title}</h3>
              <p>
                {activePhoto.location} • {activePhoto.formattedDate}
              </p>
              {totalPhotos > 1 && (
                <span className="map-lightbox-counter">
                  {modalData.index + 1} / {totalPhotos}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorldMap;
