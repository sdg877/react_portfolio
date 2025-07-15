// src/data/projectsData.js

const projects = [
  {
    slug: "AIChatBot",
    name: "AI Chat Bot",
    path: "/projects/AIChatBot",
    image: require("../Images/AIChatBot.png"),
    description: [
      "Built in March 2025 using Flask, MongoDB, and the OpenAI API, this web app allows users to register, log in, and chat with an AI while storing and managing conversation history.",
      "Key features include user authentication, persistent chat history with renaming/deletion, a search function, smart subject generation, and a welcome message for new chats.",
      "This project strengthened my skills in Flask, JavaScript, and API integration, and gave me hands-on experience with deployment and authentication. Planned improvements include real-time updates and file uploads.",
    ],
    liveLink: "https://chatbot-sdrakegill.pythonanywhere.com/",
    githubLink: "https://github.com/sdg877/ai_chatbot",
  },
  {
    slug: "HTJ",
    name: "Heather Treharne Jones Site",
    path: "/projects/HTJ",
    image: require("../Images/HTJ.png"),
    description: [
      "This is the portfolio website for Heather Treharne Jones, built using Next.js, showcasing her design work and services.",
      "The site focuses on minimal, elegant design, and was built with accessibility and SEO in mind.",
    ],
    liveLink: "https://www.heathertreharnejones.co.uk/",
    githubLink: "https://github.com/sdg877/heather-treharne-jones",
  },
  // ... other projects here
];

export default projects;
