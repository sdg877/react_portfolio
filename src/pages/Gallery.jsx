import React, { useState, useMemo, useEffect } from "react";
import WorldMap from "../components/WorldMap";
import galleryData from "../Data/galleryData";
import "../Styles/Gallery.css";

const importAll = (r) =>
  r.keys().map((key) => ({ file: key.replace("./", ""), src: r(key) }));

const rawImages = importAll(
  require.context(
    "../Assets/Images/Gallery",
    false,
    /\.(png|jpe?g|svg|webp)$/i,
  ),
);

const parseUKDate = (dateStr) => {
  if (!dateStr) return null;
  const [day, month, year] = dateStr.split("/").map(Number);
  if (!day || !month || !year) return null;
  return new Date(year, month - 1, day);
};

const buildImageList = () => {
  const dataByFile = new Map(
    galleryData.map((entry) => [entry.file.toLowerCase(), entry]),
  );

  const merged = rawImages.map(({ file, src }) => {
    const meta = dataByFile.get(file.toLowerCase());

    if (!meta) {
      console.warn(`No metadata entry found for image "${file}"`);
    }

    const dateTaken = parseUKDate(meta?.date);

    return {
      src,
      file,
      title: meta?.title || file,
      categories: meta?.categories?.length
        ? meta.categories
        : ["Uncategorized"],
      location: meta?.location || "Unknown Location",
      coordinates: meta?.coordinates || null,
      dateTaken,
      formattedDate: dateTaken
        ? dateTaken.toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        : "Date Unknown",
    };
  });

  merged.sort((a, b) => (a.dateTaken || 0) - (b.dateTaken || 0));
  return merged;
};

const allImages = buildImageList();

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeLocation, setActiveLocation] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMap, setShowMap] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const categories = useMemo(() => {
    const unique = new Set(allImages.flatMap((img) => img.categories));
    return ["All", ...Array.from(unique).sort()];
  }, []);

  const images = useMemo(() => {
    return allImages.filter((img) => {
      const matchesCategory =
        activeCategory === "All" || img.categories.includes(activeCategory);
      const matchesLocation =
        !activeLocation || img.location === activeLocation;
      return matchesCategory && matchesLocation;
    });
  }, [activeCategory, activeLocation]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory, activeLocation]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  if (allImages.length === 0) {
    return <div className="gallery-empty">No images found in folder.</div>;
  }

  const currentImage = images[0] ? images[currentIndex] : null;

  return (
    <div className="gallery-page-container">
      <div className="gallery-wrapper">
        <div className="gallery-header">
          <h1 className="title-gallery">Photo Gallery</h1>
        </div>

        <div className="gallery-card-glass">
          <div className="gallery-toggle-row">
            <button
              className="map-toggle-btn"
              onClick={() => setShowMap((prev) => !prev)}
            >
              {showMap ? "✕ Hide World Map" : "View World Map"}
            </button>

            <button
              className="filter-toggle-btn"
              onClick={() => setShowFilters((prev) => !prev)}
            >
              {showFilters ? "✕ Hide Filters" : "Filter Photos"}
            </button>
          </div>

          {showMap && (
            <WorldMap
              activeLocation={activeLocation}
              onSelectLocation={setActiveLocation}
            />
          )}

          {showFilters && (
            <div className="gallery-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${activeCategory === category ? "active" : ""}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          {!currentImage ? (
            <div className="gallery-empty">
              No images match the current filters.
            </div>
          ) : (
            <>
              <h2 className="photo-title">{currentImage.title}</h2>

              <div className="slideshow-wrapper">
                <button className="nav-btn prev" onClick={prevSlide}>
                  &#10094;
                </button>

                <div className="image-frame">
                  <img
                    src={currentImage.src}
                    alt={currentImage.title}
                    className="slideshow-image"
                    loading="lazy"
                  />
                </div>

                <button className="nav-btn next" onClick={nextSlide}>
                  &#10095;
                </button>
              </div>

              <div className="gallery-meta">
                <span className="meta-item"> {currentImage.location}</span>
                <span className="meta-item">
                  {currentImage.formattedDate}
                </span>
                <span className="meta-item">
                {currentImage.categories.join(", ")}
                </span>
                <span className="meta-counter">
                  {currentIndex + 1} / {images.length}
                </span>
              </div>

              <div className="thumbnail-strip">
                {images.map((img, index) => (
                  <img
                    key={img.file}
                    src={img.src}
                    alt={img.title}
                    className={`thumbnail ${index === currentIndex ? "active" : ""}`}
                    onClick={() => setCurrentIndex(index)}
                    loading="lazy"
                  />
                ))}
              </div>
            </>
          )}

          <p className="gallery-note">More photos being added soon. All photos taken on my Canon EAS800D.</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
