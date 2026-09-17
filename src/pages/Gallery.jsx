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
  const str = String(dateStr).trim();
  if (/^\d{4}$/.test(str)) {
    return new Date(Number(str), 0, 1);
  }
  const parts = str.split("/").map(Number);
  if (parts.length === 3 && parts.every((p) => !isNaN(p))) {
    return new Date(parts[2], parts[1] - 1, parts[0]);
  }
  return null;
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

    const categoryList = meta?.category
      ? [meta.category]
      : meta?.categories?.length
        ? meta.categories
        : ["Uncategorized"];

    return {
      src,
      file,
      title: meta?.title || file,
      categories: categoryList,
      location: meta?.location || "Unknown Location",
      coordinates: meta?.coordinates || null,
      dateTaken,
      formattedDate: dateTaken
        ? dateTaken.getFullYear().toString()
        : "Date Unknown",
    };
  });

  merged.sort((a, b) => {
    const yearA = a.dateTaken ? a.dateTaken.getFullYear() : 0;
    const yearB = b.dateTaken ? b.dateTaken.getFullYear() : 0;

    if (yearA !== yearB) {
      return yearA - yearB;
    }
    return a.file.localeCompare(b.file);
  });

  return merged;
};

const allImages = buildImageList();

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeYear, setActiveYear] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMap, setShowMap] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // Extract unique categories sorted alphabetically
  const categories = useMemo(() => {
    const unique = new Set(allImages.flatMap((img) => img.categories));
    return ["All", ...Array.from(unique).sort((a, b) => a.localeCompare(b))];
  }, []);

  const years = useMemo(() => {
    const unique = new Set(
      allImages
        .map((img) => img.formattedDate)
        .filter((y) => y !== "Date Unknown"),
    );
    return ["All", ...Array.from(unique).sort((a, b) => b - a)];
  }, []);

  const images = useMemo(() => {
    return allImages.filter((img) => {
      const matchesCategory =
        activeCategory === "All" || img.categories.includes(activeCategory);
      const matchesYear =
        activeYear === "All" || img.formattedDate === activeYear;
      return matchesCategory && matchesYear;
    });
  }, [activeCategory, activeYear]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory, activeYear]);

  const toggleMap = () => {
    setShowMap((prev) => {
      if (!prev) setShowFilters(false);
      return !prev;
    });
  };

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
    setActiveYear("All");
  };

  const handleYearSelect = (year) => {
    setActiveYear(year);
    setActiveCategory("All");
  };

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
            <button className="map-toggle-btn" onClick={toggleMap}>
              {showMap ? "✕ Hide World Map" : "View World Map"}
            </button>

            {!showMap && (
              <button
                className="filter-toggle-btn"
                onClick={() => setShowFilters((prev) => !prev)}
              >
                {showFilters ? "✕ Hide Filters" : "Filter Photos"}
              </button>
            )}
          </div>

          {showMap ? (
            <WorldMap allImages={allImages} />
          ) : (
            <>
              {showFilters && (
                <div className="gallery-filters-container">
                  <div className="filter-group">
                    <label htmlFor="category-select" className="filter-label">
                      Category
                    </label>
                    <select
                      id="category-select"
                      className="filter-select"
                      value={activeCategory}
                      onChange={(e) => handleCategorySelect(e.target.value)}
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="filter-group">
                    <label htmlFor="year-select" className="filter-label">
                      Year
                    </label>
                    <select
                      id="year-select"
                      className="filter-select"
                      value={activeYear}
                      onChange={(e) => handleYearSelect(e.target.value)}
                    >
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {!currentImage ? (
                <div className="gallery-empty">
                  No images match the current filters.
                </div>
              ) : (
                <>
                  <div className="slideshow-wrapper">
                    <button className="nav-btn prev" onClick={prevSlide}>
                      &#10094;
                    </button>

                    <div className="image-frame">
                      <img
                        src={currentImage.src}
                        alt={currentImage.file}
                        className="slideshow-image"
                        loading="lazy"
                      />
                    </div>

                    <button className="nav-btn next" onClick={nextSlide}>
                      &#10095;
                    </button>
                  </div>

                  <div className="gallery-meta">
                    <span className="meta-item">{currentImage.location}</span>
                    <span className="meta-item">
                      {currentImage.formattedDate}
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
                        alt={img.file}
                        className={`thumbnail ${
                          index === currentIndex ? "active" : ""
                        }`}
                        onClick={() => setCurrentIndex(index)}
                        loading="lazy"
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          )}

          <p className="gallery-note">
            More photos being added soon. All photos taken on my Canon EOS 800D.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
