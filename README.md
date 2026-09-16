# Personal Portfolio

Completed: March 2025
Major Updates: November 2025 & September 2026
Live Site: [sylviadrakegill.com](https.www.sylviadrakegill.com/)

---

## Description

This personal portfolio was built using React to showcase my projects, skills, and background as a software developer. Designed with modularity and clean UI/UX principles in mind, the platform provides potential employers and visitors with an interactive look into my technical proficiency, design aesthetic, and engineering capabilities.

---

## Key Features & Major Updates

### September 2026 Update
*   Interactive Photo Gallery & World Map: Introduced an interactive Leaflet-powered world map integrated with custom map pins matching the site's design palette. Clicking a pin isolates photos taken at that location into popups featuring thumbnail grids and an interactive lightbox overlay (equipped with keyboard/touch navigation and date/location metadata).
*   Streamlined UI & Custom Controls: Added collapsible view toggles that automatically context-switch between the map view and the main photo gallery, streamlining filter visibility.

### November 2025 Update
*   Dynamic Data Management: Refactored project data handling from static components into a centralized, dynamic structure for improved scalability and easier maintenance.
*   Combined Background & Skills: Consolidated background information and technical skills into a unified, cohesive layout.
*   Live Weather Widget & Details: Integrated location-based weather fetching (with automatic fallback to London if location permissions are denied). Features a quick-view widget alongside hourly and daily breakdown popups.
*   GitHub Contribution Graph: Integrated a dynamic GitHub contribution graph using GraphQL to showcase real-time commit activity.
*   New Pages & Security: Added a dedicated Services page, a custom 404 Error page, and implemented a honeypot field on the contact form to eliminate spam submissions via EmailJS.

### Core Site Features
*   Light / Dark Mode: Toggle with automatic system preference detection and theme persistence.
*   Contact & Notifications: EmailJS contact form integration backed by instant toast notifications (react-toastify).
*   Animations: High-performance smooth transitions powered by Framer Motion.
*   Responsive Design: Mobile-first layout optimized for all device sizes.

---

## Technologies Used

*   Frontend: React, JavaScript (ES6+), HTML5, CSS3 / CSS Modules
*   Mapping & Location: Leaflet, React-Leaflet, OpenStreetMap API
*   APIs & Data Fetching: Axios, GraphQL (GitHub API), Open-Meteo API
*   Animations & UI Utilities: Motion (Framer Motion), React Toastify, Lucide React / React Icons
*   Services & Environment: EmailJS, Dotenv

---

## Engineering Highlights & Learnings

*   State & Context Management: Managed complex UI state flows across multi-view galleries, lightboxes, weather modal popups, and theme switches.
*   Third-Party Integrations: Handled multi-API synchronization (Open-Meteo, OpenStreetMap, Leaflet, and GitHub GraphQL) with graceful fallback handling for denied browser permissions.
*   Spam Prevention & Form Security: Designed honeypot logic to reduce automated contact form spam without degrading user experience.
*   Performance & Asset Loading: Optimized image delivery for gallery grids, interactive map popups, and full-screen lightboxes while preserving fast load times.

---

## Future Improvements

*   Add a dedicated tech blog to document development learnings and project case studies.
*   Introduce multi-language support (i18n).
*   Continue refining accessibility (WCAG compliance) and performance metrics.