import React, { useMemo, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import markerIconUrl from "leaflet/dist/images/marker-icon.png";
import markerShadowUrl from "leaflet/dist/images/marker-shadow.png";
import "../Styles/WorldMap.css";

const createPinIcon = (count) =>
  L.divIcon({
    className: "custom-pin-wrapper",
    html: `
      <div class="pin-shape">
        <img src="${markerIconUrl}" class="pin-img" />
        <img src="${markerShadowUrl}" class="pin-shadow-img" />
        ${count > 1 ? `<span class="pin-count-badge">${count}</span>` : ""}
      </div>
    `,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

const createClusterIcon = (cluster) => createPinIcon(cluster.getChildCount());

const FitBoundsToMarkers = ({ pins }) => {
  const map = useMap();

  useEffect(() => {
    if (!pins.length) return;

    const timer = setTimeout(() => {
      map.invalidateSize();

      if (pins.length === 1) {
        map.setView([pins[0].coordinates.lat, pins[0].coordinates.lng], 6);
      } else {
        const bounds = L.latLngBounds(
          pins.map((p) => [p.coordinates.lat, p.coordinates.lng]),
        );
        map.fitBounds(bounds, { padding: [70, 70], maxZoom: 6 });
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
  const [clusterOverview, setClusterOverview] = useState(null);

  const pins = useMemo(() => groupByLocation(allImages), [allImages]);

  const pinsByCoordKey = useMemo(() => {
    const map = new Map();
    pins.forEach((pin) => {
      map.set(`${pin.coordinates.lat},${pin.coordinates.lng}`, pin);
    });
    return map;
  }, [pins]);

  const handleClusterClick = (e) => {
    const layer = e.layer;
    if (!layer || typeof layer.getAllChildMarkers !== "function") return;

    const childMarkers = layer.getAllChildMarkers();
    const seenLocations = new Set();
    const photos = [];

    childMarkers.forEach((marker) => {
      const { lat, lng } = marker.getLatLng();
      const pin = pinsByCoordKey.get(`${lat},${lng}`);
      if (pin && !seenLocations.has(pin.location)) {
        seenLocations.add(pin.location);
        photos.push(...pin.photos);
      }
    });

    if (photos.length) {
      setClusterOverview({ photos });
    }
  };

  const openLightbox = (photos, index) => {
    setModalData({ photos, index });
    setClusterOverview(null);
  };

  const closeLightbox = () => setModalData(null);

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
      if (modalData) {
        if (e.key === "ArrowRight") handleNext();
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "Escape") closeLightbox();
      } else if (clusterOverview && e.key === "Escape") {
        setClusterOverview(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalData, clusterOverview]);

  const activePhoto = modalData ? modalData.photos[modalData.index] : null;
  const totalPhotos = modalData ? modalData.photos.length : 0;

  return (
    <div className="world-map-wrapper">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        minZoom={2}
        scrollWheelZoom={true}
        className="world-map"
      >
        <FitBoundsToMarkers pins={pins} />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MarkerClusterGroup
          onClick={handleClusterClick}
          iconCreateFunction={createClusterIcon}
          maxClusterRadius={30}
          disableClusteringAtZoom={11}
          spiderfyOnMaxZoom={false}
          showCoverageOnHover={false}
          zoomToBoundsOnClick={false}
        >
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
        </MarkerClusterGroup>
      </MapContainer>

      {clusterOverview && (
        <div
          className="map-lightbox-overlay"
          onClick={() => setClusterOverview(null)}
        >
          <div
            className="cluster-overview-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="map-lightbox-close"
              onClick={() => setClusterOverview(null)}
            >
              ✕
            </button>

            <p className="popup-subtitle">
              {clusterOverview.photos.length} photos in this area
            </p>

            <div className="cluster-overview-grid">
              {clusterOverview.photos.map((photo, index) => (
                <div
                  key={photo.file}
                  className="popup-thumb-wrapper"
                  onClick={() => openLightbox(clusterOverview.photos, index)}
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
        </div>
      )}

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
