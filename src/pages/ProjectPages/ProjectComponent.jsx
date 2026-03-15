import React from "react";
import { useParams } from "react-router-dom";
import projects from "./projectsdata";
import ProjectPage from "./ProjectPage";

const ProjectComponent = () => {
  const { id } = useParams();
  const projectIndex = projects.findIndex((proj) => proj.id === id);
  const project = projects[projectIndex];

  if (!project) {
    return <p>Project not found.</p>;
  }

  const nextProjectIndex = (projectIndex + 1) % projects.length;
  const nextProject = projects[nextProjectIndex];

  const githubLinks = [];
  if (project.githubFrontendUrl) {
    githubLinks.push({
      label: "GitHub Frontend",
      url: project.githubFrontendUrl,
    });
  }
  if (project.githubBackendUrl) {
    githubLinks.push({
      label: "GitHub Backend",
      url: project.githubBackendUrl,
    });
  }

  return (
    <ProjectPage
      title={project.title}
      image={project.image}
      altText={project.title}
      descriptionParagraphs={project.description}
      video={project.video}
      codeSnippets={project.codeSnippets} // This line is crucial
      siteLink={project.siteUrl}
      githubLinks={githubLinks}
      nextProjectPath={`/projects/${nextProject.id}`}
      nextProjectLabel={nextProject.title}
    />
  );
};

export default ProjectComponent;