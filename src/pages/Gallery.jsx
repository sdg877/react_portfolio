import React, { useState, useMemo } from "react";
import galleryData from "../Data/galleryData";
import "../Styles/Gallery.css";

const importAll = (r) =>
  r.keys().map((key) => ({ file: key.replace("./", ""), src: r(key) }));

const rawImages = importAll(
  require.context("../Assets/Images/Gallery", false, /\.(png|jpe?g|svg|webp)$/),
);

// Merge the imported image files with their metadata by filename.
// Any image without a matching data entry still shows up, just
// labelled as unknown, so nothing silently disappears from the folder.
const buildImageList = () => {
  const dataByFile = new Map(galleryData.map((entry) => [entry.file, entry]));

  const merged = rawImages.map(({ file, src }) => {
    const meta = dataByFile.get(file);

    if (!meta) {
      console.warn(`No metadata entry found for image "${file}"`);
    }

    const dateTaken = meta?.date ? new Date(meta.date) : null;

    return {
      src,
      file,
      title: meta?.title || file,
      category: meta?.category || "Uncategorized",
      location: meta?.location || "Unknown Location",
      coordinates: meta?.coordinates || null,
      description: meta?.description || "",
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = useMemo(() => {
    const unique = new Set(allImages.map((img) => img.category));
    return ["All", ...Array.from(unique).sort()];
  }, []);

  const images = useMemo(() => {
    if (activeCategory === "All") return allImages;
    return allImages.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentIndex(0);
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

  if (images.length === 0) {
    return (
      <div className="gallery-container">
        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? "active" : ""}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="gallery-empty">No images in this category yet.</div>
      </div>
    );
  }

  const currentImage = images[currentIndex];

  return (
    <div className="gallery-container">
      <div className="gallery-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? "active" : ""}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="slideshow-wrapper">
        <button className="nav-btn prev" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="image-frame">
          <img
            src={currentImage.src}
            alt={currentImage.title}
            className="slideshow-image"
          />
        </div>

        <button className="nav-btn next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      <div className="gallery-meta">
        <p className="meta-title">{currentImage.title}</p>
        <p className="meta-location">📍 {currentImage.location}</p>
        <p className="meta-date">📅 {currentImage.formattedDate}</p>
        <p className="meta-category">🏷️ {currentImage.category}</p>
        <p className="meta-counter">
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  );
};

export default Gallery;