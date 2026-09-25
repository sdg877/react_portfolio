import React, { useState, useMemo, useEffect } from "react";
import WorldMap from "../components/WorldMap";
import galleryData from "../Data/galleryData";
import "../Styles/Gallery.css";
import "../Styles/WorldMap.css";

const importAll = (r) =>
  r.keys().map((key) => ({ file: key.replace("./", ""), src: r(key) }));

const rawImages = importAll(
  require.context(
    "../Assets/Images/Gallery",
    false,
    /\.(png|jpe?g|svg|webp)$/i,
  ),
);

const MONTH_ORDER = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const parseDateFields = (dateStr) => {
  if (!dateStr) return { date: null, year: null, month: null };
  const str = String(dateStr).trim();

  const mmYyyy = str.match(/^(\d{1,2})\.(\d{4})$/);
  if (mmYyyy) {
    const month = Number(mmYyyy[1]);
    const year = Number(mmYyyy[2]);
    return {
      date: new Date(year, month - 1, 1),
      year,
      month: MONTH_ORDER[month - 1],
    };
  }

  if (/^\d{4}$/.test(str)) {
    const year = Number(str);
    return { date: new Date(year, 0, 1), year, month: null };
  }

  const parts = str.split("/").map(Number);
  if (parts.length === 3 && parts.every((p) => !isNaN(p))) {
    const [day, month, year] = parts;
    return {
      date: new Date(year, month - 1, day),
      year,
      month: MONTH_ORDER[month - 1],
    };
  }

  return { date: null, year: null, month: null };
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

    const { date: dateTaken, year, month } = parseDateFields(meta?.date);

    const categoryList = meta?.category
      ? [meta.category]
      : meta?.categories?.length
        ? meta.categories
        : ["Uncategorized"];

    const formattedDate = year
      ? month
        ? `${month} ${year}`
        : `${year}`
      : "Date Unknown";

    return {
      src,
      file,
      title: meta?.title || file,
      categories: categoryList,
      location: meta?.location || "Unknown Location",
      coordinates: meta?.coordinates || null,
      description: meta?.description || "",
      dateTaken,
      year: year ? year.toString() : null,
      month,
      formattedDate,
    };
  });

  merged.sort((a, b) => {
    const tA = a.dateTaken ? a.dateTaken.getTime() : -Infinity;
    const tB = b.dateTaken ? b.dateTaken.getTime() : -Infinity;
    if (tA !== tB) return tB - tA;
    return a.file.localeCompare(b.file);
  });

  return merged;
};

const allImages = buildImageList();

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const [activeCategory, setActiveCategory] = useState(
    () => localStorage.getItem("gallery_activeCategory") || "All",
  );
  const [activeYear, setActiveYear] = useState(
    () => localStorage.getItem("gallery_activeYear") || "All",
  );
  const [activeMonth, setActiveMonth] = useState(
    () => localStorage.getItem("gallery_activeMonth") || "All",
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMap, setShowMap] = useState(
    () => localStorage.getItem("gallery_showMap") === "true",
  );
  const [showFilters, setShowFilters] = useState(
    () => localStorage.getItem("gallery_showFilters") === "true",
  );

  useEffect(() => {
    localStorage.setItem("gallery_activeCategory", activeCategory);
    localStorage.setItem("gallery_activeYear", activeYear);
    localStorage.setItem("gallery_activeMonth", activeMonth);
    localStorage.setItem("gallery_showMap", showMap);
    localStorage.setItem("gallery_showFilters", showFilters);
  }, [activeCategory, activeYear, activeMonth, showMap, showFilters]);

  const categories = useMemo(() => {
    const unique = new Set(allImages.flatMap((img) => img.categories));
    return ["All", ...Array.from(unique).sort((a, b) => a.localeCompare(b))];
  }, []);

  const years = useMemo(() => {
    const unique = new Set(allImages.map((img) => img.year).filter(Boolean));
    return ["All", ...Array.from(unique).sort((a, b) => b - a)];
  }, []);

  const months = useMemo(() => {
    const present = new Set(allImages.map((img) => img.month).filter(Boolean));
    return ["All", ...MONTH_ORDER.filter((m) => present.has(m))];
  }, []);

  const images = useMemo(() => {
    return allImages.filter((img) => {
      const matchesCategory =
        activeCategory === "All" || img.categories.includes(activeCategory);
      const matchesYear = activeYear === "All" || img.year === activeYear;
      const matchesMonth = activeMonth === "All" || img.month === activeMonth;
      return matchesCategory && matchesYear && matchesMonth;
    });
  }, [activeCategory, activeYear, activeMonth]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory, activeYear, activeMonth]);

  const toggleMap = () => {
    setShowMap((prev) => {
      if (!prev) setShowFilters(false);
      return !prev;
    });
  };

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
    setActiveYear("All");
    setActiveMonth("All");
  };

  const handleYearSelect = (year) => {
    setActiveYear(year);
    setActiveCategory("All");
  };

  const handleMonthSelect = (month) => {
    setActiveMonth(month);
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

  const openLightbox = () => setLightboxOpen(true);
  const closeLightbox = () => setLightboxOpen(false);

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxOpen, images.length]);

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
              {showMap ? "Hide World Map" : "View World Map"}
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
                    <label htmlFor="month-select" className="filter-label">
                      Month
                    </label>
                    <select
                      id="month-select"
                      className="filter-select"
                      value={activeMonth}
                      onChange={(e) => handleMonthSelect(e.target.value)}
                    >
                      {months.map((month) => (
                        <option key={month} value={month}>
                          {month}
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
                        onClick={openLightbox}
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

                  {currentImage.description && (
                    <p className="photo-description">
                      {currentImage.description}
                    </p>
                  )}

                  <div className="thumbnail-strip">
                    {images.map((img, index) => (
                      <img
                        key={img.file}
                        src={img.src}
                        alt={img.file}
                        className={`thumbnail ${
                          index === currentIndex ? "active" : ""
                        }`}
                        onClick={() => {
                          setCurrentIndex(index);
                          openLightbox();
                        }}
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

      {lightboxOpen && currentImage && (
        <div className="map-lightbox-overlay" onClick={closeLightbox}>
          <div
            className="map-lightbox-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="map-lightbox-close" onClick={closeLightbox}>
              ✕
            </button>

            <div className="map-lightbox-media-wrapper">
              {images.length > 1 && (
                <button
                  className="map-lightbox-nav prev"
                  onClick={prevSlide}
                  aria-label="Previous photo"
                >
                  &#10094;
                </button>
              )}

              <img
                src={currentImage.src}
                alt={currentImage.title}
                className="map-lightbox-img"
              />

              {images.length > 1 && (
                <button
                  className="map-lightbox-nav next"
                  onClick={nextSlide}
                  aria-label="Next photo"
                >
                  &#10095;
                </button>
              )}
            </div>

            <div className="map-lightbox-meta">
              <p>
                {currentImage.location} • {currentImage.formattedDate}
              </p>
              {currentImage.description && (
                <p className="lightbox-description">
                  {currentImage.description}
                </p>
              )}
              {images.length > 1 && (
                <span className="map-lightbox-counter">
                  {currentIndex + 1} / {images.length}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
