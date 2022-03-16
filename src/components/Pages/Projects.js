import React from "react";
import ProjectCard from "./Projects/ProjectCard";
import "./Projects/ProjectList.css";

const Projects = ({ projects, darkMode }) => {
  return (
    <div className="project-list">
      {projects.map((project) => {
        return (
          <ProjectCard
            project={project}
            key={project.reference}
            darkMode={darkMode}
          />
        );
      })}
    </div>
  );
};

export default Projects;
