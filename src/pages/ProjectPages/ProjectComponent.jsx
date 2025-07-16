import React from "react";
import { useParams } from "react-router-dom";
import projects from "./projectsdata";
import ProjectPage from "./ProjectPage";

const ProjectComponent = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return <p>Project not found.</p>;
  }

  const githubLinks = [];
  if (project.githubFrontendUrl) {
    githubLinks.push({ label: "GitHub Frontend", url: project.githubFrontendUrl });
  }
  if (project.githubBackendUrl) {
    githubLinks.push({ label: "GitHub Backend", url: project.githubBackendUrl });
  }

  return (
    <ProjectPage
      title={project.title}
      image='../../images/${project.image}'
      altText={project.title}
      descriptionParagraphs={project.description}
      siteLink={project.siteUrl}
      githubLinks={githubLinks}
    />
  );
};

export default ProjectComponent;
