import AIChatBotImg from "../../Images/AIChatBot.png";
import GourmetGalleryImg from "../../Images/GourmetGallery.png";
import HTreharneJonesImg from "../../Images/HTJ.png";
import InTechJobsImg from "../../Images/InTech.png";
import ProjectOneImg from "../../Images/ProjectOne.jpg";
import SnakeImg from "../../Images/Snake.png";
import SpookSpottersImg from "../../Images/SpookSpotters.png";
import SSSImg from "../../Images/SSS.png";

const projects = [
  {
    id: "AIChatBot",
    title: "AI Chatbot",
    image: AIChatBotImg,
    description: [
      "Built in March 2025 using Flask, MongoDB, and the OpenAI API, this web app allows users to register, log in, and chat with an AI while storing and managing conversation history. It features a clean, responsive interface created with HTML, CSS, and JavaScript.",
      "Key features include user authentication, persistent chat history with renaming/deletion, a search function, smart subject generation, and a welcome message for new chats. Managing these involved careful handling of state and API responses.",
      "This project strengthened my skills in Flask, JavaScript, and API integration, and gave me hands-on experience with deployment and authentication. Planned improvements include real-time updates, improved search relevancy, and file uploads.",
    ],
    siteUrl: "https://chatbot-sdrakegill.pythonanywhere.com/",
    githubFrontendUrl: "https://github.com/sdg877/ai_chatbot",
    githubBackendUrl: "",
  },
  {
    id: "HTJ",
    title: "Heather Treharne Jones Project",
    image: HTreharneJonesImg,
    description: [
      "My first freelance commission: a clean, professional portfolio site for an artist to showcase work, connect with customers, and manage commissions.",
      "The build includes an admin area, galleries, contact form, news section, and a commissions page. The client had a clear vision for the layout, colours, and banner image, and wanted to update content independently. I handled both design and development, ensuring responsive performance across devices.",
      "Key challenges included configuring the S3 bucket for uploads, handling mobile upload issues via nginx settings, and resolving character encoding errors with backend encryption and frontend decoding.",
      "This project sharpened my ability to explain technical concepts to non-technical clients and strengthened my project management skills. The site has no known bugs and gives the client full control over content updates.",
    ],
    siteUrl: "https://htreharnejones.co.uk/",
    githubFrontendUrl: "https://github.com/sdg877/hj_frontend",
    githubBackendUrl: "https://github.com/sdg877/hj_backend",
  },
  {
    id: "ProjectOne",
    title: "Confidential MERN Stack Project",
    image: ProjectOneImg,
    description: [
      "This MERN stack project was developed for a client with specialised workflow requirements. Due to the confidential nature of this project, specific details about its users, data, and workflows cannot be disclosed. This project took 130 hours to complete, and I worked alone.",
      "The application addresses highly sensitive and regulated tasks, designed to support complex organisational needs and compliance workflows. It features 11 interconnected data models, ensuring seamless organisation, linking, and management of data across various modules.",
      "A central calendar system allows users to track tasks and monitor compliance. Automated scheduling triggers workflows based on user-inputted dates, ensuring timely completion of critical activities. A traffic light system visually signals task progress and deadlines, enhancing prioritisation.",
      "Key challenges included dynamically displaying attendee and contact data within a unified table, implementing a context-sensitive help system, and integrating downloadable email templates for seamless communication. Each feature was carefully designed to support the client's workflow needs.",
    ],
    siteUrl: "",
    githubFrontendUrl: "",
    githubBackendUrl: "",
  },
  {
    id: "GourmetGallery",
    title: "Gourmet Gallery",
    image: GourmetGalleryImg,
    description: [
      "Gourmet Gallery is a full-stack MERN app where users can search, filter, and save recipes. It pulls data from an external recipe API and includes authentication for managing saved items.",
      "This was my first fully independent full-stack project. I built the backend with Express and MongoDB, added JWT-based authentication, and handled the frontend with React.",
      "Key challenges included integrating the API, managing auth flows, and handling inconsistent data. To improve layout consistency, I filtered out recipes lacking images.",
      "This project strengthened my problem-solving skills and boosted my confidence in full-stack development, API handling, and solo deployment.",
    ],
    siteUrl: "https://gourmetgallery.netlify.app/",
    githubFrontendUrl: "https://github.com/sdg877/recipe_site_fe",
    githubBackendUrl: "https://github.com/sdg877/recipe_site_be",
  },
  {
    id: "SSS",
    title: "Sustainable Swap Shop",
    image: SSSImg,
    description: [
      "My Unit 4 project, Sustainable Swap Shop, is a full-stack app built with Django and React to facilitate clothes swapping and promote sustainability.",
      "It’s a fully CRUD application using Django, PostgreSQL, and React, with user authentication and AWS S3 image uploads.",
      "Challenges included setting up authentication, permissions, and resolving JWT issues on mobile by adjusting token storage and decoding.",
      "Since then, I’ve gained more Django and React experience; if I revisited this, I’d refine the swap approval, UI, and search/filtering for better UX.",
    ],
    siteUrl: "http://sustainableswapfe-production.up.railway.app/",
    githubFrontendUrl: "https://github.com/sdg877/sustainableswapfe",
    githubBackendUrl: "https://github.com/sdg877/sustainableswapbackend",
  },

  {
    id: "InTech",
    title: "inTech Jobs",
    image: InTechJobsImg,
    description: [
      "inTech Jobs is a MERN-stack job board built by a team of three, designed to help Junior Developers search, save, and track job applications.",
      "We integrated the Adzuna API to fetch listings using 'Junior' and 'Developer' keywords and added full CRUD functionality for managing saved jobs.",
      "I handled job data integration from the API, set up Google Maps for location display, and built auth protection to redirect unauthenticated users attempting to save jobs.",
      "This project strengthened my teamwork and Git workflow skills. We used Excalidraw for wireframes and Trello for task management to stay organised and deliver all planned features on time.",
    ],
    siteUrl: "https://intechjobs.netlify.app/",
    githubFrontendUrl: "https://github.com/sdg877/InTechFrontend",
    githubBackendUrl: "https://github.com/sdg877/InTechBackend",
  },
  {
    id: "SpookSpotters",
    title: "UK Spook Spotters",
    image: SpookSpottersImg,
    description: [
      "UK Spook Spotters was my Unit 2 bootcamp project: a full-stack app built with Node.js, Express, and MongoDB, where users can log paranormal sightings across the UK.",
      "Features include full CRUD functionality, Google OAuth for authentication, and restricted access for non-logged-in users. Users can record, search, and view detailed sightings.",
      "The backend uses Mongoose schemas for users, sightings, and locations. The frontend is built with Vue.js, designed for a clean, intuitive experience.",
      "A key challenge was implementing user permissions. I also fractured my dominant elbow two weeks before the deadline but still delivered the project on time.",
      "I gained confidence in debugging and strengthened my problem-solving skills. In future, I’d like to add a map feature and support for international sightings.",
    ],
    siteUrl: "https://unique-salmiakki-662491.netlify.app/",
    githubFrontendUrl: "https://github.com/sdg877/Project2Frontend",
    githubBackendUrl: "https://github.com/sdg877/Project2Backend",
  },

  {
    id: "Snake",
    title: "Unit 1 Project - Snake",
    image: SnakeImg,
    description: [
      "This was my first coding project during General Assembly’s Software Engineering Bootcamp. I chose to build the classic Snake game using JavaScript, HTML, and CSS.",
      "The game challenges players to guide the snake to eat food, growing longer and faster, while avoiding collisions with walls or itself.",
      "This project strengthened my understanding of JavaScript fundamentals including event listeners, game loops, and collision detection.",
      "Additional features I added were a high score tracker, sound effects, and a custom alert to start the game.",
    ],
    siteUrl: "https://sdg877.github.io/Unit1_Project_Snake/",
    githubFrontendUrl: "https://github.com/sdg877/Unit1_Project_Snake",
    githubBackendUrl: "",
  },
];

export default projects;
